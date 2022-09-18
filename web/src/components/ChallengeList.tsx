import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Col, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import {CSVLink, CSVDownload} from 'react-csv';
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";
import authHeader from "../services/auth-header";

export interface RegisteredVoter {
  error_code: string;
  full_street_address: string;
  full_name: string;
  voter_identification_number: string;
  year_of_birth: string;
  street_name: string;
  street_type: string;
  extension: string;
  city: string;
  zip_code: string;
  name: string;
  type: string;  
  jurisdiction_name: string;
  precinct: string;
  first_name: string;
  middle_name: string;
  last_name: string;
}

export const ChallengeList: React.FC = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: ""});

  const [isLoading, setIsLoading] = useState(false);

  const [isCountyDropdownLoading, setIsCountyDropdownLoading] = useState(true);
  const [counties, setCounties] = useState([]);
  const [countyName, setCountyName] = useState("Loading Counties ...");

  const [isJurisdictionDropdownLoading, setIsJurisdictionDropdownLoading] = useState(false);
  const [jurisdictions, setJurisdictions] = useState([]);
  const [jurisdictionName, setJurisdictionName] = useState(" --- Select Jurisdiction --- ");

  const [isPrecinctDropdownLoading, setIsPrecinctDropdownLoading] = useState(false);
  const [precincts, setPrecincts] = useState([]);
  const [precinctName, setPrecinctName] = useState(" --- Select Precinct --- ");  

  const [readyforSearch, setReadyForSearch] = useState(false);  
  const [responseMessage, setResponseMessage] = useState("");  
  
  const [challengeableVoters, setChallengeableVoters] = useState([]);
  
  const [hideDownloadButton, setHideDownloadButton] = useState(true);

  const columns: TableColumn<RegisteredVoter>[] = useMemo(() => [
      {
        name: 'Error Code',
        selector: (row: { type: string; }) => getErrors(row),
        sortable: true,
        width: '300px',
      },
      {
        name: 'Full Street Address',
        selector: (row: { full_street_address: any; }) => row.full_street_address,
        sortable: true,
        width: '300px',
      },   
      {
        name: 'Full Name',
        selector: (row: { full_name: any; }) => row.full_name,
        sortable: true,
        width: '200px'
      }, 
      {
        name: 'Year of Birth',
        selector: (row: { year_of_birth: any; }) => row.year_of_birth,
        sortable: true,
        width: '100px'
      },                                           
      {
        name: 'Voter Identification Number',
        selector: (row: { voter_identification_number: any; }) => row.voter_identification_number,
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
      },
      {
        name: 'First Name',
        selector: (row: { first_name: any; }) => row.first_name,        
        sortable: true,
        width: '10px'
      },  
      {
        name: 'Middle Name',
        selector: (row: { middle_name: any; }) => row.middle_name,        
        sortable: true,
        width: '10px'
      },
      {
        name: 'Last Name',
        selector: (row: { last_name: any; }) => row.last_name,        
        sortable: true,
        width: '10px'
      },                                                                                                    
    ], []
  );  
  
  function getErrors(row) {
    var errors = "";
    if(row.type === 'Business' || row.type === 'Hotel' || row.type === 'Cemetary' || row.type === 'Empty Lot') {
      errors = "ADDRESS_ILLEGAL ";
    }
    if( (row.type === 'Apartment' || row.type === 'Trailer Park' || row.type === 'RV Park-Seasonal') && (row.extension === null || row.extension === '')) {
      errors = errors + "ADDRESS_EXTENSION ";
    }
    if(row.year_of_birth < 1912) {
      errors = errors + "AGE_OVER ";
    } 
    if(row.year_of_birth > 2004) {
      errors = errors + "AGE_UNDER ";
    }
    if( (row.first_name === row.last_name) || (row.last_name === row.middle_name) ) {
      errors = errors + "NAME_DUPLICATE ";
    }
    return errors;
  }
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
        const url = 'https://data.electionintegrityforce.com/api/counties';
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
    setPrecinctName(" --- Select Precinct --- ");
    if(countySelected == "0"){
      setReadyForSearch(false);    
    } else {
      setCountyName(countySelected);
      fetchJurisdictions(countySelected);
    }
  }

  function fetchJurisdictions(countyName: string) {
    setIsJurisdictionDropdownLoading(true);
    fetch(`https://data.electionintegrityforce.com/api/jurisdictions/${countyName}`)
    //fetch(`http://localhost:8081/api/jurisdictions/${countyName}`)
      .then((res) => res.json())
      .then((jurisdictions) => {
        setJurisdictions(jurisdictions);
        setIsJurisdictionDropdownLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });    
  }

  function validateJurisdictionSelection(jurisdictionSelected): void {
    if(jurisdictionSelected == "0"){
      setReadyForSearch(false);    
    } else {
      setJurisdictionName(jurisdictionSelected);
      fetchPrecincts(jurisdictionSelected);
    }
  }

  function fetchPrecincts(jurisdictionName: string) {
    setIsPrecinctDropdownLoading(true);
    fetch(`https://data.electionintegrityforce.com/api/precincts/${countyName}/${jurisdictionName}`)
    //fetch(`http://localhost:8081/api/precincts/${countyName}/${jurisdictionName}`)
      .then((res) => res.json())
      .then((precincts) => {
        setPrecincts(precincts);
        setIsPrecinctDropdownLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });    
  }

  function validatePrecinctSelection(precinctSelected): void {
    if(precinctSelected == "0"){
      setReadyForSearch(false);
    } else {
      setPrecinctName(precinctSelected);
      setReadyForSearch(true);
    }
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
    //const resp = await axios.get(`http://localhost:8081/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: authHeader() });
    const resp = await axios.get(`https://data.electionintegrityforce.com/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: authHeader() });
    if(resp.status === 200) {
      setResponseMessage("Success");
      setChallengeableVoters(resp.data);
      if(resp.data.length === 0) {
        setHideDownloadButton(true);
      } else {
        setHideDownloadButton(false);
      }
    } else {      
      setResponseMessage("Error");
    }
    setIsLoading(false);
  }

  const conditionalRowStyles = [
    {
      when: columns => ( (columns.extension === null || columns.extension === '') && (columns.type === 'RV Park-Seasonal' || columns.type === 'Apartment' || columns.type === 'Trailer Park') ),
      style: {
        color: 'red',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: columns => (columns.type === 'Business' || columns.type === 'Hotel' || columns.type === 'Cemetary' || columns.type === 'Empty Lot'),
      style: {
        color: 'red',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: columns => (columns.year_of_birth < 1912 || columns.year_of_birth > 2004),      
      style: {
        color: 'red',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    }        
    /* You can also pass a callback to style for additional customization
    {
      when: row => row.email.includes('.com'),
      style: row => ({
        backgroundColor: row.phone.startsWith('9') || row.phone.startsWith('1') ? 'pink' : 'inerit',
      }),
    },*/
  ];
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
              <Col>
                {
                isJurisdictionDropdownLoading ? <Spinner animation="border" variant='danger' role="status"></Spinner>
                : null
                }             
                <label>
                  Jurisdiction
                    <Form.Select
                      disabled={isJurisdictionDropdownLoading}
                      value={jurisdictionName}
                      onChange={(e) => validateJurisdictionSelection(e.currentTarget.value)}>
                        <option value=""> --- Select Jurisdiction --- </option>  
                        {
                          jurisdictions.map((jurisdiction) => (
                            <option key={jurisdiction.jurisdiction_name} value={jurisdiction.jurisdiction_name}>
                              {jurisdiction.jurisdiction_name}
                            </option>
                          ))
                        }
                    </Form.Select>    
                </label>    
              </Col> 
              <Col>
                {
                isPrecinctDropdownLoading ? <Spinner animation="border" variant='danger' role="status"></Spinner>
                : null
                }             
                <label>
                  Precinct
                    <Form.Select
                      disabled={isPrecinctDropdownLoading}
                      value={precinctName}
                      onChange={(e) => validatePrecinctSelection(e.currentTarget.value)}>
                        <option value=""> --- Select Precinct --- </option>  
                        {
                          precincts.map((precinct) => (
                            <option key={precinct.precinct} value={precinct.precinct}>
                              {precinct.precinct}
                            </option>
                          ))
                        }
                    </Form.Select>    
                </label>    
              </Col>                               
            </Row>
            <Row><Col>&nbsp;</Col></Row>
            <Row>
                <Button size='lg' type="submit" className="btn" disabled={!readyforSearch}>Get Precinct Challenge List</Button>
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
                      <CSVLink hidden={hideDownloadButton} data={challengeableVoters} filename={countyName + '-' + jurisdictionName + '-' + precinctName + '-challenge-list.csv'}>
                        <Button className="button" color="red" size={'lg'}>Download results</Button>
                      </CSVLink>
                    </p>                    
                    <DataTable  expandableRows 
                                expandableRowsComponent={ExpandedComponent()} 
                                expandOnRowClicked columns={columns} 
                                data={challengeableVoters} 
                                highlightOnHover 
                                conditionalRowStyles={conditionalRowStyles} 
                                pagination 
                                paginationPerPage={10} 
                                paginationTotalRows={challengeableVoters.length}
                                responsive
                                striped
                    />
                  </>
              : (responseMessage === 'Error') ? "Error fetching records. Please retry." : ""
              : ""
          }
        </div>
      </div>
    );
  }  
};

export default ChallengeList;