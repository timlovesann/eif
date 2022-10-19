drop table if exists qvf_history_dump_20201103;
CREATE TABLE qvf_history_dump_20201103
(
/* add columns to denote AVF snapshot date to trace where records came from */
    VOTER_IDENTIFICATION_NUMBER BIGINT,		
    COUNTY_NAME VARCHAR,
    JURISDICTION_NAME VARCHAR,
    ELECTION_DATE DATE NOT NULL,
    IS_ABSENTEE_VOTER VARCHAR
);
insert into qvf_history_dump_20201103 (select * from qvf_20201101_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20201201_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20210101_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20210401_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20211001_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20211201_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20220101_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20220201_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20220301_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20220401_vh where election_date = '2020-11-03');
insert into qvf_history_dump_20201103 (select * from qvf_20220501_vh where election_date = '2020-11-03');

with history_counts as (
	select 
		voter_identification_number, 
		election_date, 
		count(election_date) AS election_record_count,
		sum(case when is_absentee_voter = 'Y' then 1 else 0 end) as absentee_vote_count
	from QVF_HISTORY_DUMP_20201103
	group by 
		voter_identification_number, 
		election_date
), flipped_absentee_voters as (
	select
		voter_identification_number,
		election_date,
		election_record_count,
		absentee_vote_count
	from	
		history_counts
	where 
		absentee_vote_count not in (0, election_record_count)
)
select *
from flipped_absentee_voters;