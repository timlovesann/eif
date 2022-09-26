import { response } from "express";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button, Col, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import DownloadService from "../services/DownloadService";
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
import DataTable, { TableColumn } from "react-data-table-component";
import { saveAs } from 'file-saver';

export interface IDownloadRequest {
    qvf: string;
    county_name: string;
    jurisdiction_name: string;
    created_at: string;
    requested_by: string;
    status: string;
    request_id: number;
}
export const DownloadsPage: React.FC = () => {
  const initialDownloadRequestState = {
    qvf: '',
    county_name: '',
    jurisdiction_name: '',
    created_at: '',
    requested_by: '',
    status: '',
    request_id: null
  };
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [isQvfDateLoading, setIsQvfDateLoading] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const [qvfDates, setQvfDates] = useState([]);
  const [qvfDate, setQvfDate] = useState(" --- Select QVF Date --- ");

  const [isCountyDropdownLoading, setIsCountyDropdownLoading] = useState(true);
  const [counties, setCounties] = useState([]);
  const [countyName, setCountyName] = useState(" --- Select County --- ");

  const [isJurisdictionDropdownLoading, setIsJurisdictionDropdownLoading] = useState(false);
  const [jurisdictions, setJurisdictions] = useState([]);
  const [jurisdictionName, setJurisdictionName] = useState(" --- Select Jurisdiction --- ");  
  const [downloadRequest, setDownloadRequest] = useState<IDownloadRequest>(initialDownloadRequestState);
  const [submitted, setSubmitted] = useState(false);  
  const [downloading, setDownloading] = useState(false);
  const [readyforSubmit, setReadyForSubmit] = useState(false);

  const [downloadRequests, setDownloadRequests] = useState<Array<IDownloadRequest>>([]);

  const columns: TableColumn<IDownloadRequest>[] = useMemo(() => [
    {
      name: 'QVF',
      selector: (row: { qvf: any; }) => row.qvf,
      sortable: true,
      width: '300px',
    },
    {
      name: 'County Name',
      selector: (row: { county_name: any; }) => row.county_name,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Jurisdiction Name',
      selector: (row: { jurisdiction_name: any; }) => row.jurisdiction_name,
      sortable: true,
      width: '300px',
    },
    {
      name: 'File Generation Status',
      selector: (row: { status: any; }) => row.status,
      sortable: true,
      width: '300px',
    },                    
  ], []
  ); 
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDownloadRequest({ ...downloadRequest, [name]: value });
  };  
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setDownloadRequest({ ...downloadRequest, [name]: value });   
  };  
  function validateQvfSelection(qvfSelected): void {
    console.log("qvfSelected: " + qvfSelected);
    if (qvfSelected === "") {
      console.log("Invalid qvf selected: " + qvfSelected);
    } else {
      setQvfDate(qvfSelected);
      setDownloadRequest( {...downloadRequest, "qvf": qvfSelected });
      //fetchCounties(qvfSelected);
    }
  }  
  function validateCountySelection(countySelected): void {
    if (countySelected === "") {
      setCountyName(countySelected);
      setReadyForSubmit(false);
    } else {
      setCountyName(countySelected);
      setDownloadRequest( {...downloadRequest, "county_name" : countySelected });
      fetchJurisdictions(countySelected);
    }
  }

  function fetchJurisdictions(countyName: string) {
    setIsJurisdictionDropdownLoading(true);
    const url = process.env.REACT_API_BASE_URL + '/api/jurisdictions/' + countyName;
    fetch(url)
      .then((res) => res.json())
      .then((jurisdictions) => {
        setJurisdictions(jurisdictions);        
      })
      .catch((err) => {
        console.log(err);         
      })
      .finally(() => {
        setIsJurisdictionDropdownLoading(false);
      });      
  }

  function validateJurisdictionSelection(jurisdictionSelected): void {
    console.log("jurisdictionSelected: " + jurisdictionSelected);
    if (jurisdictionSelected === "") {
      console.log("Invalid jurisdiction selected: " + jurisdictionSelected);
    } else {
      setReadyForSubmit(true);
      setJurisdictionName(jurisdictionSelected);
      setDownloadRequest( {...downloadRequest, "jurisdiction_name": jurisdictionSelected });
    }
  }
  const retrieveDownloadRequests = () => {
    DownloadService.getDownloadRequests()
      .then((response: any) => {
        setDownloadRequests(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
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
        setIsQvfDateLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    DownloadService.getDownloadRequests()
      .then((response: any) => {
        console.log(response.data);
        setDownloadRequests(response.data);    
      })
      .catch(error => {
        if(error.response.status === 403 || error.response.status === 401) {        
          setRedirect("/login");
        }
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

  const saveDownloadRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    DownloadService.createDownloadRequest(downloadRequest)
      .then((response: any) => {
        setDownloadRequest({
          qvf: response.data.qvf,
          county_name: response.data.county_name,
          jurisdiction_name: response.data.jurisdiction_name,
          created_at: null,
          requested_by: null,
          status: null,
          request_id: null
        });
      setSubmitted(true);      
    })
    .then(() => {
      DownloadService.getDownloadRequests()
        .then((response: any) => {
          console.log(response.data);
          setDownloadRequests(response.data);    
        })
        .catch(error => {
          if(error.response.status === 403 || error.response.status === 401) {        
            setRedirect("/login");
          }
        });        
    })
    .catch(e => {
      if(e.response.status === 403 || e.response.status === 401) {
        setRedirect("/login");
      }
    })
  }

  function handleDownload(data: IDownloadRequest) : void {
    setDownloading(true);
    DownloadService.downloadFile(data)
      .then(response => new Blob([response.data]))
      .then(blob => {
        let cn = data.county_name.replaceAll(' ', '-');       
        let jn = data.jurisdiction_name.replaceAll(' ', '-');
        saveAs(blob, data.request_id + "_" + data.qvf + "_" + cn + "_" + jn + ".csv");
      })
      .catch(error => {
        console.log(error);
        if(error.response.status === 403 || error.response.status === 401) {        
          setRedirect("/login");
        }
      })
      .finally(() => {
        setDownloading(false);
      });
  }
  const ExpandedComponent = () => ({ data }) => {
    if(data.status === 'DOWNLOAD') {
      return (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Button type="button" onClick={() => handleDownload(data)} disabled={downloading} className="btn">Download</Button>
        </>
      )
    } else {
      return (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )
    };
  };
  function newDownloadRequest() :void {
    setDownloadRequest(initialDownloadRequestState);
    setSubmitted(false);
  }
  if(redirect) {
    return <Redirect to={redirect} />
  } else {  
    return (
      <div className="container">
          <div>
            <Form onSubmit={saveDownloadRequest}>
              <FormGroup role="form">            
                  <Row>
                    <Col>
                      <label>
                      QVF Date
                      <select required
                        id="qvf"
                        name="qvf"
                        disabled={isQvfDateLoading}
                        value={qvfDate}
                        onChange={(e) => validateQvfSelection(e.currentTarget.value)}
                      >
                        <option value=""> --- Select QVF Date --- </option>
                        {qvfDates.map((qvf) => (                    
                          <option key={qvf.table_name} value={qvf.table_name}>
                          {qvf.table_name.split('_')[1]}
                          </option>
                        ))}
                      </select>
                      </label>                        
                    </Col>                
                    <Col>
                      {
                        isCountyDropdownLoading ? <Spinner animation="border" variant='danger' role="status"></Spinner>
                        : null
                      }
                      <label>
                      County
                      <select required
                        id="countyName"
                        name="countyName"
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
                      </select>
                      </label>
                    </Col>
                    <Col>
                      {
                        isJurisdictionDropdownLoading ? <Spinner animation="border" variant='danger' role="status"></Spinner>
                        : null
                      }
                      <label>
                      Jurisdiction
                      <select required
                        id="jurisdictionName"
                        name="jurisdictionName"
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
                      </select>
                      </label>
                    </Col>                                 
                  </Row>
                  <Row><Col>&nbsp;</Col></Row>
                  <Row><Col>Only one request is supported per visit to limit costs associated with computing workloads. Thank you for your understanding.</Col></Row>
                  <Row><Col>&nbsp;</Col></Row>
                  <Row><Col>Files are generated in order of receipt at the 17th second of every minute currently. This will change to once a day to limit computing workload costs.</Col></Row>
                  <Row><Col>&nbsp;</Col></Row>
                  <Row>
                    <Button type="submit" disabled={!readyforSubmit || submitted} className="btn">I Understand. Generate File.</Button>
                  </Row> 
                </FormGroup>
              </Form>               
          </div>
        {
          <>
            <div>
            <br />
            <h4>Downloads Requested</h4>
              <DataTable 
                expandableRows 
                expandableRowsComponent={ExpandedComponent()}  
                expandOnRowClicked columns={columns} 
                data={downloadRequests} 
                highlightOnHover                                 
                pagination 
                paginationPerPage={10} 
                paginationTotalRows={downloadRequests.length}
                responsive
                striped
              />
            </div>
          </>                
        }
      </div>
    );
  }
}

export default DownloadsPage;