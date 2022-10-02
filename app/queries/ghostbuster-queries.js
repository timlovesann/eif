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
    const query = "WITH history_nov_2020 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = \'11/03/2020\' ), " +
                    "history_aug_2022 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = '08/02/2022' )" +
                "select " +
                "concat_ws(' ', " +
                "   nullif(CASE WHEN (qvf.street_number IS null OR qvf.street_number = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "   nullif(CASE WHEN (qvf.street_name IS null OR qvf.street_name = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'APARTMENT' THEN ( CASE WHEN (qvf.extension IS null OR qvf.extension = '') THEN '001_EXT_BLNK_APT' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'SENIOR LIVING' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_SRLV' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'HOTEL' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_HOTL' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'TRAILER PARK' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_TRLR' ELSE null END) ELSE null END, ''), " +
                //"   --nullif(CASE qvf.extension WHEN null or '' THEN '001_EXT_NMBR_MSNG' ELSE null)," +
                "   nullif(CASE upper(g.type) WHEN 'UPS' THEN '003_BSN_UPS_USPS' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'USPS' THEN '003_BSN_UPS_USPS' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'CHURCH' THEN (CASE WHEN g.REG_QTY_2022_09 > 5 THEN '002_CRC_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'RESIDENTIAL' THEN (CASE WHEN g.REG_QTY_2022_09 > 8 THEN '002_RES_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) != 'RESIDENTIAL') THEN '003_MISC_INV' ELSE null END, ''), " +
                //"   --nullif(CASE upper(g.type) WHEN NOT 'RESIDENTIAL' THEN '003_MISC_LAW' ELSE null END, ''), " +
                "   nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) > 110) THEN '005_AGE_OVER' ELSE null END, ''), " +
                "   nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) < 18) THEN '005_AGE_UNDER' ELSE null END, ''), " +		 
                //"   --005_REG_DATE_BKDT " +
                "   nullif(CASE WHEN (qvf.registration_date < '1920-01-01') THEN '005_REG_DATE_OLD' ELSE null END, ''), " +
                "   nullif(CASE WHEN (qvf.first_name = qvf.last_name) THEN '006_REG_FNLN_DUP' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (qvf.middle_name = qvf.last_name) THEN '006_REG_MNLN_DUP' ELSE null END, ''), " +
                //" --007_NAME_GONE " + 
                //" --007_VoterID_GONE " +
                "   nullif(CASE qvf.voter_status_type_code WHEN 'CH' THEN '009_CHALLENGED' ELSE null END, ''), " +
                "   nullif(CASE qvf.voter_status_type_code WHEN 'V' THEN '009_VERIFY' ELSE null END, ''), " +					 
                "   nullif(CASE qvf.uocava_status_code WHEN 'O' THEN '010_UOCAVA' ELSE null END, '') " +
                " ) as challenge_codes, " +
                "concat_ws(' ', " + 
                "   nullif(qvf.street_number_prefix, ''), " + 
                "   nullif(qvf.street_number, ''), " +
                "   nullif(qvf.street_number_suffix, ''), " + 
                "   nullif(qvf.direction_prefix, ''), " + 
                "   nullif(qvf.street_name, ''), " +
                "   nullif(qvf.street_type, ''), " + 
                "   qvf.city, " +
                "   qvf.state, " + 
                "   qvf.zip_code " + 
                " ) as full_street_address, " +  
                "concat_ws(' ', " + 
                "   nullif(qvf.last_name, ''), " +
                "   nullif(qvf.middle_name, ''), " +
                "   nullif(qvf.first_name, '') " +
                " ) as full_name, " +
                "qvf.voter_identification_number, " +
                "qvf.year_of_birth, " +
                "qvf.jurisdiction_name, " +
                "qvf.precinct, " +
                "qvf.uocava_status_code, " +
                "g.name, " +
                "g.type, " +
                "g.street_number, " +
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
                "date(qvfh_nov2020.election_date), " +
                "CASE qvfh_nov2020.election_date WHEN '11/03/2020' THEN 'Voted' ELSE 'Did not Vote' END as voted_2020, " +
                "CASE qvfh_nov2020.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE  qvfh_nov2020.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person_nov_2020, " +
                "date(qvfh_aug2022.election_date), " +
                "CASE qvfh_aug2022.election_date WHEN '08/02/2022' THEN 'Voted' ELSE 'Did not Vote' END as voted_aug_2022, " + 
                "CASE qvfh_aug2022.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE  qvfh_aug2022.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person_aug_2022 " + 
            "from qvf_20220901_v qvf " +
            "join ghostbuster g on g.location_hash = qvf.location_hash " +
            "left join history_nov_2020 qvfh_nov2020 on qvf.voter_identification_number = qvfh_nov2020.voter_identification_number " +
            "left join history_aug_2022 qvfh_aug2022 on qvf.voter_identification_number = qvfh_aug2022.voter_identification_number " +
            "where qvf.county_name = $1 and qvf.jurisdiction_name = $2 and qvf.precinct = $3 and g.type != 'APT_LOT?'";
    console.log(query);
    pool.query(query, [county, jurisdiction, precinct], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const getChallengeListByJurisdiction = (request, response) => {
    const county = request.params.county_name;
    const jurisdiction = request.params.jurisdiction_name;
    const query = "WITH history_nov_2020 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = \'11/03/2020\' ), " +
                "history_aug_2022 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = '08/02/2022' )"
                "select " +
                "concat_ws(' ', " +
                "    nullif(CASE WHEN (qvf.street_number IS null OR qvf.street_number = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "    nullif(CASE WHEN (qvf.street_name IS null OR qvf.street_name = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'APARTMENT' THEN ( CASE WHEN (qvf.extension IS null OR qvf.extension = '') THEN '001_EXT_BLNK_APT' ELSE null END) ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'SENIOR LIVING' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_SRLV' ELSE null END) ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'HOTEL' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_HOTL' ELSE null END) ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'TRAILER PARK' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_TRLR' ELSE null END) ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'EMPTY LOT' THEN '004_EMPTY_LOT' ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'UPS' THEN '003_BSN_UPS_USPS' ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'USPS' THEN '003_BSN_UPS_USPS' ELSE null END, '') " +
                "    nullif(CASE upper(g.type) WHEN 'CHURCH' THEN (CASE WHEN g.REG_QTY_2022_09 > 5 THEN '002_CRC_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "    nullif(CASE upper(g.type) WHEN 'RESIDENTIAL' THEN (CASE WHEN g.REG_QTY_2022_09 > 8 THEN '002_RES_HIGH_REG' ELSE null end) ELSE null END, ''), " + 
                "    nullif(CASE WHEN (upper(g.type) != 'RESIDENTIAL') THEN '003_MISC_INV' ELSE null END, ''), " +
                //"  --nullif(CASE upper(g.type) WHEN NOT 'RESIDENTIAL' THEN '003_MISC_LAW' ELSE null END, ''), " +
                "    nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) > 110) THEN '005_AGE_OVER' ELSE null END, ''), " +
                "    nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) < 18) THEN '005_AGE_UNDER' ELSE null END, ''), " +
                //"  --005_REG_DATE_BKDT " +
                "    nullif(CASE WHEN (qvf.registration_date < '1920-01-01') THEN '005_REG_DATE_OLD' ELSE null END, ''), " +
                "    nullif(CASE WHEN (qvf.first_name = qvf.last_name) THEN '006_REG_FNLN_DUP' ELSE null END, ''), " +
                "    nullif(CASE WHEN (qvf.middle_name = qvf.last_name) THEN '006_REG_MNLN_DUP' ELSE null END, ''), " +
                //"    --007_NAME_GONE " +
                //"--007_VoterID_GONE " +
                "    nullif(CASE qvf.voter_status_type_code WHEN 'CH' THEN '009_CHALLENGED' ELSE null END, ''), " +
                "    nullif(CASE qvf.voter_status_type_code WHEN 'V' THEN '009_VERIFY' ELSE null END, ''), " +				 
                "    nullif(CASE qvf.uocava_status_code WHEN 'O' THEN '010_UOCAVA' ELSE null END, '') " +
                "    nullif(CASE qvf.uocava_status_code WHEN 'M' THEN '010_UOCAVA' ELSE null END, ''), " +
                "    nullif(CASE qvf.uocava_status_code WHEN 'C' THEN '010_UOCAVA' ELSE null END, '') " +                
                " ) as challenge_codes, " +
                "concat_ws(' ', " + 
                "   nullif(qvf.street_number_prefix, ''), " + 
                "   nullif(qvf.street_number, ''), " +
                "   nullif(qvf.street_number_suffix, ''), " + 
                "   nullif(qvf.direction_prefix, ''), " + 
                "   nullif(qvf.street_name, ''), " +
                "   nullif(qvf.street_type, ''), " + 
                "   qvf.city, " +
                "   qvf.state, " + 
                "   qvf.zip_code " + 
                " ) as full_street_address, " +  
                "concat_ws(' ', " + 
                "   nullif(qvf.last_name, ''), " +
                "   nullif(qvf.middle_name, ''), " +
                "   nullif(qvf.first_name, '') " +
                " ) as full_name, " +
                "qvf.voter_identification_number, " +
                "qvf.voter_status_type_code," +
                "qvf.year_of_birth, " +
                "qvf.jurisdiction_name, " +
                "qvf.precinct, " +
                "qvf.uocava_status_code, " + 
                "g.name, " +
                "g.type, " +
                "g.street_number, " +
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
                "date(qvfh_nov2020.election_date) as nov_2020_election_date, " +
                "CASE qvfh_nov2020.election_date WHEN '11/03/2020' THEN 'Voted' ELSE 'Did not Vote' END as voted_nov_2020, " +
                "CASE qvfh_nov2020.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE qvfh_nov2020.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person_nov_2020, " +
                "date(qvfh_aug2022.election_date) as aug_2022_election_date, " +
                "CASE qvfh_aug2022.election_date WHEN '08/02/2022' THEN 'Voted' ELSE 'Did not Vote' END as voted_aug_2022, " +
                "CASE qvfh_aug2022.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE  qvfh_aug2022.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person_aug_2022 " +    
                "from qvf_20220901_v qvf " +
                "join ghostbuster g on g.location_hash = qvf.location_hash " +
                "left join history_nov_2020 qvfh_nov2020 on qvf.voter_identification_number = qvfh_nov2020.voter_identification_number " +
                "left join history_aug_2022 qvfh_aug2022 on qvf.voter_identification_number = qvfh_aug2022.voter_identification_number " +
                "where qvf.county_name = $1 and qvf.jurisdiction_name = $2 and g.type != 'APT_LOT?'";
    //console.log(query);
    pool.query(query, [county, jurisdiction], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
  
module.exports = {
    getGhostbustersByCounty,
    getChallengeListByPrecinct,
    getChallengeListByJurisdiction,
}