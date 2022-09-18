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
          <h3>Release v09052022</h3>
          <h4>Features Supported</h4>
          <ul>
            <li>Ghostbusting Location Report: Download report of suspect locations canvassed across Michigan</li>            
            <li>My Voting History: Examine your voting history for anomalies</li>
          </ul>          
        </header>
      </div>
    );
  }
}
