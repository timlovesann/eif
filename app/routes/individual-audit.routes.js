module.exports = app => {
    const db = require('../queries/individual-audit-queries');
    app.get('/api/voter/:id', db.getVoterById);
    app.get('/api/votinghistory/:qvf/:id', db.getVoterHistoryById);
}