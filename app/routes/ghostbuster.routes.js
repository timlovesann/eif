const { authJwt } = require("../middleware");

module.exports = app => {
    const db = require('../queries/ghostbuster-queries');

    app.get('/api/ghostbuster-summary/:county_name', [authJwt.verifyToken], db.getGhostbusterCountySummary);
    app.get('/api/ghostbuster-locations/:county_name', [authJwt.verifyToken], db.getGhostbustersByCounty);
    app.get('/api/challenge-list/:county_name/:jurisdiction_name/:precinct_name', [authJwt.verifyToken], db.getChallengeListByPrecinct);
    app.get('/api/challenge-list/:county_name/:jurisdiction_name', [authJwt.verifyToken], db.getChallengeListByJurisdiction);
}