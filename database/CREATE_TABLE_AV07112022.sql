DROP TABLE IF EXISTS AV07112022;
CREATE TABLE AV07112022 (
	BALLOTID varchar,
	VOTERID bigint,
	SPOILEDIND boolean,
	REJECTED boolean,
	REJECTED_REASON varchar,
	SURRENDERED varchar,
	UNDELIVERABLE boolean,
	ACCESSIBLEBALLOT boolean,
	BALLOTNUMBER varchar,
	DATESENT date,
	DATERETURNED date, 
	APPSENT date,
	APPRETURNED date,
	COUNTY varchar,
	JURISDICTION varchar,
	CBPRECINCT varchar,
	FULL_NAME varchar,
	EFFECTIVEDATE date,
	BALLOTADDRESS varchar,
	SPOILED_BALLOTS varchar,
	YOB integer,
	UOCAVA varchar,
	PERMAV boolean, 
	PERMACCESSIBLEAV boolean,
	RES_STREET_ADDRESS varchar,
	RES_CITY_ADDRESS varchar,
	MAIL_ADDRESS1 varchar,
	MAIL_ADDRESS2 varchar,
	MAIL_ADDRESS3 varchar,
	MAIL_ADDRESS4 varchar,
	MAIL_ADDRESS5 varchar,
	REGISTRATION_DATE date
);

ALTER TABLE AV07112022 ADD COLUMN REASON_CODES VARCHAR;

CREATE INDEX IDX_AV07112022_COUNTY
ON AV07112022(COUNTY);

CREATE INDEX IDX_AV07112022_VOTERID
ON AV07112022(VOTERID);
CREATE INDEX IDX_AV07112022_APPSENT ON AV08022022(APPSENT);
CREATE INDEX IDX_AV07112022_APPRETURNED ON AV08022022(APPRETURNED);
CREATE INDEX IDX_AV07112022_DATESENT ON AV08022022(DATESENT);
CREATE INDEX IDX_AV07112022_DATERETURNED ON AV08022022(DATERETURNED);

update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_APP_SNT_12_MO: App Sent more than 12 months ago.') where appsent < (select date '2022-07-11' - interval '12 months');
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_APP_RTN_12_MO: App Returned more than 12 months ago.') where appreturned < (select date '2022-07-11' - interval '12 months');
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_DATE_SNT_FUTURE: Date Sent after 07-11-2022.') where datesent > '2022-07-11';
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_BALLOT_RTN_LT_BALLOT_SNT: Ballot return date prior to ballot sent date.') where datereturned < datesent;
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_EFF_DT_LT_1917_BALLOT_NUM_NOT_NULL: Effective date prior to 1917(not incl.) AND BallotNumber NOT equal to NULL.') where effectivedate < '1917-01-01' and ballotnumber is not null and ballotnumber != '';
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_YOB_LT_1918: Year of birth prior to 1918 (not incl.)') where yob < '1918';
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_REGN_DT_LT_1934_BALLOT_NUM_NOT_NULL: Registration Date prior to 1934(not incl.) AND BallotNumber NOT equal to NULL.') where registration_date < '1934-01-01' and ballotnumber is not null;
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_TRIPLICATE+_VOTER_ID: Voter ID appears thrice or more') where voterid in (895000786, 159763462, 34203425, 1170001169, 108099124);

WITH Multiples AS (
  SELECT voterid, Count(voterid) AS Voterid_Count
  FROM  AV07112022
  WHERE Rejected_Reason is null
  Group By voterid
  HAVING Count(voterid) > 1
  )
SELECT Distinct av.*, m.Voterid_Count
FROM AV07112022 av  
INNER JOIN Multiples m ON av.voterid = m.voterid;
update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_BLANK_REJECT_REASON: Voters with 2 or more blank rejected reason') where voterid in (32914759,107015615,33602553,105634562,925005966,32341075,4711813,2610002762,159799912,160154582,160724308,160403399,5619281,103498425,1070005465,102124783,2610017122,9673157,683770,32138335,32264627,32535015,33223501,34203425,34800583,34805408,102006941,105096195,105280148,106980934,107801797,108082766,108099124,108625022,159763462,895000786,1170001169,1170001484,2610022851,4000248573,4000430885);

--update av07112022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_EFF_DT_LT_1917: Effective date prior to 1917(not incl.)') where effectivedate < '1917-01-01';

copy (select * from av07112022 where reason_codes is not null order by voterid asc) to 'E:\Projects\EIF\Analysis\AV-20201107-Issues.csv' (format CSV, delimiter ',', HEADER);
copy (select Replace (reason_codes, ';', Chr(13) & chr(10)) AS reason_codes_formatted,  * from av07112022 where reason_codes is not null order by voterid asc) to 'E:\Projects\EIF\Analysis\AV-20201107-issues.csv';





