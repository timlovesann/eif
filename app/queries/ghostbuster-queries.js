const dbConfig = require("../config/db.config.js");
const Pool = require('pg').Pool
const pool = new Pool({
  user: dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DATABASE,
  password: dbConfig.PASSWORD,
  port: dbConfig.PORT,
});

const getGhostbustersByCounty = (request, response) => {
    const county = request.params.county_name;
    const reg_count_threshold = 4;
    const query = "select " + 
                    "   concat(qvf.street_number_prefix, ' '," +
                    "    qvf.street_number, ' '," +
                    "    qvf.street_number_suffix, ' ', " + 
                    "    qvf.direction_prefix, ' ', " + 
                    "    qvf.street_name, ' ', " +
                    "    qvf.street_type, ' ', " + 
                    "    qvf.city, ' ', " +
                    "    qvf.state, ' ', " + 
                    "    qvf.zip_code) as full_street_address, " + 
                    "   count(qvf.location_hash) as registration_count, " +
                    "   g.name, " + 
                    "   g.type, " +
                    "   g.beds_apts_lots_qty, " +
                    "   qvf.jurisdiction_name, " +
                    "   qvf.precinct, " +
                    "   qvf.location_hash " +
                    "from qvf_20220901_v qvf " + 
                    "join ghostbuster g " + 
                    "   on g.location_hash = qvf.location_hash " +
                    "where " + 
                    "   qvf.county_name = $1 and type != 'APT_LOT?' " +
                    "group by " + 
                    "   full_street_address, " + 
                    "   qvf.location_hash, " + 
                    "   g.name, g.type, g.beds_apts_lots_qty, " + 
                    "   qvf.jurisdiction_name, qvf.precinct " +
                    "having count(qvf.location_hash) > $2 " + 
                    "order by count(qvf.location_hash) desc";
    console.log(query);
    pool.query(query, [county, reg_count_threshold], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });                    
}           
const getChallengeListByPrecinct = (request, response) => {
    const county = request.params.county_name;
    const jurisdiction = request.params.jurisdiction_name;
    const precinct = request.params.precinct_name;
    const query = "WITH Nov20 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = \'11/03/2020\' ) " +
                "select " +
                "concat(qvf.street_number_prefix, ' '," + 
                "    qvf.street_number, ' '," +
                "    qvf.street_number_suffix, ' ', " + 
                "    qvf.direction_prefix, ' ', " + 
                "    qvf.street_name, ' ', " +
                "    qvf.street_type, ' ', " + 
                "    qvf.city, ' ', " +
                "    qvf.state, ' ', " + 
                "    qvf.zip_code) as full_street_address, " +  
                "concat(qvf.last_name, ' ', CASE qvf.middle_name WHEN NULL THEN '' ELSE qvf.middle_name END, ' ', qvf.first_name) as full_name, " +
                "qvf.voter_identification_number, " +
                "qvf.year_of_birth, " +
                "qvf.jurisdiction_name, " +
                "qvf.precinct, " +
                "g.name, " +
                "g.type, " +
                "g.street_name, " +
                "g.street_type, " +
                "qvf.city, " +
                "qvf.zip_code, " +
                "qvf.extension, " +                
                "qvf.mailing_address_line_one, " +
                "qvf.mailing_address_line_two, " +
                "qvf.mailing_address_line_three, " +  
                "qvf.first_name, " +
                "qvf.middle_name, " +
                "qvf.last_name, " +
                "qvf.location_hash, " +
                "date(qvfh.election_date), " +
                "CASE qvfh.election_date WHEN '11/03/2020' THEN 'Voted' ELSE 'Did not Vote' END as voted_2020, " +
                "CASE qvfh.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE  qvfh.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person " +
                "from qvf_20220901_v qvf " +
                "join ghostbuster g on g.location_hash = qvf.location_hash " +
                "left join Nov20 qvfh on qvf.voter_identification_number = qvfh.voter_identification_number " +
                "where qvf.county_name = $1 and qvf.jurisdiction_name = $2 and qvf.precinct = $3 and g.type != 'APT_LOT?'";
    //console.log(query);
    pool.query(query, [county, jurisdiction, precinct], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
  
module.exports = {
    getGhostbustersByCounty,
    getChallengeListByPrecinct,
}