import axios from 'axios';
import { abort } from 'process';
import React, { Component, useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import AuthService from "../services/auth.service";
import { CountySummary } from "../types/county.type";
import Card from "react-bootstrap/Card";
import "./card.css";
import { Button, Col, ListGroup, Offcanvas, Row, Table } from 'react-bootstrap';
import { CountyMetadata } from '../types/countymetadata.type';

interface ICountyHeaderProps {
    countySummary: CountySummary;
    countyMetadata: CountyMetadata;
}

const CountyInformation: React.FC<ICountyHeaderProps> = ({countySummary, countyMetadata}) => {
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
                Show County Summary
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{countySummary.county_name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className='p-2'>  
                <Table striped bordered hover>  
                <thead>  
                    <tr>  
                        <th></th>  
                        <th></th>  
                        <th></th>  
                        <th></th>  
                    </tr>  
                </thead>  
                <tbody>  
                    <tr>  
                        <td>Total registered voter count</td>  
                        <td>{countySummary.total_registered_voter_count}</td>  
                        <td>Active status voter registrations</td>  
                        <td>{countySummary.active_registered_voter_count}</td>  
                    </tr>  
                    <tr>  
                        <td>Registrations from Apartments with blank extension</td>  
                        <td>{countySummary.challenged_voter_count}</td>  
                        <td>Registrations from Trailer Parks with blank extension</td>  
                        <td>{countySummary.verify_voter_count}</td>  
                    </tr>  
                    <tr>  
                        <td>Voter registrations with canceled status</td>  
                        <td>{countySummary.canceled_voter_count}</td>  
                        <td>Rejected voter status count</td>  
                        <td>{countySummary.rejected_voter_count}</td>   
                    </tr>
                    <tr>  
                        <td colSpan={2}>Voting system</td>  
                        <td colSpan={2}>{countyMetadata.voting_system}</td>  
                    </tr>
                    <tr>  
                        <td colSpan={2}>Census URL</td>  
                        <td colSpan={2}>{countyMetadata.census_url}</td>   
                    </tr>
                </tbody>  
                </Table>  
                </div>  
                </Offcanvas.Body>
            </Offcanvas>               
        </>
    )
}

export default CountyInformation;