DROP TABLE IF EXISTS AV08012022;
CREATE TABLE AV08012022 (
	BALLOTID varchar,
	VOTERID bigint,
	SPOILEDIND boolean,
	REJECTED boolean,
	REJECTED_REASON varchar,
	SURRENDERED varchar,
	UNDELIVERABLE boolean,
	ACCESSIBLEBALLOT boolean,
	BALLOTNUMBER varchar,
	DATESENT date,
	DATERETURNED date, 
	APPSENT date,
	APPRETURNED date,
	COUNTY varchar,
	JURISDICTION varchar,
	CBPRECINCT varchar,
	FULL_NAME varchar,
	EFFECTIVEDATE date,
	BALLOTADDRESS varchar,
	SPOILED_BALLOTS varchar,
	YOB integer,
	UOCAVA varchar,
	PERMAV boolean, 
	PERMACCESSIBLEAV boolean,
	RES_STREET_ADDRESS varchar,
	RES_CITY_ADDRESS varchar,
	MAIL_ADDRESS1 varchar,
	MAIL_ADDRESS2 varchar,
	MAIL_ADDRESS3 varchar,
	MAIL_ADDRESS4 varchar,
	MAIL_ADDRESS5 varchar,
	REGISTRATION_DATE date
);

ALTER TABLE AV08012022 ADD COLUMN REASON_CODES VARCHAR;

CREATE INDEX IDX_AV08012022_COUNTY ON AV08012022(COUNTY);

CREATE INDEX IDX_AV08012022_VOTERID
ON AV08012022(VOTERID);
CREATE INDEX IDX_AV08012022_APPSENT ON AV08012022(APPSENT);
CREATE INDEX IDX_AV08012022_APPRETURNED ON AV08012022(APPRETURNED);
CREATE INDEX IDX_AV08012022_DATESENT ON AV08012022(DATESENT);
CREATE INDEX IDX_AV08012022_DATERETURNED ON AV08012022(DATERETURNED);

update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_APP_SNT_12_MO: App Sent more than 12 months ago.') where appsent < (select date '2022-08-01' - interval '12 months');
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_APP_RTN_12_MO: App Returned more than 12 months ago.') where appreturned < (select date '2022-08-01' - interval '12 months');
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_DATE_SNT_FUTURE: Date Sent after 08-01-2022.') where datesent > '2022-08-01';
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_BALLOT_RTN_LT_BALLOT_SNT: Ballot return date prior to ballot sent date.') where datereturned < datesent;
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_EFF_DT_LT_1917_BALLOT_NUM_NOT_NULL: Effective date prior to 1917(not incl.) AND BallotNumber NOT equal to NULL.') where effectivedate < '1917-01-01' and ballotnumber is not null and ballotnumber != '';
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_YOB_LT_1918: Year of birth prior to 1918 (not incl.)') where yob < '1918';
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_REGN_DT_LT_1934_BALLOT_NUM_NOT_NULL: Registration Date prior to 1934(not incl.) AND BallotNumber NOT equal to NULL.') where registration_date < '1934-01-01' and ballotnumber is not null;

  SELECT  voterid, Count(voterid) AS Voterid_Count
  FROM  AV08112022
  Group By voterid
  HAVING Count(voterid) > 2
  
update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_TRIPLICATE+_VOTER_ID: Voter ID appears thrice or more') where voterid in (895000786, 159763462, 33223501, 34203425, 1170001169, 108099124);
WITH Multiples AS (
  SELECT voterid, Count(voterid) AS Voterid_Count
  FROM  AV08012022
  WHERE Rejected_Reason is null
  Group By voterid
  HAVING Count(voterid) > 1
  )
SELECT Distinct av.*, m.Voterid_Count
FROM AV08012022 av  
INNER JOIN Multiples m ON av.voterid = m.voterid;

update AV08012022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_BLANK_REJECT_REASON: Voters with 2 or more blank rejected reason') where voterid in (2610002762,159799912,160154582,160724308,160403399,5619281,1070005465,2610017122,9673157,159669985,32679042,2610006223,103324134,34774624,33513590,159620905,2610024072,2545000462,33223501,33924178,5610340,160675479,680003959,108913924,34343864,160196709,32519852,5018978,159500150,33957523,1070016779,4000113131,373803,683770,3133370,32138335,32264627,32535015,34800583,102006941,105096195,105280148,106980934,107801797,108082766,108099124,108625022,159763462,159893960,895000786,1170001169,1170001484,2610022851,4000248573,4000430885,4004024411);



