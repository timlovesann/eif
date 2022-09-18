import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Col, Form, FormGroup, Row, Spinner } from "react-bootstrap";

interface RegisteredVoter {
    last_name: string;
    middle_name: string
    first_name: string;
    year_of_birth: number;
    street_address: string;
    mailing_address_line_one: string;
    mailing_address_line_two: string;
    mailing_address_line_three: string;
    address_line_1_qvf_10: string;    
}
export interface RegisteredAddress {
    street_address: string;
    address_line_1: string;
    city: string;
    state: string;
    zip: string;
    county_name: string;    
    residence_type: string;
    address_type: string;
    no_of_registrations: number;
    no_of_apartments_or_beds: number;
    name_of_property: string; /* Hotel name, spa name, RV park name etc */
    property_status: string; /* Closed, out of business, for sale etc */
    source_of_information: string;
    date_of_information: Date;
    
    street_address_first_8: string;
    location_hash: string;

    registeredVoter: RegisteredVoter[];
  }

export const AuditMyAddress: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    const [isCountyDropdownLoading, setIsCountyDropdownLoading] = useState(true);
    const [counties, setCounties] = useState([]);
    const [countyName, setCountyName] = useState("Loading Counties ...");

    const [streetNumber, setStreetNumber] = useState("");
    const [streetName, setStreetName] = useState("");
    const [zip, setZip] = useState("");
  
    const [readyforSearch, setReadyForSearch] = useState(false);  
    const [responseMessage, setResponseMessage] = useState("");
    const [registeredAddress, setRegisteredAddress] = useState<RegisteredAddress>();
    const [count, setCount] = useState(0);
    const [registeredVoters, setRegisteredVoters] = useState([]);

    const voterColumns: TableColumn<RegisteredVoter>[] = useMemo(() => [
      {
        name: 'Street Address',
        selector: (row: { street_address: any; }) => row.street_address,
        sortable: true,
        width: '300px'
      },      
      {
        name: 'Last Name',
        selector: (row: { last_name: any; }) => row.last_name,
        sortable: true,
      },         
      {
        name: 'Middle Name',
        selector: (row: { middle_name: any; }) => row.middle_name,
        sortable: true,
      },
      {
        name: 'First Name',
        selector: (row: { first_name: any; }) => row.first_name,
        sortable: true,
      },               
      {
        name: 'Year of Birth',
        selector: (row: { year_of_birth: any; }) => row.year_of_birth,
        sortable: true,
      },  
      {
        name: 'Mailing Address Line 1',
        selector: (row: { mailing_address_line_one: any; }) => row.mailing_address_line_one,
        sortable: true,
        width: '250px'
      },
      {
        name: 'Mailing Address Line 2',
        selector: (row: { mailing_address_line_two: any; }) => row.mailing_address_line_two,
        sortable: true,
        width: '250px'
      },
      {
        name: 'Mailing Address Line 3',
        selector: (row: { mailing_address_line_three: any; }) => row.mailing_address_line_three,
        sortable: true,
        width: '250px'
      },        
      {
        name: 'QVF Address Line 1 - 10 Chars',
        selector: (row: { address_line_1_qvf_10: any; }) => row.address_line_1_qvf_10,
        sortable: true,
        width: '250px'
      },                                                                                               
    ], []
  ); 
    
  useEffect(() => {
    let unmounted = false;
    setIsCountyDropdownLoading(true);
    fetch('https://data.electionintegrityforce.com/api/counties')
    //fetch('http://localhost:8081/api/counties-202205')
      .then((res) => res.json())
      .then((counties) => {
      setCounties(counties);
      setIsCountyDropdownLoading(false);
      })
      .catch((err) => {
      console.log(err);
      });     
  }, []);    

  function validateCountySelection(countySelected): void {
      if(countySelected == "0"){
        setReadyForSearch(false);    
      } else {
        setReadyForSearch(true); 
        setCountyName(countySelected);
      }
    }

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();    
    setIsLoading(true);
    setResponseMessage("");
    let addressLine1 = ((streetNumber === null? "" : streetNumber.trim()) + (streetName === null? "" : streetName.trim())).replace(' ', '');
    const addressFirst8AndZip = (addressLine1.slice(0, 8) + (zip === null? "" : zip.trim())).toUpperCase();
    //const resp = await axios.get(`http://localhost:8081/api/audit-your-address-202205/${countyName}/${addressFirst8AndZip}`);
    const resp = await axios.get(`https://data.electionintegrityforce.com/api/audit-your-address/${countyName}/${addressFirst8AndZip}`);
    if(resp.status === 200) {
      setResponseMessage("Success");
      setCount(resp.data.count);
      setRegisteredAddress(resp.data.registeredAddress);
      setRegisteredVoters(resp.data.registeredVoters);
    } else {      
      setResponseMessage("Error");
    }
    setIsLoading(false);
  }      

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
                      required
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
                <label>
                  Street Number
                  <Form.Control
                    value={streetNumber} required
                    onChange={(e) => setStreetNumber(e.target.value)}
                    type="text"
                    placeholder="Enter Street Number"
                    className="input"
                  />
                </label>
              </Col> 
              <Col>
                <label>
                  Street Name
                  <Form.Control
                    value={streetName} required
                    onChange={(e) => setStreetName(e.target.value)}
                    type="text"
                    placeholder="Enter Street Name"
                    className="input"
                  />
                </label>
              </Col>   
              <Col>
                <label>
                  Zip
                  <Form.Control
                    value={zip} required maxLength={5}
                    onChange={(e) => setZip(e.target.value)}
                    type="text"
                    placeholder="Enter Zip"
                    className="input"
                  />
                </label>
              </Col>                                             
            </Row>
            <Row><Col>&nbsp;</Col></Row>
            <Row>
                <Button size='lg' type="submit" className="btn" disabled={!readyforSearch}>Audit Address</Button>
            </Row>
          </FormGroup>
        </Form>
        <div>
          {
            isLoading ? 
              (responseMessage === '') ? <Spinner animation="border" variant='danger' role="status"></Spinner>
              : ""
              : ""
          }
          {
            !isLoading ?  
              (responseMessage === 'Success') ? <><Form.Text>{count} registrations found.</Form.Text><DataTable columns={voterColumns} data={registeredVoters}/></>
              : (responseMessage === 'Error') ? "Error fetching records. Please retry." : ""
              : ""
          }
        </div>
      </div>
    );    
};

export default AuditMyAddress;