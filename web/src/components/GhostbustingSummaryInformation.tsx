import axios from 'axios';
import { abort } from 'process';
import React, { Component, useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import AuthService from "../services/auth.service";
import { GhostbustingSummary } from "../types/ghostbustingsummary.type";
import Card from "react-bootstrap/Card";
import "./card.css";
import { Button, Col, ListGroup, Offcanvas, Row, Table } from 'react-bootstrap';

interface IGhostbustingHeaderProps {
    ghostbustingSummary: GhostbustingSummary;
}

const GhostbustingSummaryInformation: React.FC<IGhostbustingHeaderProps> = ({ghostbustingSummary}) => {
    const [redirect, setRedirect] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userReady, setUserReady] = useState(false);
    const [currentUser, setCurrentUser] = useState({username: ""});   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) {
          setRedirect("/login"); 
        }
        setCurrentUser(currentUser);
        setUserReady(true);
    }, []);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Show Ghostbusting Summary
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{ghostbustingSummary.county_name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className='p-6'>  
                <Table striped bordered hover>  
                <thead>  
                    <tr>  
                        <th>Category</th>  
                        <th>Count</th>  
                        <th>Category</th>  
                        <th>Count</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    <tr>  
                        <td>Registrations from Apartments with blank extension</td>  
                        <td>{ghostbustingSummary.ext_blnk_apt_count}</td>  
                        <td>Registrations from Senior Living Facility with blank extension</td>  
                        <td>{ghostbustingSummary.ext_blnk_srlv_count}</td>  
                    </tr>  
                    <tr>  
                        <td>Registrations from Hotels</td>  
                        <td>{ghostbustingSummary.ext_blnk_hotl_count}</td>  
                        <td>Registrations from Trailer Parks with blank extension</td>  
                        <td>{ghostbustingSummary.ext_blnk_trlr_count}</td>  
                    </tr>  
                    <tr>  
                        <td>Registrations from Empty Lots</td>  
                        <td>{ghostbustingSummary.empty_lot_count}</td>  
                        <td>Registrations from Businesses</td>  
                        <td>{ghostbustingSummary.bsn_count}</td>   
                    </tr>
                    <tr>  
                        <td>Registrations from UPS Locations</td>  
                        <td>{ghostbustingSummary.ups_count}</td>  
                        <td>Registrations from Churches with count more than 5</td>  
                        <td>{ghostbustingSummary.crc_high_reg_count}</td>   
                    </tr>
                    <tr>  
                        <td>Registrations from Residences with count more than 8</td>  
                        <td>{ghostbustingSummary.res_high_reg_count}</td>  
                        <td>Registrations from MEMORY/DEMENTIA CARE/OTHER/HOTEL/NURSING/GROUP HOME</td>  
                        <td>{ghostbustingSummary.misc_inv_count}</td>   
                    </tr>
                    <tr>  
                        <td>Registrations over age of 110</td>  
                        <td>{ghostbustingSummary.age_over_count}</td>  
                        <td>Registrations under age of 18</td>  
                        <td>{ghostbustingSummary.age_under_count}</td>   
                    </tr>   
                    <tr>  
                        <td>Registrations with registration date too old</td>  
                        <td>{ghostbustingSummary.reg_date_old_count}</td>  
                        <td>Registrations with same FN/LN</td>  
                        <td>{ghostbustingSummary.reg_fnln_dup_count}</td>   
                    </tr>  
                    <tr>  
                        <td>Registrations with same MN/LN</td>  
                        <td>{ghostbustingSummary.reg_mnln_dup_count}</td>  
                        <td>Registrations with Cancelled status</td>  
                        <td>{ghostbustingSummary.cancelled_count}</td>   
                    </tr>
                    <tr>  
                        <td>Registrations with Challenged status</td>  
                        <td>{ghostbustingSummary.challenged_count}</td>  
                        <td>Registrations with Verify status</td>  
                        <td>{ghostbustingSummary.verify_count}</td>   
                    </tr>  
                    <tr>  
                        <td>Registrations with UOCAVA status</td>  
                        <td>{ghostbustingSummary.uocava_count}</td>  
                        <td>Registrations from USPS Locations</td>  
                        <td>{ghostbustingSummary.usps_count}</td>   
                    </tr>                                                                                                                                       
                </tbody>  
                </Table>  
                </div>                      
                </Offcanvas.Body>
            </Offcanvas>         
        </>
    )
}

export default GhostbustingSummaryInformation;