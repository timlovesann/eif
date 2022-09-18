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
  pool.query('SELECT distinct county_name FROM qvf_20220901_v order by county_name asc', (error, results) => {
    if (error) {      
      throw error;
    }
    response.status(200).json(results.rows);
  });  
}

const getJurisdictions = (request, response) => {
  const county_name = request.params.county_name;
  pool.query('SELECT distinct JURISDICTION_NAME FROM qvf_20220901_v WHERE COUNTY_NAME = $1 and JURISDICTION_NAME is not null order by jurisdiction_name asc', [county_name], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

const getPrecincts = (request, response) => {
  const county_name = request.params.county_name;
  const jurisdiction_name = request.params.jurisdiction_name;
  pool.query('SELECT distinct PRECINCT FROM qvf_20220901_v WHERE COUNTY_NAME = $1 and JURISDICTION_NAME = $2 and PRECINCT is not null order by precinct asc', [county_name, jurisdiction_name], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

const getQvfDates = (request, response) => {
  pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' and table_name like \'%_v\' and table_name != \'qvf_20201101_v\' ORDER BY table_name', (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

module.exports = {
  getQvfDates,
  getCounties,
  getJurisdictions,
  getPrecincts,
}