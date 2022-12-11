DROP TABLE IF EXISTS GHOSTBUSTER;
CREATE TABLE GHOSTBUSTER (
  STREET_NUMBER_PREFIX varchar,
  STREET_NUMBER varchar,
  DIRECTION_PREFIX varchar,
  Direction_suffix varchar,
  STREET_NAME varchar,
  STREET_TYPE varchar,
  CITY varchar,
  STATE varchar,
  ZIP_CODE int,
  COUNTY_NAME varchar,
  JURISDICTION_NAME varchar,
  PRECINCT varchar,
  WARD varchar,
  NAME varchar,
  BEDS_APTS_LOTS_QTY varchar,
  TYPE VARCHAR, 
  COMMENTS VARCHAR,
  REG_QTY_2022_06 INTEGER,
  REG_QTY_2022_07 INTEGER,
  REG_QTY_2022_08 INTEGER,
  REG_QTY_2022_09 INTEGER,
  REG_QTY_2022_10 INTEGER,
  REG_QTY_2022_11 INTEGER,
  REG_QTY_2022_12 INTEGER,
  REG_QTY_2023_01 INTEGER,
  REG_QTY_2023_02 INTEGER,
  REG_QTY_2023_03 INTEGER,
  REG_QTY_2023_04 INTEGER,
  REG_QTY_2023_05 INTEGER,
  REG_QTY_2023_06 INTEGER,
  LOCATION_HASH VARCHAR
);

-- LOAD GHOSTBUSTER DATA from csv
COPY GHOSTBUSTER FROM 'E:\Projects\EIF\Analysis\Ghostbuster\ghostbuster_20221006.csv' DELIMITERS ',' CSV HEADER encoding 'WIN1252';
\COPY GHOSTBUSTER FROM '/home/psypherus/GhostBuster/ghostbuster_20221006.csv' DELIMITERS ',' CSV HEADER encoding 'WIN1252';
-- Make county name uppercase
UPDATE GHOSTBUSTER SET COUNTY_NAME = UPPER(COUNTY_NAME);

ALTER TABLE GHOSTBUSTER ADD COLUMN GIS_CODE VARCHAR;
--ALTER TABLE GHOSTBUSTER ADD COLUMN GIS_DESCRIPTION VARCHAR; rename NAME column
--ALTER TABLE GHOSTBUSTER ADD COLUMN GIS_TYPE VARCHAR; rename TYPE column
ALTER TABLE GHOSTBUSTER ADD COLUMN GIS_CATEGORY VARCHAR;

-- Add Constraint
ALTER TABLE GHOSTBUSTER ADD CONSTRAINT FK_QVF_20220901_V_GHOSTBUSTER FOREIGN KEY (COUNTY_NAME) REFERENCES QVF_20220901_V(COUNTY_NAME);

-- CREATE INDEXES
CREATE INDEX IDX_GHOSTBUSTER_COUNTY_LOCATION_HASH ON GHOSTBUSTER(COUNTY_NAME, LOCATION_HASH);

