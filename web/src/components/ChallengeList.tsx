import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Col, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import {CSVLink} from 'react-csv';
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";
import authHeader from "../services/auth-header";
import CountyInformation from "./CountyInformation";
import { CountySummary } from "../types/county.type";
import { CountyMetadata } from "../types/countymetadata.type";
import { resourceLimits } from "worker_threads";
import e from "express";

export interface RegisteredVoter {
  challenge_codes: string;
  full_street_address: string;
  full_name: string;
  voter_identification_number: string;
  year_of_birth: string;
  name: string;
  type: string;   
  street_number: string;
  street_name: string;
  street_type: string;
  extension: string;
  city: string;
  zip_code: string; 
  jurisdiction_name: string;
  precinct: string;
  uocava_status_code: string;
  nov_2020_election_date: string;
  voted_nov_2020: string;
  absentee_or_in_person_nov_2020: string;
  aug_2022_election_date: string;
  voted_aug_2022: string;
  absentee_or_in_person_aug_2022; string;
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
  const [countySummaryInfo, setCountySummaryInfo] = useState<CountySummary>();
  const [countyMetadataInfo, setCountyMetadataInfo] = useState<CountyMetadata>(); 
  const [hideDownloadButton, setHideDownloadButton] = useState(true);

  const columns: TableColumn<RegisteredVoter>[] = useMemo(() => [
      {
        name: 'Challenge Code(s)',
        selector: (row: { challenge_codes: any; }) => row.challenge_codes,
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
        name: 'Name',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
        width: '250px'
      },         
      {
        name: 'Type',
        selector: (row: { type: any; }) => row.type,
        sortable: true,
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
    setPrecinctName(" --- Select Precinct --- ");
    setResponseMessage('');
    setCountySummaryInfo(null);
    setCountyMetadataInfo(null);
    if(countySelected == "0"){
      setReadyForSearch(false);
      setHideDownloadButton(true);
    } else {
      setCountyName(countySelected);
      fetchJurisdictions(countySelected);
    }
  }

  function fetchJurisdictions(countyName: string) {
    setIsJurisdictionDropdownLoading(true);
    fetch(process.env.REACT_API_BASE_URL + `/api/jurisdictions/${countyName}`)
      .then((res) => res.json())
      .then((jurisdictions) => {
        setJurisdictions(jurisdictions);        
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsJurisdictionDropdownLoading(false);
      });   
  }

  function validateJurisdictionSelection(jurisdictionSelected): void {
    if(jurisdictionSelected == "0"){
      setReadyForSearch(false);
    } else {
      setReadyForSearch(true);
      setJurisdictionName(jurisdictionSelected);
      fetchPrecincts(jurisdictionSelected);
    }
  }

  function fetchPrecincts(jurisdictionName: string) {
    setIsPrecinctDropdownLoading(true);
    fetch(process.env.REACT_API_BASE_URL + `/api/precincts/${countyName}/${jurisdictionName}`)
      .then((res) => res.json())
      .then((precincts) => {
        setPrecincts(precincts);
        setIsPrecinctDropdownLoading(false);
        setPrecinctName("0");
      })
      .catch((err) => {
        console.log(err);
      });    
  }

  function validatePrecinctSelection(precinctSelected): void {
    if(precinctSelected == "0"){
      setReadyForSearch(true);
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
    setHideDownloadButton(true);
    let challenge_list_url = process.env.REACT_API_BASE_URL + `/api/challenge-list/${countyName}/${jurisdictionName}/`;
    if(precinctName != "0") {
      challenge_list_url = challenge_list_url + `${precinctName}`;
    }
    let endpoints = [
      process.env.REACT_API_BASE_URL + `/api/county-summary/${countyName}`,
      process.env.REACT_API_BASE_URL + `/api/county-metadata/${countyName}`,
      challenge_list_url
    ];
    const countySummaryPromise = new Promise(async (resolve, reject) => {
      await axios.get(endpoints[0])
      .then(resp => {
        if(resp.status === 200) {        
          setCountySummaryInfo(resp.data);
          resolve(resp);
        } else {
          reject(resp.status);
        }
      })
      .catch(error => {
        if(error.response.status === 403 || error.response.status === 401) {        
          setRedirect("/login");
        }
        reject(error.response.responseMessage);
      });
    });
    const countyMetadataPromise = new Promise(async (resolve, reject) => {
      await axios.get(endpoints[1])
      .then(resp => {
        if(resp.status === 200) {
          setCountyMetadataInfo(resp.data[0]);
          resolve(resp);
        } else {
          reject(resp.status);
        }
      })
      .catch(error => {
        if(error.response.status === 403 || error.response.status === 401) {
          setRedirect("/login");
        }
        reject(error.response.responseMessage);
      });
    });
    const challengeListPromise = new Promise((resolve, reject) => {
      axios.get(endpoints[2], { headers: authHeader() })
      .then(resp => {
        if(resp.status === 200) {
          setChallengeableVoters(resp.data);                  
          console.log(resp.data.length);
          if(resp.data.length > 0) {
            setHideDownloadButton(false);
          }
          resolve(resp);
        } else {
          reject(resp.status);
        }
      })
      .catch(error => {        
        if(error.response.status === 403 || error.response.status === 401) {
          setRedirect("/login");
        }        
        reject(error.response.responseMessage);
      });  
    });
    const allPromises = Promise.allSettled( [countySummaryPromise, countyMetadataPromise, challengeListPromise] );
    allPromises.then((allResults) => allResults.forEach((result) => {
      if(result.status === 'fulfilled') {
        setResponseMessage("Success");                
      }
      if(result.status === 'rejected') {
        setResponseMessage(result.reason);        
      }    
      setIsLoading(false);    
    }));
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
                  County (required)
                    <Form.Select required
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
                    <div>
                      <CountyInformation countySummary={countySummaryInfo} countyMetadata={countyMetadataInfo}/>
                    </div>
                    <p>Ghostbusting data updated as of 2022-09-26.</p>
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