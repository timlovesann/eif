const db = require('./queries');
  
app.get('/api/voters/:county_name/:jurisdiction_name/:precinct', db.getVotersByPrecinctQVF);  
app.get('/api/registration-count-by-address-for-county/:county_name/:page/:per_page', db.getRegistrationCountReportByAddressForCounty);
app.get('/api/precinct-walk-list/:county_name/:jurisdiction_name/:precinct', db.getPrecinctWalkList);