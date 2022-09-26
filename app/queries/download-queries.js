const dbConfig = require("../config/db.config.js");
const fileConfig = require("../config/file.config.js");
const Pool = require('pg').Pool;
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

const updateDownloadRequestStatus = (request_id, status, done) => {
    const query = "update qvf_download_requests set status = $1 where request_id = $2";   
    pool.query(query, [status, request_id], (error, results) => {
        if (error) {
            throw error;
        }
        done();
    });
}

const getDownloadRequestsForUser = (user_id, sendResponse) => {
    const query = "select * from qvf_download_requests where requested_by = $1 order by created_at desc";    
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
            console.log("error retrieving pending download request");
            throw error;
        }
        sendResponse(results.rows);
    });
}

const generateQVFWithHistory = (request_id, qvf, county_name, jurisdiction_name, done) => {
    const filePath = fileConfig.downloadfolder + request_id + "_" + qvf + "_" + county_name.replace(/\s/g, '-') + "_" + jurisdiction_name.replace(/\s/g, '-') + ".csv";
    const fs = require("fs");
    const ws = fs.createWriteStream(filePath);
    const fastcsv = require("fast-csv");
    const queryStr = 
        "WITH " +
            "Aug22 AS (SELECT voter_identification_number, election_date, is_absentee_voter FROM " + qvf + "h WHERE election_date = '08/02/2022'), " +
            "Nov20 AS (SELECT voter_identification_number, election_date, is_absentee_voter FROM " + qvf + "h WHERE election_date = '11/03/2020'), " +
            "Nov18 AS (SELECT voter_identification_number, election_date, is_absentee_voter FROM " + qvf + "h WHERE election_date = '11/06/2018'), " +
            "Nov16 AS (SELECT voter_identification_number, election_date, is_absentee_voter FROM " + qvf + "h WHERE election_date = '11/08/2016') " +
        "SELECT " +
            "v.last_name, v.first_name, v.middle_name, v.name_suffix, v.year_of_birth, v.gender, " +
            "v.registration_date, v.street_number_prefix, v.street_number, v.street_number_prefix, v.direction_prefix, v.street_name, " +
            "v.street_type, v.direction_suffix, v.extension, v.city, v.state, v.zip_code, v.mailing_address_line_one, " +
            "v.mailing_address_line_two, v.mailing_address_line_three, v.voter_identification_number, v.county_name, v.jurisdiction_name, v.precinct, " +
            "v.ward, v.is_permanent_absentee_voter, v.voter_status_type_code, v.uocava_status_code, v.uocava_status_name, " +
            "CASE aug22_vh.\"election_date\"  WHEN '08/02/2022' THEN (CASE aug22_vh.is_absentee_voter WHEN 'Y' THEN 'A' ELSE (CASE aug22_vh.is_absentee_voter WHEN 'N' THEN 'I' ELSE '' END) END) ELSE 'N' END as Voted_in_Aug_2022, " +
            "CASE nov20_vh.\"election_date\"  WHEN '11/03/2020' THEN (CASE nov20_vh.is_absentee_voter WHEN 'Y' THEN 'A' ELSE (CASE nov20_vh.is_absentee_voter WHEN 'N' THEN 'I' ELSE '' END) END) ELSE 'N' END as Voted_in_Nov_2020, " +
            "CASE nov18_vh.\"election_date\"  WHEN '11/06/2018' THEN (CASE nov18_vh.is_absentee_voter WHEN 'Y' THEN 'A' ELSE (CASE nov18_vh.is_absentee_voter WHEN 'N' THEN 'I' ELSE '' END) END) ELSE 'N' END as Voted_in_Nov_2018, " +
            "CASE nov16_vh.\"election_date\"  WHEN '11/08/2016' THEN (CASE nov16_vh.is_absentee_voter WHEN 'Y' THEN 'A' ELSE (CASE nov16_vh.is_absentee_voter WHEN 'N' THEN 'I' ELSE '' END) END) ELSE 'N' END as Voted_in_Nov_2016 " +
        "FROM " + qvf + " v " +
        "LEFT JOIN Aug22 aug22_vh ON v.voter_identification_number = aug22_vh.voter_identification_number " +
        "LEFT JOIN Nov20 nov20_vh ON v.voter_identification_number = nov20_vh.voter_identification_number " +
        "LEFT JOIN Nov18 nov18_vh ON v.voter_identification_number = nov18_vh.voter_identification_number " +
        "LEFT JOIN Nov16 nov16_vh ON v.voter_identification_number = nov16_vh.voter_identification_number " +
        "where v.county_name = $1 and v.jurisdiction_name = $2"
        ;
    pool.query(queryStr, [county_name, jurisdiction_name], (error, result) => {
        if(error) {
            console.log(error.stack);
            done("ERROR GENERATING FILE");
        } else {
            const jsonData = JSON.parse(JSON.stringify(result.rows));
            fastcsv.write(jsonData, {headers: true})
                    .on("finish", function() {
                        console.log("file written: " + filePath);
                    })
                    .pipe(ws);
        }
        done("DOWNLOAD");
    });
}

module.exports = {
    getOldestPendingDownloadRequest,
    insertDownloadRequest,
    getDownloadRequestsForUser,
    updateDownloadRequestStatus,
    generateQVFWithHistory,
}