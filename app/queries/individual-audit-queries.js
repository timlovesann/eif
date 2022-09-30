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

const getQvfDates = (request, response) => {
  pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' and table_name like \'%_v\' and table_name != \'qvf_20201101_v\' ORDER BY table_name', (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  });
}

const getVoter = (request, response) => {
  const qvf = request.params.qvf;
  const county_name = request.params.county_name;
  const zip_code = request.params.zip_code;
  const last_name = request.params.last_name;
  const first_name = request.params.first_name;
  const year_of_birth = parseInt(request.params.year_of_birth);
  const query = "SELECT v.voter_identification_number, concat_ws(' ', v.last_name, v.first_name, ',', v.middle_name) as voter_full_name, v.county_name, v.year_of_birth, " +
                " to_char(v.registration_date, 'MON-DD-YYYY') as registration_date, concat_ws(' ', v.street_number, v.street_name, v.street_type, v.city, v.state, v.zip_code) as full_address FROM " 
                + qvf + 
                " v WHERE v.county_name = $1 and v.zip_code = $2 and upper(v.last_name) = upper($3) and upper(v.first_name) = upper($4) and v.year_of_birth = $5";
  pool.query(query, [county_name, zip_code, last_name, first_name, year_of_birth], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const getVoterHistory = (request, response) => {
  const qvf = request.params.qvf;
  const id = parseInt(request.params.id);
  const query = "select to_char(vh.election_date, 'YYYY-MM-DD') as election_date, vh.county_name, vh.jurisdiction_name, vh.is_absentee_voter " +
                " from " + qvf + "h vh " + 
                " where vh.voter_identification_number = $1";
  pool.query(query, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

module.exports = {
  getQvfDates,
  getCounties,
  getVoter,
  getVoterHistory,
}