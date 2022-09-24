import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Release v09222022</h3>
          <h4>Features Supported</h4>
          <ul>
            <li>Ghostbusting Location Report: Download report of suspect locations canvassed across Michigan</li>            
            <li>My Voting History: Examine your voting history for anomalies</li>
          </ul>  
          <h4>Known Issues</h4>
          <ul>
            <li>Search results page loads blank sometimes</li>            
            <li>If search fails or it looks like the progress spinner is stuck in a loop it is very likely that your session has timed out.</li>
            <li>Workaround: Sign out by clicking log out at the top right and sign back in.</li>
          </ul>                   
        </header>
      </div>
    );
  }
}
