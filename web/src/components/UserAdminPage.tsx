import React from 'react';

export const UserAdminPage = () => (
  <>
    <h1>Admin Zone</h1>
    <h2>Queries</h2>
    <p>
      select ed.election_date,  v.county_name, v.zip_code, v.last_name, v.first_name, v.year_of_birth,
        case vh.is_absentee_voter when 'Y' then 'Absentee' else (case vh.is_absentee_voter when 'N' then 'In person' else 'Did Not Vote' end) end
      from election_dates ed
      left outer join qvf_20221001_vh vh on vh.election_date = ed.election_date and vh.voter_identification_number = 4001703051
      left join qvf_20221001_v v on v.voter_identification_number = vh.voter_identification_number
      order by ed.election_date desc;      
    </p>
  </>
)

export default UserAdminPage;