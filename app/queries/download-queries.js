const dbConfig = require("../config/db.config.js");
const Pool = require('pg').Pool
const pool = new Pool({
  user: dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DATABASE,
  password: dbConfig.PASSWORD,
  port: dbConfig.PORT,
});

const insertDownloadRequest = (user_id, qvf, county_name, jurisdiction_name, sendResponse) => {
    const query = "insert into qvf_download_requests(requested_by, qvf, county_name, jurisdiction_name, status) values($1, $2, $3, $4, 'PENDING') returning request_id";   
    pool.query(query, [user_id, qvf, county_name, jurisdiction_name], (error, results) => {
        if (error) {
            throw error;
        }
        sendResponse(results.rows);
    });
}

const getDownloadRequestsForUser = (user_id, sendResponse) => {
    const query = "select * from qvf_download_requests where requested_by = $1";    
    pool.query(query, [user_id], (error, results) => {
        if (error) {
            throw error;
        }
        sendResponse(results.rows);
    });
}

const getOldestPendingDownloadRequest = (sendResponse) => {
    const query = "select * from qvf_download_requests where status = 'PENDING' order by created_at asc limit 1";    
    pool.query(query, [], (error, results) => {
        if (error) {
            throw error;
        }
        sendResponse(results.rows);
    });
}

const getCountyQvf = (request, response) => {
    const qvf = request.params.qvf;
    const county_name = request.params.county_name;    
  
    const query = "select vh.voter_identification_number, " +
        " max(case when (vh.election_date = '2022-08-02') then vh.is_absentee_voter else 'Did not Vote' end) as aug_2022_voted, " +
        " max(case when (vh.election_date = '2020-11-03') then vh.is_absentee_voter else 'Did not Vote' end) as nov_2022_voted " +
        " from " + qvf + "h vh " +
        " join " + qvf + " v on v.voter_identification_number = vh.voter_identification_number " +
        " where v.county_name = $1 and v.jurisdiction_name = 'GALIEN TOWNSHIP'" +
        " group by vh.voter_identification_number " +
        " order by vh.voter_identification_number"    
    ;
    console.log(query);
    pool.query(query, [county_name], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const getJurisdictionQvf = (request, response) => {
    const qvf = request.params.qvf;
    const county_name = request.params.county_name;
    const jurisdiction_name = request.params.jurisdiction_name;
  
    const query = "";
    console.log(query);
    pool.query(query, [qvf, county_name, jurisdiction_name], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

module.exports = {
    getOldestPendingDownloadRequest,

    insertDownloadRequest,
    getDownloadRequestsForUser,
    getCountyQvf,
    getJurisdictionQvf,
}