DROP TABLE IF EXISTS AV08022022;
CREATE TABLE AV08022022 (
	BALLOTID varchar,
	VOTERID bigint,
	SPOILEDIND boolean,
	REJECTED boolean,
	REJECTED_REASON varchar,
	SURRENDERED varchar,
	UNDELIVERABLE boolean,
	ACCESSIBLEBALLOT boolean,
	BALLOTNUMBER varchar,
	DATESENT date,
	DATERETURNED date, 
	APPSENT date,
	APPRETURNED date,
	COUNTY varchar,
	JURISDICTION varchar,
	CBPRECINCT varchar,
	FULL_NAME varchar,
	EFFECTIVEDATE date,
	BALLOTADDRESS varchar,
	SPOILED_BALLOTS varchar,
	YOB integer,
	UOCAVA varchar,
	PERMAV boolean, 
	PERMACCESSIBLEAV boolean,
	RES_STREET_ADDRESS varchar,
	RES_CITY_ADDRESS varchar,
	MAIL_ADDRESS1 varchar,
	MAIL_ADDRESS2 varchar,
	MAIL_ADDRESS3 varchar,
	MAIL_ADDRESS4 varchar,
	MAIL_ADDRESS5 varchar,
	REGISTRATION_DATE date
);
ALTER TABLE AV08022022 ADD COLUMN REASON_CODES VARCHAR;
CREATE INDEX IDX_AV08022022_COUNTY ON AV08022022(COUNTY);
CREATE INDEX IDX_AV08022022_APPSENT ON AV08022022(APPSENT);
CREATE INDEX IDX_AV08022022_APPRETURNED ON AV08022022(APPRETURNED);
CREATE INDEX IDX_AV08022022_DATESENT ON AV08022022(DATESENT);
CREATE INDEX IDX_AV08022022_DATERETURNED ON AV08022022(DATERETURNED);

update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_APP_SNT_12_MO: App Sent more than 12 months ago.') where appsent < (select date '2022-08-02' - interval '12 months');
update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_APP_RTN_12_MO: App Returned more than 12 months ago.') where appreturned < (select date '2022-08-02' - interval '12 months');
update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_DATE_SNT_FUTURE: Date Sent after 08-02-2022.') where datesent > '2022-08-02';
update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_BALLOT_RTN_LT_BALLOT_SNT: Ballot return date prior to ballot sent date.') where datereturned < datesent;
update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_EFF_DT_LT_1917_BALLOT_NUM_NOT_NULL: Effective date prior to 1917(not incl.) AND BallotNumber NOT equal to NULL.') where effectivedate < '1917-01-01' and ballotnumber is not null and ballotnumber != '';
update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_YOB_LT_1918: Year of birth prior to 1918 (not incl.)') where yob < '1918';
update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_REGN_DT_LT_1934_BALLOT_NUM_NOT_NULL: Registration Date prior to 1934(not incl.) AND BallotNumber NOT equal to NULL.') where registration_date < '1934-01-01' and ballotnumber is not null;

update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_TRIPLICATE+_VOTER_ID: Voter ID appears thrice or more') where voterid in (33223501,107854236,108099124,159763462,895000786,1170001169);

WITH Multiples AS (
  SELECT voterid, Count(voterid) AS Voterid_Count
  FROM  AV08022022
  WHERE Rejected_Reason is null
  Group By voterid
  HAVING Count(voterid) > 1
  )
SELECT Distinct av.*, m.Voterid_Count
FROM AV08022022 av  
INNER JOIN Multiples m ON av.voterid = m.voterid;

update AV08022022 set reason_codes = CONCAT_WS(';', reason_codes, 'ERR_BLANK_REJECT_REASON: Voters with 2 or more blank rejected reason') where voterid in (32914759,107015615,33602553,105634562,925005966,32341075,4711813,2610002762,159799912,160154582,160724308,160403399,5619281,1070005465,2610017122,9673157,159669985,32679042,2610006223,103324134,34774624,33513590,159620905,2610024072,2545000462,33223501,33924178,5610340,160675479,680003959,108913924,34343864,160196709,32519852,5018978,159500150,33957523,1070016779,4000113131,373803,159218018,683770,3133370,32138335,32264627,32535015,34284475,34800583,102006941,105096195,105280148,106980934,107801797,107854236,107862648,108082766,108099124,108625022,159763462,159893960,895000786,1170001169,1170001484,2610022851,4000248573,4000430885,4004024411);