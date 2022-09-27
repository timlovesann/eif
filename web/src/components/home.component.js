import React, { Component } from "react";

import UserService from "../services/user.service";
import CountdownTimer from './CountdownTimer';
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
      <>    
      <div className="container">
        <header className="jumbotron">          
          <h3>Release v09272022</h3>
          <h4>Features Supported</h4>
          <ul>
            <li>Ghostbusting Location Report: Download report of suspect locations canvassed across Michigan</li>            
            <li>My Voting History: Examine your voting history for anomalies</li>
            <li>Download Voter roll File: Download jurisdiction level voter file with voting history included.</li>
          </ul>  
          <h4>Known Issues</h4>
          <ul>
            <li>Search results page loads blank sometimes</li>      
            <li>If search fails or it looks like the progress spinner is stuck in a loop it is very likely that your session has timed out.</li>
            <li>Workaround: Sign out by clicking log out at the top right and sign back in.</li>
            <b>¯\_(ツ)_/¯</b>
          </ul> 
          <h4>Upcoming updates</h4>
          <ul>
            <li>Fix known issues if they still persist</li>            
            <li>Add password complexity and confirm password field on Sign up screen</li>
            <li>Update Ghostbusting criteria to pull following criteria
                <ul>
                  <li>001_Address_Blank: The registration is missing the street number or street name</li>
                  <li>001_EXT_BLNK_APT: Apartments with a blank extension</li>
                  <li>001_EXT_BLNK_SRLV: Senior Living with blank extension</li>
                  <li>001_EXT_BLNK_TRLR: Trailer park with blank extension</li>
                  <li>001_EXT_NMBR_MSNG: The registration has an Index but does not have a number where other registrations with the same address include numbers or a letter as required by law </li>
                  <li>002_CRC_HIGH_REG: Church with 6 or more registrations</li>
                  <li>002_RES_HIGH_REG: Residence with more than 8 registrations</li>
                  <li>003_BSN: Registration address matches that of a general business address location</li>
                  <li>003_EMPTY_LOT: Empty Lot</li>
                  <li>003_MISC_INV: An EIF team member has identified this address as a non-residential location.  All Memory/Dementia care, and Nursing/Group Homes, All Other, Hotels</li>
                  <li>003_MISC_LAW: An EIF team member has identified this address as a non-residential location, Prison, RV Park-Seasonal, VirtualMailbox, All Camps-Seasonal, All Cemeteries. </li>
                  <li>003_UPS: Registration address matches that of a UPS, Fedex, or other shipping store service location.</li>
                  <li>003_USPS: Registration address matches that of a USPS or FedEx address location.</li>
                  <li>004_ZipCode_Mismatch: Registration does not match a standard zip code provided by USPS.</li>
                  <li>004_ZipCode_POBOX: Registration matches that of a standard zip code provided by USPS for a PO Box.</li>
                  <li>005_Age_Over: Registrant is over 110 years old based on DOB or registration date.</li>
                  <li>005_Age_Under: DOB is under 18 at the time of an upcoming election or the registration date is too close to the DOB.</li>
                  <li>005_REG_DATE_BKDT: New registrations are flagged when they are back-dated prior to their creation.</li>
                  <li>005_REG_DATE_OLD: The registration date is prior to 1/1/1920</li>
                  <li>006_REG_FNLN_DUP: If First Name = Last Name</li>
                  <li>006_REG_MNLN_DUP: If Middle Name = Last Name</li>
                  <li>007_NAME_GONE: The Name matches a name removed in the past.</li>
                  <li>007_VoterID_GONE: The voterID matches a voterID removed in the past.</li>
                  <li>008_NCOA_Date_JUR: The National Change of Address data indicates this individual <font color="red">moved outside of their JURISDICTION</font> 60 days PRIOR to voting in their former precinct.</li>
                  <li>008_NCOA_Date_CTY: The National Change of Address data indicates this individual <font color="red">moved outside of their COUNTY</font> 60 days PRIOR to voting in their former precinct.</li>
                  <li>008_NCOA_Date_ST: The National Change of Address data indicates this individual <font color="red">moved outside of MICHIGAN</font>60 days PRIOR to voting in their former precinct.</li>
                  <li>008_UOCAVA: To be refined and defined</li>
                  <li>008_NCOA_Moved: The National Change of Address data indicates this individual recently moved.</li>
                  <li>009_Challenged: The QVF has this registration flagged as a challenged registration.</li>
                  <li>009_Verify: The QVF has this registration flagged as a need to verify registration.</li>
                </ul>
            </li>
          </ul>                      
        </header>
      </div>      
      </>
    );
  }
}
