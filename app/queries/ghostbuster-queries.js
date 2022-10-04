const dbConfig = require("../config/db.config.js");
const date = require('date-and-time');
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
    pool.query(query, [county, reg_count_threshold], (error, results) => {
        if (error) {
            console.log(" ----------------------------------------- " + date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " ----------------------------------------- ");
            console.log(error.status + " :: " + error.message);
            console.log(query);
            console.log(" ---------------------------------------------------------------------------------- "); 
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
                "concat_ws('; ', " +
                "   nullif(CASE WHEN (qvf.street_number IS null OR qvf.street_number = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "   nullif(CASE WHEN (qvf.street_name IS null OR qvf.street_name = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'APARTMENT' THEN ( CASE WHEN (qvf.extension IS null OR qvf.extension = '') THEN '001_EXT_BLNK_APT' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'SENIOR LIVING' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_SRLV' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'HOTEL' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_HOTL' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'TRAILER PARK' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_TRLR' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'EMPTY LOT' THEN '003_EMPTY_LOT' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'BUSINESS' THEN '003_BSN' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'UPS' THEN '003_UPS' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'CHURCH' THEN (CASE WHEN g.REG_QTY_2022_09 > 5 THEN '002_CRC_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'RESIDENTIAL' THEN (CASE WHEN g.REG_QTY_2022_09 > 8 THEN '002_RES_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'HOTEL') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'MEMORY/DEMENTIA CARE') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'NURSING/GROUP HOME') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'OTHER') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'PRISON') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'RV PARK-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'VIRTUALMAILBOX') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'CAMPS-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'RV PARK-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) > 110) THEN '005_AGE_OVER' ELSE null END, ''), " +
                "   nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) < 18) THEN '005_AGE_UNDER' ELSE null END, ''), " +		 
                "   nullif(CASE WHEN (qvf.registration_date < '1920-01-01') THEN '005_REG_DATE_OLD' ELSE null END, ''), " +
                "   nullif(CASE WHEN (qvf.first_name = qvf.last_name) THEN '006_REG_FNLN_DUP' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (qvf.middle_name = qvf.last_name) THEN '006_REG_MNLN_DUP' ELSE null END, ''), " +
                "   nullif(CASE qvf.voter_status_type_code WHEN 'CH' THEN '009_CHALLENGED' ELSE null END, ''), " +
                "   nullif(CASE qvf.voter_status_type_code WHEN 'V' THEN '009_VERIFY' ELSE null END, ''), " +					 
                "   nullif(CASE qvf.uocava_status_code WHEN 'O' THEN '010_UOCAVA' ELSE null END, ''), " +
                "   nullif(CASE WHEN (QVF.LOCATION_HASH = ZIP.LOCATION_HASH) THEN '003_USPS' ELSE NULL END, ''), " +
                "   nullif(CASE WHEN (NCOA.NCOA_MOVE_DATE IS NOT NULL) THEN '008_NCOA_MOVED' ELSE NULL END, '') " +
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
                "NCOA.NCOA_MOVE_DATE, NCOA.NCOA_MOVE_TYPE, NCOA.CONDITION_1, NCOA.CONDITION_2, NCOA.CONDITION_3, NCOA.CONDITION_4, NCOA.CONDITION_5, NCOA.CONDITION_6, NCOA.CONDITION_7, " +
                "CONCAT_WS(' ', NULLIF(NCOA.NCOA_ADDRESS, ''), NULLIF(NCOA.NCOA_CITY, ''), NULLIF(NCOA.NCOA_STATE, ''), NULLIF(NCOA.NCOA_ZIP_CODE_PLUS4, ''), NULLIF(NCOA.NCOA_COUNTY_NAME, '')) AS NCOA_MOVED_TO_ADDRESS," +
                "NCOA.NCOA_DELIVERY_POINT, NCOA.NCOA_RETURN_CODE, NCOA.NCOA_FOOTNOTE, " +
                "qvf.voter_identification_number, " +
                "qvf.voter_status_type_code," +
                "qvf.registration_date, " +
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
                "CASE qvfh_nov2020.election_date WHEN '11/03/2020' THEN 'Voted' ELSE 'Did not Vote' END as voted_nov-2020, " +
                "CASE qvfh_nov2020.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE  qvfh_nov2020.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person_nov_2020, " +
                "date(qvfh_aug2022.election_date) aug_2022_election_date, " +
                "CASE qvfh_aug2022.election_date WHEN '08/02/2022' THEN 'Voted' ELSE 'Did not Vote' END as voted_aug_2022, " + 
                "CASE qvfh_aug2022.is_absentee_voter WHEN 'N' THEN 'In Person' ELSE (CASE  qvfh_aug2022.is_absentee_voter WHEN 'Y' THEN 'Absentee' ELSE '' END) END as absentee_or_in_person_aug_2022 " + 
            "from qvf_20220901_v qvf " +
            "join ghostbuster g on g.location_hash = qvf.location_hash " +
            "left join history_nov_2020 qvfh_nov2020 on qvf.voter_identification_number = qvfh_nov2020.voter_identification_number " +
            "left join history_aug_2022 qvfh_aug2022 on qvf.voter_identification_number = qvfh_aug2022.voter_identification_number " +
            "left join NCOA_202203 NCOA ON NCOA.VOTER_IDENTIFICATION_NUMBER = QVF.VOTER_IDENTIFICATION_NUMBER " +
            "left join ZIPCODES_USA ZIP on ZIP.LOCATION_HASH = QVF.LOCATION_HASH " +
            "where qvf.county_name = $1 and qvf.jurisdiction_name = $2 and qvf.precinct = $3 and g.type != 'APT_LOT?'";    
    pool.query(query, [county, jurisdiction, precinct], (error, results) => {
        if (error) {
            console.log(" ----------------------------------------- " + date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " ----------------------------------------- ");
            console.log(error.status + " :: " + error.message);
            console.log(query);
            console.log(county + ":: " + jurisdiction + " :: " + precinct);
            console.log(" ---------------------------------------------------------------------------------- ");
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const getChallengeListByJurisdiction = (request, response) => {
    const county = request.params.county_name;
    const jurisdiction = request.params.jurisdiction_name;
    const query = "WITH history_nov_2020 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = \'11/03/2020\' ), " +
                "history_aug_2022 AS ( SELECT * FROM QVF_20220901_VH WHERE ELECTION_DATE = '08/02/2022' )" +
                "select " +
                "concat_ws('; ', " +
                "   nullif(CASE WHEN (qvf.street_number IS null OR qvf.street_number = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "   nullif(CASE WHEN (qvf.street_name IS null OR qvf.street_name = '') THEN '001_ADDRESS_BLANK' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'APARTMENT' THEN ( CASE WHEN (qvf.extension IS null OR qvf.extension = '') THEN '001_EXT_BLNK_APT' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'SENIOR LIVING' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_SRLV' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'HOTEL' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_HOTL' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'TRAILER PARK' THEN (CASE WHEN (qvf.extension IS null or qvf.extension = '') THEN '001_EXT_BLNK_TRLR' ELSE null END) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'EMPTY LOT' THEN '003_EMPTY_LOT' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'BUSINESS' THEN '003_BSN' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'UPS' THEN '003_UPS' ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'CHURCH' THEN (CASE WHEN g.REG_QTY_2022_09 > 5 THEN '002_CRC_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "   nullif(CASE upper(g.type) WHEN 'RESIDENTIAL' THEN (CASE WHEN g.REG_QTY_2022_09 > 8 THEN '002_RES_HIGH_REG' ELSE null end) ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'HOTEL') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'MEMORY/DEMENTIA CARE') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'NURSING/GROUP HOME') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'OTHER') THEN '003_MISC_INV' ELSE null END, ''), " +
                "   nullif(CASE WHEN (upper(g.type) = 'PRISON') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'RV PARK-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'VIRTUALMAILBOX') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'CAMPS-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (upper(g.type) = 'RV PARK-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''), " + 
                "   nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) > 110) THEN '005_AGE_OVER' ELSE null END, ''), " +
                "   nullif(CASE WHEN ((date_part('year', now()) - qvf.year_of_birth) < 18) THEN '005_AGE_UNDER' ELSE null END, ''), " +		 
                "   nullif(CASE WHEN (qvf.registration_date < '1920-01-01') THEN '005_REG_DATE_OLD' ELSE null END, ''), " +
                "   nullif(CASE WHEN (qvf.first_name = qvf.last_name) THEN '006_REG_FNLN_DUP' ELSE null END, ''), " + 
                "   nullif(CASE WHEN (qvf.middle_name = qvf.last_name) THEN '006_REG_MNLN_DUP' ELSE null END, ''), " +
                "   nullif(CASE qvf.voter_status_type_code WHEN 'CH' THEN '009_CHALLENGED' ELSE null END, ''), " +
                "   nullif(CASE qvf.voter_status_type_code WHEN 'V' THEN '009_VERIFY' ELSE null END, ''), " +					 
                "   nullif(CASE qvf.uocava_status_code WHEN 'O' THEN '010_UOCAVA' ELSE null END, ''), " +
                "   nullif(CASE WHEN (QVF.LOCATION_HASH = ZIP.LOCATION_HASH) THEN '003_USPS' ELSE NULL END, '') " +
                "   nullif(CASE WHEN (NCOA.NCOA_MOVE_DATE IS NOT NULL) THEN '008_NCOA_MOVED' ELSE NULL END, '') " +                
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
                "NCOA.NCOA_MOVE_DATE, NCOA.NCOA_MOVE_TYPE, NCOA.CONDITION_1, NCOA.CONDITION_2, NCOA.CONDITION_3, NCOA.CONDITION_4, NCOA.CONDITION_5, NCOA.CONDITION_6, NCOA.CONDITION_7, " +
                "CONCAT_WS(' ', NULLIF(NCOA.NCOA_ADDRESS, ''), NULLIF(NCOA.NCOA_CITY, ''), NULLIF(NCOA.NCOA_STATE, ''), NULLIF(NCOA.NCOA_ZIP_CODE_PLUS4, ''), NULLIF(NCOA.NCOA_COUNTY_NAME, '')) AS NCOA_MOVED_TO_ADDRESS," +
                "NCOA.NCOA_DELIVERY_POINT, NCOA.NCOA_RETURN_CODE, NCOA.NCOA_FOOTNOTE, " +                
                "qvf.voter_identification_number, " +
                "qvf.voter_status_type_code," +
                "qvf.registration_date, " +
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
                "left join NCOA_202203 NCOA ON NCOA.VOTER_IDENTIFICATION_NUMBER = QVF.VOTER_IDENTIFICATION_NUMBER " +
                "left join ZIPCODES_USA ZIP on ZIP.LOCATION_HASH = QVF.LOCATION_HASH " +
                "where qvf.county_name = $1 and qvf.jurisdiction_name = $2 and g.type != 'APT_LOT?'";
    pool.query(query, [county, jurisdiction], (error, results) => {
        if (error) {
            console.log(" ----------------------------------------- " + date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " ----------------------------------------- ");
            console.log(error.status + " :: " + error.message);
            console.log(query);
            console.log(county + ":: " + jurisdiction);
            console.log(" ---------------------------------------------------------------------------------- ");
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