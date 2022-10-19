-- Table: public.qvf_voters_cancelled

-- DROP TABLE IF EXISTS public.qvf_voters_cancelled;

CREATE TABLE IF NOT EXISTS public.qvf_voters_cancelled
(
    last_name character varying COLLATE pg_catalog."default",
    first_name character varying COLLATE pg_catalog."default",
    middle_name character varying COLLATE pg_catalog."default",
    name_suffix character varying COLLATE pg_catalog."default",
    year_of_birth integer,
    gender character varying COLLATE pg_catalog."default",
    registration_date date,
    street_number_prefix character varying COLLATE pg_catalog."default",
    street_number character varying COLLATE pg_catalog."default",
    street_number_suffix character varying COLLATE pg_catalog."default",
    direction_prefix character varying COLLATE pg_catalog."default",
    street_name character varying COLLATE pg_catalog."default",
    street_type character varying COLLATE pg_catalog."default",
    direction_suffix character varying COLLATE pg_catalog."default",
    extension character varying COLLATE pg_catalog."default",
    city character varying COLLATE pg_catalog."default",
    state character varying COLLATE pg_catalog."default",
    zip_code integer,
    mailing_address_line_one character varying COLLATE pg_catalog."default",
    mailing_address_line_two character varying COLLATE pg_catalog."default",
    mailing_address_line_three character varying COLLATE pg_catalog."default",
    voter_identification_number bigint,
    county_name character varying COLLATE pg_catalog."default",
    jurisdiction_name character varying COLLATE pg_catalog."default",
    precinct character varying COLLATE pg_catalog."default",
    ward character varying COLLATE pg_catalog."default",
    is_permanent_absentee_voter character varying COLLATE pg_catalog."default",
    voter_status_type_code character varying COLLATE pg_catalog."default",
    uocava_status_code character varying COLLATE pg_catalog."default",
    uocava_status_name character varying COLLATE pg_catalog."default",
    qvf_date date,
    location_hash character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.qvf_voters_cancelled
    OWNER to postgres;