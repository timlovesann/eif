module.exports = app => {
    const db = require('../queries/individual-audit-queries');
    app.get('/api/voter-summary/:county_name/:zip_code/:last_name/:first_name/:year_of_birth', db.getVoter);
    app.get('/api/voter-history/:id', db.getVoterHistory);
}