import axios from 'axios';
import { abort } from 'process';
import React, { Component, useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import AuthService from "../services/auth.service";
import { CountySummary } from "../types/county.type";
import Card from "react-bootstrap/Card";
import "./card.css";
import { Col, ListGroup, Row, Table } from 'react-bootstrap';
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
            <Card className="card">
                <Card.Body style={{ color: "black" }}>
                    <Card.Title>{countySummary.county_name} County Summary per September 2022 QVF</Card.Title>
                    <Card.Text style={{ color: "black" }}>
                        <Table striped bordered hover>
                            <thead>
                            </thead> 
                            <tbody>
                                <tr>
                                    <td>Total Registered Voter Count</td>
                                    <td>{countySummary.total_registered_voter_count}</td>
                                    <td>Active Registered Voter Count (A)</td>
                                    <td>{countySummary.active_registered_voter_count}</td>
                                </tr>
                                <tr>
                                    <td>Challenged Voter Count (CH)</td>
                                    <td>{countySummary.challenged_voter_count}</td>
                                    <td>Verify Voter Count (V)</td>
                                    <td>{countySummary.verify_voter_count}</td>
                                </tr>
                                <tr>
                                    <td>Canceled Voter Count (C)</td>
                                    <td>{countySummary.canceled_voter_count}</td>
                                    <td>Rejected Voter Count (R)</td>
                                    <td>{countySummary.rejected_voter_count}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Voting System</td>
                                    <td colSpan={2}>{countyMetadata.voting_system}</td>
                                </tr> 
                                <tr>
                                    <td colSpan={2}>Keshel Heat Map Color</td>
                                    <td colSpan={2} color={countyMetadata.keshel_heatmap_color}>{countyMetadata.keshel_heatmap_color}</td>
                                </tr>                                                                                                
                            </tbody>
                        </Table>
                    </Card.Text>
                    <Card.Link href={countyMetadata.census_url} target="_blank">Census Source</Card.Link>
                </Card.Body>
            </Card>        
        </>
    )
}

export default CountyInformation;