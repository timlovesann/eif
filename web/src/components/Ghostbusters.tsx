import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Col, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import {CSVLink, CSVDownload} from 'react-csv';
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";
import authHeader from "../services/auth-header";

export interface Ghost {
  full_street_address: string;
  registration_count: string;
  street_name: string;
  street_type: string;
  extension: string;
  city: string;
  zip_code: string;  
  beds_apts_lots_qty: string;
  name: string;
  type: string;
  year_of_birth: string;
  jurisdiction_name: string;
  precinct: string;
}

export const Ghostbusters: React.FC = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: ""});

  const [isLoading, setIsLoading] = useState(false);

  const [isCountyDropdownLoading, setIsCountyDropdownLoading] = useState(true);
  const [counties, setCounties] = useState([]);
  const [countyName, setCountyName] = useState("Loading Counties ...");

  const [readyforSearch, setReadyForSearch] = useState(false);  
  const [responseMessage, setResponseMessage] = useState("");  
  const [locations, setLocations] = useState([]);
  const [hideDownloadButton, setHideDownloadButton] = useState(true);
  const [emptyLocationDataMessage, setEmptyLocationDataMessage] = useState("");  

  const columns: TableColumn<Ghost>[] = useMemo(() => [
      {
        name: 'Full Street Address',
        selector: (row: { full_street_address: any; }) => row.full_street_address,
        sortable: true,
        width: '300px'
      },   
      {
        name: 'Registration Count',
        selector: (row: { registration_count: any; }) => row.registration_count,
        sortable: true,
        width: '200px'
      },                                            
      {
        name: 'Beds/Apt/Lots Qty',
        selector: (row: { beds_apts_lots_qty: any; }) => row.beds_apts_lots_qty,
        sortable: true,
        width: '200px'
      },
      {
        name: 'Name',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
        width: '250px'
      },         
      {
        name: 'Type',
        selector: (row: { type: any; }) => row.type,
        sortable: true,
      },
      {
        name: 'Jurisdiction Name',
        selector: (row: { jurisdiction_name: any; }) => row.jurisdiction_name,
        sortable: true,          
        width: '200px'
      },
      {
        name: 'Precinct',
        selector: (row: { precinct: any; }) => row.precinct,
        sortable: true,
        width: '150px'
      }                                                                                          
    ], []
  );  
  
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      setRedirect("/login"); 
    } 
    setCurrentUser(currentUser);
    setUserReady(true);

    const abortController = new AbortController();
    setIsCountyDropdownLoading(true);    
    void async function fetchCounties() {
      try {
        const url = process.env.REACT_API_BASE_URL + '/api/counties';
        const response = await fetch(url, { signal: abortController.signal });
        setCounties(await response.json());
        setIsCountyDropdownLoading(false);
        setIsLoading(false);
      } catch (error) {
          console.log('error', error);
      }
    }();

    return () => {
      abortController.abort();
    }
  }, []);  

  function validateCountySelection(countySelected): void {
    console.log("county selected: " + countySelected);
      if(countySelected === ""){
        setReadyForSearch(false);    
      } else {
        setReadyForSearch(true);         
      }
      setCountyName(countySelected);
      setLocations([]);
      setHideDownloadButton(true);
      setEmptyLocationDataMessage("");
    }

  const ExpandedComponent = () => ({ data }) => {
    return (
      <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    );
  };
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();    
    setIsLoading(true);
    setResponseMessage("");
    await axios.get(process.env.REACT_API_BASE_URL + `/api/ghostbuster-locations/${countyName}`, { headers: authHeader() })
      .then(resp => {
        if(resp.status === 200) {
          setLocations(resp.data);
          if(resp.data.length > 0) {
            setHideDownloadButton(false);
          }
          if(resp.data.length === 0) {
            setEmptyLocationDataMessage(`No Ghostbusting locations found for ${countyName}`);
          }
          setResponseMessage("Success");
        } else {
          setHideDownloadButton(true);
        }
      })
      .catch(error => {        
        if(error.response.status === 403 || error.response.status === 401) {
          setRedirect("/login");
        }        
      })
      .finally(() => {
        setIsLoading(false);
      });
  }      
  if(redirect) {
    return <Redirect to={redirect} />
  } else {
    return (
      <div className="container">
        <Form onSubmit={submitForm}>
          <FormGroup role="form">
            <Row>
              <Col>
                {
                isCountyDropdownLoading ? <Spinner animation="border" variant='danger' role="status"></Spinner>
                : null
                }             
                <label>
                  County
                    <Form.Select
                      disabled={isCountyDropdownLoading}
                      value={countyName}
                      onChange={(e) => validateCountySelection(e.currentTarget.value)}>
                        <option value=""> --- Select County --- </option>  
                        {
                          counties.map((county) => (
                            <option key={county.county_name} value={county.county_name}>
                              {county.county_name}
                            </option>
                          ))
                        }
                    </Form.Select>    
                </label>    
              </Col>                    
            </Row>
            <Row><Col>&nbsp;</Col></Row>
            <Row>
                <Button size='lg' type="submit" className="btn" disabled={!readyforSearch}>Get Ghost Locations</Button>
            </Row>
          </FormGroup>
        </Form>
        <br />
        <div>
          {
            isLoading ? 
              (responseMessage === '') ? <Spinner animation="border" variant='danger' role="status"></Spinner>
              : ""
              : ""
          }
          {
            !isLoading ?  
              (responseMessage === 'Success') ? 
                  <>
                    <p>
                      <CSVLink hidden={hideDownloadButton} data={locations} filename={countyName + '-flagged-addresses.csv'}>
                        <Button className="button" color="red" size={'lg'}>Download results</Button>
                      </CSVLink>
                    </p>
                    <DataTable  expandableRows 
                                expandableRowsComponent={ExpandedComponent()}
                                columns={columns} 
                                data={locations} 
                                highlightOnHover 
                                pagination 
                                paginationPerPage={10} 
                                paginationTotalRows={locations.length}
                                noDataComponent={emptyLocationDataMessage}/>
                  </>
              : (responseMessage === 'Error') ? "Error fetching records. Please retry." : ""
              : ""
          }
        </div>
      </div>
    );
  }  
};

export default Ghostbusters;