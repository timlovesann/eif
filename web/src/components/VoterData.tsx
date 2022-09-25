import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Button, Col, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import { TableColumn } from "react-data-table-component";
import { Redirect } from "react-router-dom";
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";

export interface Voter {
    last_name: string;
    first_name: string;
    middle_name: string;
    name_suffix: string;
}
export const VoterData: React.FC = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [isQvfDateLoading, setIsQvfDateLoading] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const [qvfDates, setQvfDates] = useState([]);
  const [qvfDate, setQvfDate] = useState(" --- Select QVF Date --- ");

  const [isCountyDropdownLoading, setIsCountyDropdownLoading] = useState(true);
  const [counties, setCounties] = useState([]);
  const [countyName, setCountyName] = useState("Loading Counties ...");

  const [isJurisdictionDropdownLoading, setIsJurisdictionDropdownLoading] = useState(false);
  const [jurisdictions, setJurisdictions] = useState([]);
  const [jurisdictionName, setJurisdictionName] = useState(" --- Select Jurisdiction --- ");

  const [readyforSearch, setReadyForSearch] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [hideDownloadButton, setHideDownloadButton] = useState(true);
  const columns: TableColumn<Voter>[] = useMemo(() => [
    {
      name: 'Last Name',
      selector: (row: { last_name: any; }) => row.last_name,
      sortable: true,
      width: '300px'
    },
    {
      name: 'First Name',
      selector: (row: { first_name: any; }) => row.first_name,
      sortable: true,
      width: '300px'
    }, 
    {
      name: 'Middle Name',
      selector: (row: { middle_name: any; }) => row.middle_name,
      sortable: true,
      width: '300px'
    },
    {
      name: 'Name Suffix',
      selector: (row: { name_suffix: any; }) => row.name_suffix,
      sortable: true,
      width: '300px'
    },     
  ], []);
  
  function validateCountySelection(countySelected): void {
    if (countySelected == "0") {
      setReadyForSearch(false);
    } else {
      setReadyForSearch(true);
      setCountyName(countySelected);
      fetchJurisdictions(countySelected);
    }
  }

  function validateJurisdictionSelection(jurisdictionSelected): void {
    if(jurisdictionSelected == "0"){
      setReadyForSearch(false);
    } else {
      setReadyForSearch(true);
      setJurisdictionName(jurisdictionSelected);
    }
  }

  function fetchJurisdictions(countyName: string) {
    setIsJurisdictionDropdownLoading(true);
    fetch(process.env.REACT_API_BASE_URL + `/api/jurisdictions/${countyName}`)
      .then((res) => res.json())
      .then((jurisdictions) => {
        setJurisdictions(jurisdictions);
        setIsJurisdictionDropdownLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });    
  }
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      setRedirect("/login"); 
    } 
    setCurrentUser(currentUser);
    setUserReady(true);    
    let unmounted = false;
    fetch(process.env.REACT_API_BASE_URL + '/api/qvfdates')
      .then((res) => res.json())
      .then((qvfDates) => {
        setQvfDates(qvfDates);
        setQvfDate(qvfDates[0].table_name);
        setIsQvfDateLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    const abortController = new AbortController();
      void async function fetchCounties() {
        try {
          const url = process.env.REACT_API_BASE_URL + '/api/counties';
          const response = await fetch(url, { signal: abortController.signal });
          setCounties(await response.json());
          setIsCountyDropdownLoading(false);
        } catch (error) {
          console.log('error', error);
        }
      }();
      return () => {
        abortController.abort();
      }      
  }, []);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();    
    setIsSearchLoading(true);
    setResponseMessage("");
    const resp = await axios.get(process.env.REACT_API_BASE_URL + `/api/downloads/${qvfDate}/${countyName}`, { headers: authHeader() });
    if(resp.status === 200) {
      setResponseMessage("Success");
      if(resp.data.length === 0) {
        setHideDownloadButton(true);
      } else {
        setHideDownloadButton(false);
      }
    } else {      
      setResponseMessage("Error");
    }
    setIsSearchLoading(false);
  } 
  if (redirect) {
    return <Redirect to={redirect} />
  } else {
    return (
      <div className="container">
        <h1>UNDER CONSTRUCTION</h1>
        <Form onSubmit={submitForm}>
          <FormGroup role="form">
              <Row>
              <Col>
              <label>
                QVF Date
                  <Form.Select
                    disabled={isQvfDateLoading}
                    value={qvfDate}
                    onChange={(e) => setQvfDate(e.currentTarget.value)}
                  >
                    {qvfDates.map((qvf) => (                    
                      <option key={qvf.table_name} value={qvf.table_name}>
                      {qvf.table_name.split('_')[1]}
                      </option>
                    ))}
                    </Form.Select>    
                  </label>
                </Col>                
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
                  Jurisdiction (required)
                    <Form.Select required
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
              </Row>
              <Row><Col>&nbsp;</Col></Row>
              <Row>
                <Button size='lg' type="submit" className="btn" disabled={!readyforSearch}>Generate File</Button>
              </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default VoterData;