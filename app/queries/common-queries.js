const dbConfig = require("../config/db.config.js");
const Pool = require('pg').Pool
const pool = new Pool({
  user: dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DATABASE,
  password: dbConfig.PASSWORD,
  port: dbConfig.PORT,
});

const getCounties = (request, response) => {
  pool.query('SELECT distinct county_name FROM qvf_20221001_v order by county_name asc', (error, results) => {
    if (error) {      
      throw error;
    }
    response.status(200).json(results.rows);
  });  
}

const getCountySummary = (request, response) => {
  const county_name = request.params.county_name;  
  pool.query('select voter_status_type_code, count(*) as count from qvf_20221001_v where county_name = $1 group by voter_status_type_code', [county_name], (error, results) => {
    if (error) {      
      throw error;
    }  
    let county_summary = {total_registered_voter_count: 0, active_registered_voter_count: 0, challenged_voter_count: 0, verify_voter_count: 0, canceled_voter_count: 0, rejected_voter_count: 0 };  
    var sum = 0;
    results.rows.forEach(function(row) {
      if(row.voter_status_type_code === 'A') {
        county_summary.active_registered_voter_count = row.count;
      } 
      if(row.voter_status_type_code === 'CH') {
        county_summary.challenged_voter_count = row.count;
      }
      if(row.voter_status_type_code === 'V') {
        county_summary.verify_voter_count = row.count;
      }
      if(row.voter_status_type_code === 'C') {
        county_summary.canceled_voter_count = row.count;
      }
      if(row.voter_status_type_code === 'R') {
        county_summary.rejected_voter_count = row.count;
      }       
    });
    sum = Number(county_summary.active_registered_voter_count) + Number(county_summary.challenged_voter_count) + 
          Number(county_summary.verify_voter_count) + Number(county_summary.canceled_voter_count) + 
          Number(county_summary.rejected_voter_count) + Number(county_summary.total_registered_voter_count);
    county_summary.total_registered_voter_count = sum;
    response.status(200).json(county_summary);
  });    
}

const getCountyMetadata = (request, response) => {
  const county_name = request.params.county_name; 
  pool.query('select county_name, keshel_heatmap_color, voting_system, census_url from county_summary_ref where county_name = $1', [county_name], (error, results) => {
    if (error) {      
      throw error;
    }
    //let county_metadata = {county_name: 'a', keshel_heatmap_color: 'b', voting_system: 'b', census_url: 'b'};
    response.status(200).json(results.rows); 
  });
}

const getJurisdictions = (request, response) => {
  const county_name = request.params.county_name;
  pool.query('SELECT distinct JURISDICTION_NAME FROM qvf_20221001_v WHERE COUNTY_NAME = $1 and JURISDICTION_NAME is not null order by jurisdiction_name asc', [county_name], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

const getPrecincts = (request, response) => {
  const county_name = request.params.county_name;
  const jurisdiction_name = request.params.jurisdiction_name;
  pool.query('SELECT distinct PRECINCT FROM qvf_20221001_v WHERE COUNTY_NAME = $1 and JURISDICTION_NAME = $2 and PRECINCT is not null order by precinct asc', [county_name, jurisdiction_name], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

const getQvfDates = (request, response) => {
  pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' and table_name like \'%01_v\' ORDER BY table_name', (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

module.exports = {
  getQvfDates,
  getCounties,
  getCountySummary,
  getCountyMetadata,
  getJurisdictions,
  getPrecincts,
}