with reg_counts as (select location_hash, count(*) as qty from qvf_20220901_v group by location_hash)
select g.location_hash, rc.qty, concat_ws(' ', 'update ghostbuster set reg_qty_2022_09=', rc.qty, ' where location_hash=', '''', g.location_hash, '''') from ghostbuster g
join reg_counts rc on rc.location_hash = g.location_hash
order by rc.qty desc;

copy (
	with reg_counts as (select location_hash, count(*) as qty from qvf_20220901_v group by location_hash)
	select concat_ws('', 'update ghostbuster set reg_qty_2022_07=', rc.qty, ' where location_hash=', '''', g.location_hash, ''';') from ghostbuster g
	join reg_counts rc on rc.location_hash = g.location_hash
	order by rc.qty desc)
to 'E:\Projects\EIF\Database\Scripts\UPDATE_202207_REG_QTY_GHOSTBUSTER.txt';

copy (
	with reg_counts as (select location_hash, count(*) as qty from qvf_20220901_v group by location_hash)
	select concat_ws('', 'update ghostbuster set reg_qty_2022_08=', rc.qty, ' where location_hash=', '''', g.location_hash, ''';') from ghostbuster g
	join reg_counts rc on rc.location_hash = g.location_hash
	order by rc.qty desc)
to 'E:\Projects\EIF\Database\Scripts\UPDATE_202208_REG_QTY_GHOSTBUSTER.txt';

copy (
	with reg_counts as (select location_hash, count(*) as qty from qvf_20220901_v group by location_hash)
	select concat_ws('', 'update ghostbuster set reg_qty_2022_09=', rc.qty, ' where location_hash=', '''', g.location_hash, ''';') from ghostbuster g
	join reg_counts rc on rc.location_hash = g.location_hash
	order by rc.qty desc)
to 'E:\Projects\EIF\Database\Scripts\UPDATE_202209_REG_QTY_GHOSTBUSTER.txt';
\copy (
	with reg_counts as (select location_hash, count(*) as qty from qvf_20220901_v group by location_hash)
	select concat_ws('', 'update ghostbuster set reg_qty_2022_09=', rc.qty, ' where location_hash=', '''', g.location_hash, ''';') from ghostbuster g
	join reg_counts rc on rc.location_hash = g.location_hash where rc.qty > 5
	order by rc.qty desc)
to '/home/psypherus/scripts/ghostbuster/UPDATE_202209_REG_QTY_GHOSTBUSTER.txt';

\copy (
	with reg_counts as (select location_hash, count(*) as qty from qvf_20220801_v group by location_hash)
	select concat_ws('', 'update ghostbuster set reg_qty_2022_08=', rc.qty, ' where location_hash=', '''', g.location_hash, ''';') from ghostbuster g
	join reg_counts rc on rc.location_hash = g.location_hash where rc.qty > 5
	order by rc.qty desc)
to '/home/psypherus/scripts/ghostbuster/UPDATE_202208_REG_QTY_GHOSTBUSTER.txt';

\copy (
	with reg_counts as (select location_hash, count(*) as qty from qvf_20220901_v group by location_hash)
	select concat_ws('', 'update ghostbuster set reg_qty_2022_09=', rc.qty, ' where location_hash=', '''', g.location_hash, ''';') from ghostbuster g
	join reg_counts rc on rc.location_hash = g.location_hash where rc.qty < 6
	order by rc.qty desc)
to '/home/psypherus/scripts/ghostbuster/UPDATE_202209_REG_QTY_GHOSTBUSTER_LT_6.txt';

-- CHALLENGE CODES

DROP TABLE IF EXISTS QVF_20220901_V_CHALLENGE;
CREATE TABLE QVF_20220901_V_CHALLENGE (
	VOTER_IDENTIFICATION_NUMBER BIGINT,	
	LOCATION_HASH VARCHAR,
	CHALLENGE_CODE VARCHAR
);

CREATE TABLE CHALLENGE_CODE_REF (
	CHALLENGE_CODE VARCHAR,
	CHALLENGE_DESCRIPTION VARCHAR
);
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('001_EXT_BLNK_APRT', 'Apartments with a blank extension');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('001_EXT_BLNK_TRLR', 'Trailer park with blank extension');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('001_EXT_BLNK_SRLV', 'Senior Living with blank extension');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('001_EXT_BLNK_HOTL', 'Hotel with blank extension');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('001_RES_HIGH_REG', 'Residence with more than 8 registrations');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('001_EXT_NMBR_MSNG', 'Senior Living with no numbers in the extension');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('002_EXT_NMBR_MSNG', 'Apartments with no numbers in the extension');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('003_BSN_UPS_USPS', 'USPS & UPS Store');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('003_HTL_HIGH_REG', 'Hotel with 8 or more registrations');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('003_BSN_HIGH_REG', 'Business with 8 or more registrations');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('004_CRC_HIGH_REG', 'Church with 5 or more registrations');
INSERT INTO CHALLENGE_CODE_REF (CHALLENGE_CODE, CHALLENGE_DESCRIPTION) VALUES('004_EMPTY_LOT', 'Empty Lot');


DROP TABLE IF EXISTS COUNTY_SUMMARY_REF;
CREATE TABLE COUNTY_SUMMARY_REF (
	COUNTY_NAME VARCHAR,	
	KESHEL_HEATMAP_COLOR VARCHAR,
	VOTING_SYSTEM VARCHAR,
	CENSUS_URL VARCHAR
);

INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ALLEGAN', 'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/allegancountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('BAY', 'ES & S', 'Red',	'https://www.census.gov/quickfacts/fact/table/baycountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('BERRIEN', 'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/berriencountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CALHOUN', 			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/calhouncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CLINTON', 			'Hart', 	'Red', 'https://www.census.gov/quickfacts/fact/table/clintoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('EATON', 			'Hart', 	'Red', 'https://www.census.gov/quickfacts/fact/table/eatoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('GENESEE', 			'Hart', 	'Red', 'https://www.census.gov/quickfacts/fact/table/geneseecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('GRAND TRAVERSE', 	'ES & S', 	'Red', 'https://www.census.gov/quickfacts/fact/table/grandtraversecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('INGHAM', 			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/inghamcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('JACKSON', 			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/jacksoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('KALAMAZOO', 		'ES & S', 	'Red', 'https://www.census.gov/quickfacts/fact/table/kalamazoocountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('KENT', 			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/kentcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('LAPEER', 			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/lapeercountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('LENAWEE',			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/lenaweecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('LIVINGSTON', 		'Hart', 	'Red', 'U.S. Census Bureau QuickFacts: Livingston County, michigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MACOMB',			'ES & S', 	'Red',	'https://www.census.gov/quickfacts/fact/table/macombcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MARQUETTE', 		'Dominion', 'Red',	'https://www.census.gov/quickfacts/fact/table/marquettecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MONROE',			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/monroecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MUSKEGON', 		'Hart', 	'Red', 'https://www.census.gov/quickfacts/fact/table/muskegoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OAKLAND', 			'Hart', 	'Red', 'https://www.census.gov/quickfacts/fact/table/oaklandcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OTTAWA', 			'Hart',		'Red', 'https://www.census.gov/quickfacts/fact/table/ottawacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('SAGINAW', 			'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/saginawcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('SHIAWASSEE', 		'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/shiawasseecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ST CLAIR', 		'Dominion', 'Red', 'https://www.census.gov/quickfacts/fact/table/stclaircountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('WASHTENAW', 		'Hart', 	'Red',	'https://www.census.gov/quickfacts/fact/table/washtenawcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('WAYNE', 			'Dominion', 'Red',	'https://www.census.gov/quickfacts/fact/table/waynecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ALCONA', 			'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/alconacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ALGER', 		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/algercountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ALPENA', 		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/alpenacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ANTRIM',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/antrimcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ARENAC',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/arenaccountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('BARAGA',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/baragacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('BARRY',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/barrycountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('BENZIE',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/benziecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('BRANCH',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/branchcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CASS', 		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/casscountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CHARLEVOIX',	'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/charlevoixcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CHEBOYGAN', 	'Dominion',	'Yellow', 'https://www.census.gov/quickfacts/fact/table/cheboygancountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CHIPPEWA', 	'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/chippewacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CLARE'	, 		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/clarecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('CRAWFORD', 	'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/crawfordcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('DELTA', 		'Dominion',	'Yellow', 'https://www.census.gov/quickfacts/fact/table/deltacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('DICKINSON',	'Dominion',	'Yellow', 'https://www.census.gov/quickfacts/fact/table/dickinsoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('EMMET',		'ES & S',	'Yellow', 'https://www.census.gov/quickfacts/fact/table/emmetcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('GLADWIN',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/gladwincountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('GOGEBIC',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/gogebiccountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('GRATIOT',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/gratiotcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('HILLSDALE',	'Hart', 	'Yellow', 'https://www.census.gov/quickfacts/fact/table/hillsdalecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('HOUGHTON',		'Dominion', 'Yellow', 'https://www.census.gov/quickfacts/fact/table/houghtoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('HURON', 		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/huroncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('IONIA', 		'Hart', 	'Yellow', 	'https://www.census.gov/quickfacts/fact/table/ioniacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('IOSCO',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/ioscocountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('IRON',			'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/ironcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ISABELLA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/isabellacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('KALKASKA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/kalkaskacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('KEWEENAW',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/keweenawcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('LAKE',			'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/lakecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('LEELANAU',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/leelanaucountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('LUCE',			'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/lucecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MACKINAC',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/mackinaccountyichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MANISTEE',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/manisteecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MASON',		'ES & S',	'Yellow', 	'https://www.census.gov/quickfacts/fact/table/masoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MECOSTA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/mecostacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MENOMINEE',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/menomineecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MIDLAND',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/midlandcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MISSAUKEE',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/missaukeecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MONTCALM',		'Hart', 	'Yellow', 	'https://www.census.gov/quickfacts/fact/table/montcalmcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('MONTMORENCY',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/montmorencycountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('NEWAYGO',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/newaygocountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OCEANA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/oceanacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OGEMAW',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/ogemawcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ONTONAGON',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/ontonagoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OSCEOLA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/osceolacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OSCODA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/oscodacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('OTSEGO',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/otsegocountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('PRESQUE ISLE',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/presqueislecountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ROSCOMMON',	'ES & S',	'Yellow', 	'https://www.census.gov/quickfacts/fact/table/roscommoncountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('SANILAC',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/sanilaccountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('SCHOOLCRAFT',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/schoolcraftcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('ST JOSEPH',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/stjosephcountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('TUSCOLA',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/tuscolacountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('VAN BUREN',	'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/vanburencountymichigan');
INSERT INTO COUNTY_SUMMARY_REF(COUNTY_NAME, VOTING_SYSTEM, KESHEL_HEATMAP_COLOR, CENSUS_URL) values('WEXFORD',		'Dominion', 'Yellow', 	'https://www.census.gov/quickfacts/fact/table/wexfordcountymichigan');

