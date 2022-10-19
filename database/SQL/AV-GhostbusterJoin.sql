-- Version 20221019_01
SELECT * FROM ( 
                select 
                concat_ws('; ', 
                   nullif(CASE upper(g.type) WHEN 'EMPTY LOT' THEN '003_EMPTY_LOT' ELSE null END, ''), 
                   nullif(CASE upper(g.type) WHEN 'BUSINESS' THEN '003_BSN' ELSE null END, ''), 
                   nullif(CASE upper(g.type) WHEN 'UPS' THEN '003_UPS' ELSE null END, ''), 
                   nullif(CASE upper(g.type) WHEN 'CHURCH' THEN (CASE WHEN g.REG_QTY_2022_09 > 5 THEN '002_CRC_HIGH_REG' ELSE null end) ELSE null END, ''), 
                   nullif(CASE upper(g.type) WHEN 'RESIDENTIAL' THEN (CASE WHEN g.REG_QTY_2022_09 > 8 THEN '002_RES_HIGH_REG' ELSE null end) ELSE null END, ''), 
                   nullif(CASE WHEN (upper(g.type) = 'HOTEL') THEN '003_MISC_INV' ELSE null END, ''), 
                   nullif(CASE WHEN (upper(g.type) = 'MEMORY/DEMENTIA CARE') THEN '003_MISC_INV' ELSE null END, ''), 
                   nullif(CASE WHEN (upper(g.type) = 'NURSING/GROUP HOME') THEN '003_MISC_INV' ELSE null END, ''), 
                   nullif(CASE WHEN (upper(g.type) = 'OTHER') THEN '003_MISC_INV' ELSE null END, ''), 
                   nullif(CASE WHEN (upper(g.type) = 'PRISON') THEN '003_MISC_LAW' ELSE null END, ''),  
                   nullif(CASE WHEN (upper(g.type) = 'RV PARK-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''),  
                   nullif(CASE WHEN (upper(g.type) = 'VIRTUALMAILBOX') THEN '003_MISC_LAW' ELSE null END, ''),  
                   nullif(CASE WHEN (upper(g.type) = 'CAMPS-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''),  
                   nullif(CASE WHEN (upper(g.type) = 'RV PARK-SEASONAL') THEN '003_MISC_LAW' ELSE null END, ''),   
                   nullif(CASE WHEN (AV.LOCATION_HASH = ZIP.LOCATION_HASH) THEN '003_USPS' ELSE NULL END, '') 
                 ) as challenge_codes, 
                NCOA.NCOA_MOVE_DATE, NCOA.NCOA_MOVE_TYPE, 
                CONCAT_WS(' ', NULLIF(NCOA.NCOA_ADDRESS, ''), NULLIF(NCOA.NCOA_CITY, ''), NULLIF(NCOA.NCOA_STATE, ''), NULLIF(NCOA.NCOA_ZIP_CODE_PLUS4, ''), NULLIF(NCOA.NCOA_COUNTY_NAME, '')) AS NCOA_MOVED_TO_ADDRESS,
                NCOA.NCOA_DELIVERY_POINT, NCOA.NCOA_RETURN_CODE, NCOA.NCOA_FOOTNOTE,  
                g.name, 
                g.type, 
                g.street_number, 
                g.street_name, 
                g.street_type, 
                av.location_hash
                from AV_20221108_20221011 AV 
                join ghostbuster g on g.location_hash = AV.location_hash 
                left join NCOA_COMBINED NCOA ON NCOA.VOTER_IDENTIFICATION_NUMBER = AV.VOTERID 
                left join ZIPCODES_USA ZIP on ZIP.LOCATION_HASH = AV.LOCATION_HASH 
                where g.type != 'APT_LOT?' 
) as list where challenge_codes is not null and challenge_codes != '';
