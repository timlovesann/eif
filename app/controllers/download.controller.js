const db = require('../queries/download-queries');
const config = require("../config/auth.config");

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

exports.insertDownloadRequest = (request, response) => {
    const token = request.headers["x-access-token"];
    const qvf = request.body.qvf;
    const county_name = request.body.county_name;
    const jurisdiction_name = request.body.jurisdiction_name;
    var parsedJwt = parseJwt(token);
    db.insertDownloadRequest(parsedJwt.id, qvf, county_name, jurisdiction_name, function(result) {
        response.status(200).json(result[0]);
    });
}

exports.getDownloadRequestsForUser = (request, response) => {
    const parsedJwt = parseJwt(request.headers["x-access-token"]);
    db.getDownloadRequestsForUser(parsedJwt.id, function(results) {
        response.status(200).json(results);
    });
}