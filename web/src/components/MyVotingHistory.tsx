import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import VoterInformation from './VoterInformation';
import VoterSummary from './VoterSummary';
import { VoterType } from '../types/voter.type';
import { count } from 'console';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Col, Form, FormGroup, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import AuthService from "../services/auth.service";
import authHeader from '../services/auth-header';

export interface Voter {
    voter_identification_number: string;
    county_name: string;
    jurisdiction_name: string;
    election_date: string;
    is_absentee_voter: boolean;
}

const MyVotingHistory: React.FC = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: ""});

  const [qvfDates, setQvfDates] = useState([]);
  const [qvfDate, setQvfDate] = useState(" --- Select QVF Date --- ");

  const [counties, setCounties] = useState([]);
  const [countyName, setCountyName] = useState(" --- Select County --- ");

  const [voterId, setVoterId] = useState("");
  const [voterLastName, setVoterLastName] = useState("");
  const [voterFirstName, setVoterFirstName] = useState("");
  const [voterZip, setVoterZip] = useState("");
  const [voterCounty, setVoterCounty] = useState("");  
  const [isLoading, setIsLoading] = useState(true);
  const [voterInfo, setVoterInfo] = useState<VoterType>();
  const [responseMessage, setResponseMessage] = useState("");  
  const columns: TableColumn<Voter>[] = useMemo(
    () => [
      {
        name: 'Voter Identification Number',
        selector: (row: { voter_identification_number: any; }) => row.voter_identification_number,
        sortable: true
      },
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
        name: 'Is Absentee Vote',
        selector: (row: { is_absentee_voter: any; }) => row.is_absentee_voter,
        sortable: true
      },  
    ], []
  ); 
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [voterData, setVoterData] = useState([]);
  
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    setIsLoading(true);
    const urlBase = process.env.REACT_API_BASE_URL + `/api/votinghistory/${qvfDate}`;
    let urlSuffix = '';
    if(voterId) {
      urlSuffix = `/voterid:${voterId}`;
    } else {
      if(voterCounty) {
        urlSuffix = `/voterCounty:${voterCounty}/voterZip:${voterZip}/voterLastName:${voterLastName}/voterFirstName:${voterFirstName}`;
      }
    }

    const resp = await axios.get(urlBase + urlSuffix, { headers: authHeader() });
    if(resp.status === 200) {
      setResponseMessage("Success");
      //const voterInfo: VoterType = {county_name: "LIVINGSTON", last_name: "MNBC", first_name: "ABHJABD", middle_name: "K", voter_identification_number: "9420642"};
      setVoterInfo(voterInfo);
      setVoterId(voterId);
      setVoterData(resp.data);
    } else {      
      setResponseMessage("Error!");
    }
    setIsLoading(false);
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
              <label>
                QVF Date
                <Form.Select
                  disabled={isLoading}
                  value={qvfDate}
                  onChange={(e) => setQvfDate(e.currentTarget.value)}
                >
                  {qvfDates.map((qvf) => (
                    <option key={qvf.table_name} value={qvf.table_name}>
                      {qvf.table_name}
                    </option>
                  ))}
                </Form.Select>    
              </label>
            </Col>
            <Col>
              <label>
                Voter Id
                <Form.Control
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                  type="text"
                  placeholder="Enter Voter Id"
                  className="input"
                />
              </label>
            </Col>
            --- OR ---
            <Col>
              <label>
                Zip
                <Form.Control
                  value={voterZip}
                  onChange={(e) => setVoterZip(e.target.value)}
                  type="text"
                  placeholder="Enter Zip"
                  className="input"                
                />
              </label>
            </Col>
            <Col>
              <label>
                Last Name
                <Form.Control
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
                County
                <Form.Control
                  value={voterCounty}
                  onChange={(e) => setVoterCounty(e.target.value)}
                  type="text"
                  placeholder="Enter County"
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
      <div>
        {
          <>
          {
            isLoading ? 
            <Spinner animation="border" variant='danger' role="status"><span className="sr-only">Loading...</span></Spinner>
            : voterData.length > 0 ? <><VoterInformation stringProp={voterId} /><DataTable columns={columns} data={voterData} /></>
            : <span></span>
          }    
          </>
        }      
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
