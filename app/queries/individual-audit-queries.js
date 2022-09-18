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

const getVoterById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM qvf_20220901_v WHERE voter_identification_number = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const getVoterHistoryById = (request, response) => {
  const id = parseInt(request.params.id);
  const qvf = request.params.qvf;
  pool.query('SELECT * FROM ' + qvf + 'h WHERE voter_identification_number = $1 order by election_date desc', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
    /*var voterInformationHeader = { "voter_identification_number": "33264099", "first_name": "Joe", "middle_name": "", "last_name": "Schmoe", "county_name": "BARAGA"};
    var voterHistory = [{ 
        "qvfDate" : "2019/01/15", 
        "votingHistory" : [
          {"electionDate": "2010/08/03", "votingMethod": "I"},
          {"electionDate": "2010/11/02", "votingMethod": "I"},
          {"electionDate": "2012/11/06", "votingMethod": "I"},
          {"electionDate": "2014/11/04", "votingMethod": "I"},
          {"electionDate": "2016/11/08", "votingMethod": "I"},
          {"electionDate": "2017/11/07", "votingMethod": "I"},
          {"electionDate": "2018/08/07", "votingMethod": "I"},
          {"electionDate": "2018/11/06", "votingMethod": "I"},
          {"electionDate": "2020/03/10", "votingMethod": "I"},
          {"electionDate": "2020/08/04", "votingMethod": "I"},
          {"electionDate": "2020/11/03", "votingMethod": "I"},
          {"electionDate": "2021/11/02", "votingMethod": "I"}
        ]
      }, { 
        "qvfDate" : "2019/10/01", 
        "votingHistory" : [
          {"electionDate": "2010/08/03", "votingMethod": "I"},
          {"electionDate": "2010/11/02", "votingMethod": "I"},
          {"electionDate": "2012/11/06", "votingMethod": "I"},
          {"electionDate": "2014/11/04", "votingMethod": "I"},
          {"electionDate": "2016/11/08", "votingMethod": "I"},
          {"electionDate": "2017/11/07", "votingMethod": "I"},
          {"electionDate": "2018/08/07", "votingMethod": "I"},
          {"electionDate": "2018/11/06", "votingMethod": "I"},
          {"electionDate": "2020/03/10", "votingMethod": "I"},
          {"electionDate": "2020/08/04", "votingMethod": "I"},
          {"electionDate": "2020/11/03", "votingMethod": "I"},
          {"electionDate": "2021/11/02", "votingMethod": "I"}
        ]
      }, { 
        "qvfDate" : "2020/03/01", 
        "votingHistory" : [
          {"electionDate": "2010/08/03", "votingMethod": "I"},
          {"electionDate": "2010/11/02", "votingMethod": "I"},
          {"electionDate": "2012/11/06", "votingMethod": "I"},
          {"electionDate": "2014/11/04", "votingMethod": "I"},
          {"electionDate": "2016/11/08", "votingMethod": "I"},
          {"electionDate": "2017/11/07", "votingMethod": "I"},
          {"electionDate": "2018/08/07", "votingMethod": "I"},
          {"electionDate": "2018/11/06", "votingMethod": "I"},
          {"electionDate": "2020/03/10", "votingMethod": "I"},
          {"electionDate": "2020/08/04", "votingMethod": "I"},
          {"electionDate": "2020/11/03", "votingMethod": "I"},
          {"electionDate": "2021/11/02", "votingMethod": "I"}
        ]
      }
    ];
    var voterHistoryAcrossQVFJson = {
      "voterInformationHeader": voterInformationHeader,
      "votingHistory": voterHistory
    };
    response.status(200).json(voterHistoryAcrossQVFJson);*/
  });
}


module.exports = {
  getQvfDates,
  getCounties,
  getVoterById,
  getVoterHistoryById,
}