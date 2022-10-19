select 
            sum(CASE upper(g.type) WHEN 'EMPTY LOT' THEN 1 ELSE 0 END) as EMPTY_LOT_COUNT, 
            sum(CASE upper(g.type) WHEN 'BUSINESS' THEN 1 ELSE 0 END) as BSN_COUNT, 
            sum(CASE upper(g.type) WHEN 'UPS' THEN 1 ELSE 0 END) as UPS_COUNT, 
            sum(CASE upper(g.type) WHEN 'CHURCH' THEN (CASE WHEN g.REG_QTY_2022_09 > 5 THEN 1 ELSE 0 end) ELSE 0 END) as CRC_HIGH_REG_COUNT, 
            sum(CASE upper(g.type) WHEN 'RESIDENTIAL' THEN (CASE WHEN g.REG_QTY_2022_09 > 9 THEN 1 ELSE 0 end) ELSE 0 END) as RES_HIGH_REG_COUNT, 
            sum(CASE when upper(g.type) IN ('MEMORY/DEMENTIA CARE', 'OTHER', 'HOTEL', 'NURSING/GROUP HOME') THEN 1 ELSE 0 END) as MISC_INV_COUNT, 
            sum(CASE when upper(g.type) IN ('PRISON', 'RV PARK-SEASONAL', 'VIRTUALMAILBOX', 'CAMPS-SEASONAL', 'RV PARK-SEASONAL') THEN 1 ELSE 0 END) as MISC_LAW_COUNT, 
            sum(CASE WHEN (AV.LOCATION_HASH = ZIP.LOCATION_HASH) THEN 1 ELSE 0 END) as USPS_COUNT 
        from AV_20221108_20221011 AV 
        left join ghostbuster g on g.location_hash = AV.location_hash
        left join ZIPCODES_USA ZIP on ZIP.LOCATION_HASH = AV.LOCATION_HASH
        left join NCOA_202203 NCOA ON NCOA.VOTER_IDENTIFICATION_NUMBER = AV.VOTERID;