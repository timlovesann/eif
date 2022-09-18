import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Profile from "./components/profile.component";
import MyVotingHistory from './components/MyVotingHistory';
import Ghostbusters from './components/Ghostbusters';
import AuditMyAddress from './components/AuditMyAddress';
import About from './components/About';
import Home from './components/home.component';
import Login from "./components/login.component";
import Register from "./components/register.component";
import Resources from './components/Resources';
import EventBus from "./common/EventBus";
import './AppSidebar.css';
import AuthService from "./services/auth.service";
import News from './components/News';
import Contact from './components/Contact';
import ChallengeList from './components/ChallengeList';

type User = {
  username: string
}
type MyProps = {};
type MyState = {      
  showModeratorBoard: false,
  showAdminBoard: false,
  currentUser: User
};
class AppSideBar extends Component<MyProps, MyState> {  
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: null,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_DATA_CURATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }  

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }  
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
              <h4>Election Integrity Force</h4>
              <strong>EIF</strong>
          </div>
          <ul className="list-unstyled components">
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <i className="fas fa-home"></i>&nbsp;
                  Audit
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li className="nav-item">
                    <Link to={"/my-voting-history"} className="nav-link">
                      Voting History
                    </Link>
                  </li>
                </ul>
            </li>          
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <i className="fas fa-glasses"></i>&nbsp;
                  Reports
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">                
                  <li className="nav-item">
                    <Link to={"/ghostbusters-by-county"} className="nav-link">
                      Ghostbusting Locations
                    </Link>
                  </li>  
                  <li className="nav-item">
                    <Link to={"/challenge-list-by-precinct"} className="nav-link">
                      Challenge List
                    </Link>
                  </li>                                                                                    
                </ul>
            </li>
            <li>
              <Link to={"/news"} className="nav-link">
                <i className="fas fa-globe"></i>&nbsp;                
                  News                
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                  <i className="fas fa-paper-plane"></i>&nbsp;
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="navbar-btn">
                  <i className="fas fa-align-left"></i>
                  <span></span>
              </button>
              <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-align-justify"></i>
              </button>               
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/"} className="navbar-brand">
                      Home
                    </Link>                       
                  </li>
                  {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="navbar-brand">
                      Admin
                    </Link>
                  </li>
                  )}                        
                  <li className="nav-item">
                    <Link to={"/about"} className="navbar-brand">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={"/resources"} className="navbar-brand">
                      Resources
                    </Link>
                  </li>                        
                </ul>
              </div>
              {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="navbar-brand">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="navbar-brand" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="navbar-brand">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="navbar-brand">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}              
            </div>
          </nav>
          <div className="line">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />            
            <Route exact path="/profile" component={Profile} />
            <Route path="/ghostbusters-by-county" component={Ghostbusters} />
            <Route path="/challenge-list-by-precinct" component={ChallengeList} />
            <Route path="/my-voting-history" component={MyVotingHistory} />
            <Route path="/audit-my-address" component={AuditMyAddress} />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </Switch>          
          </div>
        </div>
      </div>
    );
  }
}

export default AppSideBar;