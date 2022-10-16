import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import VoterInformation from './VoterInformation';
import VoterSummary from './VoterSummary';
import { VoterType } from '../types/voter.type';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Card, Col, Form, FormGroup, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import AuthService from "../services/auth.service";
import authHeader from '../services/auth-header';
import { CSVLink } from 'react-csv';

export interface Voter {
  voter_identification_number: string;
  registration_date: string;
  county_name: string;
  voter_full_name: string;
  full_address: string;
  year_of_birth: number;
}

export interface VoterHistory {
  county_name: string;
  jurisdiction_name: string;
  election_date: Date;
  voting_method: string;
}

const MyVotingHistory: React.FC = () => {
  const [redirect, setRedirect] = useState(null);
  const [summaryCallComplete, setSummaryCallComplete] = useState(false);
  const [historyCallComplete, setHistoryCallComplete] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: ""});

  const [isCountyDropdownLoading, setIsCountyDropdownLoading] = useState(true);
  const [counties, setCounties] = useState([]);
  const [countyName, setCountyName] = useState(" --- Select County --- ");
  const [readyforSearch, setReadyForSearch] = useState(false);  

  const [voterLastName, setVoterLastName] = useState("");
  const [voterFirstName, setVoterFirstName] = useState("");
  const [voterYearOfBirth, setVoterYearOfBirth] = useState("");
  const [voterZip, setVoterZip] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [voterSummary, setVoterSummary] = useState<Voter>();
  const [voterHistory, setVoterHistory] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");  
  const [hideDownloadButton, setHideDownloadButton] = useState(true);
  const columns: TableColumn<VoterHistory>[] = useMemo(
    () => [
      {
        name: 'County Name',
        selector: (row: { county_name: any; }) => row.county_name,
        sortable: true
      },  
      {
        name: 'Jurisdiction Name',
        selector: (row: { jurisdiction_name: any; }) => row.jurisdiction_name,
        sortable: true
      },      
      {
        name: 'Election Date',
        selector: (row: { election_date: any; }) => row.election_date,
        sortable: true        
      },      
      {
        name: 'Voting Method',
        selector: (row: { voting_method: any; }) => row.voting_method,
        sortable: true
      },  
    ], []
  ); 

  const checkAuthZ = (next) => {
    const currentUser = AuthService.getCurrentUser();
    setCurrentUser(currentUser);
    setUserReady(true);
    if (!currentUser || currentUser === null) {
      setRedirect("/login"); 
    } else {
      if(currentUser.roles.includes("ROLE_USER")) {
        next();
      } else {
        setRedirect("/donate"); 
      }
    }    
  }  
  useEffect(() => {
    checkAuthZ(function() {  
      let unmounted = false;
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
    });           
  }, []);
  
  function validateCountySelection(countySelected): void {
    setResponseMessage('');
    if(countySelected === ""){
      setReadyForSearch(false);
      setHideDownloadButton(true);
    } else {
      setCountyName(countySelected);
    }
  }
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    setIsLoading(true);
    setHideDownloadButton(true);
    const voterSummaryPromise = new Promise(async (resolve, reject) => {
      await axios.get(process.env.REACT_API_BASE_URL + `/api/voter-summary/${countyName}/${voterZip}/${voterLastName}/${voterFirstName}/${voterYearOfBirth}`, { headers: authHeader() })
      .then(async resp => {
        if(resp.status === 200) {        
          setVoterSummary(resp.data[0]);
          if(resp.data.length === 1) {
            await axios.get(process.env.REACT_API_BASE_URL + `/api/voter-history/${resp.data[0].voter_identification_number}`, { headers: authHeader() })
            .then(respHistory => {
              if(respHistory.status === 200) {
                setVoterHistory(respHistory.data);
                if(respHistory.data.length > 0) {
                  setHideDownloadButton(false);
                }                
              }              
            }).catch(error => {
              console.log(error);
              if(error.response.status === 403 || error.response.status === 401) {        
                setRedirect("/login");
              }              
            });
            setIsLoading(false);
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
        reject(error.response.status);
      });
    });
    const allPromises = Promise.allSettled( [voterSummaryPromise] );
    allPromises.then((allResults) => allResults.forEach((result) => {
      if(result.status === 'fulfilled') {
        setResponseMessage("Success");  
        setSummaryCallComplete(true);
        setHistoryCallComplete(true);
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
      <>
      <div className="container">
        <Form onSubmit={submitForm}>
          <FormGroup role="form">
          <Row>
            <Col>
                {
                isCountyDropdownLoading ? <Spinner animation="border" variant='danger' role="status"></Spinner>
                : null
                }
                <div className="col-lg-24">
                <label>
                  County
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
                </div>
              </Col>            
            <Col>
              <div className="col-lg-9">
              <label>
                Zip
                <Form.Control
                  required
                  minLength={5}
                  maxLength={5}
                  value={voterZip}
                  onChange={(e) => setVoterZip(e.target.value)}
                  type="text"
                  placeholder="Enter Zip"
                  className="input"                
                />
              </label>
              </div>
            </Col>
            <Col>
              <label>
                Last Name
                <Form.Control
                  required
                  minLength={1}
                  maxLength={25}
                  value={voterLastName}
                  onChange={(e) => setVoterLastName(e.target.value)}
                  type="text"
                  placeholder="Enter Last Name"
                  className="input"                  
                />
              </label>
            </Col>
            <Col>
              <label>
                First Name
                <Form.Control
                  required
                  minLength={1}
                  maxLength={20}
                  value={voterFirstName}
                  onChange={(e) => setVoterFirstName(e.target.value)}
                  type="text"
                  placeholder="Enter First name"
                  className="input"                
                />
              </label>
            </Col>     
            <Col>
              <label>
                Year of Birth
                <Form.Control
                  required
                  minLength={4}
                  maxLength={4}
                  value={voterYearOfBirth}
                  onChange={(e) => setVoterYearOfBirth(e.target.value)}
                  type="text"
                  placeholder="Enter Year of Birth"
                  className="input"                
                />
              </label>
            </Col>                  
          </Row>
          <Row>
            <Col>
              &nbsp;
            </Col>
          </Row>
          <Row>
            <Button size='lg' type="submit" className="btn">Get My Voting History</Button>
          </Row>
          </FormGroup>
        </Form>
      </div>
      <br/>
      <div>
        {
          <>
            {
            isLoading ? 
              <Spinner animation="border" variant='danger' role="status"><span className="sr-only">Loading...</span></Spinner>
              : voterSummary ? 
                <Card className="info-card">
                    <Card.Body style={{ color: "black" }}>
                        <Card.Title>{voterSummary.voter_full_name}</Card.Title>
                        <Card.Subtitle>QVF 2022 Sep 01</Card.Subtitle>
                        <Card.Text style={{ color: "black" }}>
                          Registration Date: {voterSummary.registration_date}<br />
                          Voter Identification Number: {voterSummary.voter_identification_number}<br />
                          Year of birth: {voterSummary.year_of_birth}<br />
                          Address: {voterSummary.full_address}<br />
                        </Card.Text>               
                    </Card.Body>
                    <Card.Footer>
                    <div className="App">
                      <a href="files/AffidavitForm.pdf" download="AffidavitForm.pdf">Download Affidavit Pdf</a>
                    </div>
                    </Card.Footer>
                </Card>
              : <span></span>
            } 
          </>          
        }      
      </div>
      <div>
        <>
        {
          (summaryCallComplete && voterSummary === undefined) ? <span>No record found for criteria: {countyName} {voterZip} {voterLastName} {voterFirstName} {voterYearOfBirth}</span>
          : <span></span>
        }
        </>
      </div>     
      <div>
        {
          <>
          {
            isLoading ? 
            <Spinner animation="border" variant='danger' role="status"><span className="sr-only">Loading...</span></Spinner>
            : voterHistory.length > 0 ? <><h4>Voting history according to QVF: 01 Sep 2022</h4>
              <p>
                <CSVLink hidden={hideDownloadButton} data={voterHistory} filename={voterSummary.voter_identification_number + '-' + voterLastName + '-voting-history.csv'}>
                  <Button className="button" color="red" size={'lg'}>Download results</Button>
                </CSVLink>
              </p>
            <DataTable columns={columns} data={voterHistory} /></>
            : <span></span>
          }    
          </>
        }      
      </div>
      <div>
        <>
        <>
        {
          (historyCallComplete && voterHistory.length == 0) ? <span>No Voting history found.</span>
          : <span></span>
        }
        </>        
        </>
      </div>
      </>
    );
  }
}

const Dropdown = ({ loading, label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select disabled={loading} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default MyVotingHistory;
