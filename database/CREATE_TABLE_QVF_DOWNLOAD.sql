DROP TABLE QVF_DOWNLOAD_REQUESTS;
CREATE TABLE QVF_DOWNLOAD_REQUESTS
(
	REQUEST_ID INTEGER GENERATED ALWAYS AS IDENTITY,
	REQUESTED_BY integer not null,
	QVF varchar not null,
	COUNTY_NAME varchar not null,
	JURISDICTION_NAME varchar not null,
	STATUS varchar not null,
	CREATED_AT TIMESTAMP DEFAULT NOW() not null
	
);
