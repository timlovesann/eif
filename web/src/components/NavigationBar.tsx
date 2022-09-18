import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
//import styled from 'styled-components';
/*const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;*/
export const NavigationBar = () => (
    <Navbar expand="lg">
      <Navbar.Brand href="/">EIF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/voters-by-county">Voters By County</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/my-voting-history">My Voting History</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)