const db = require('../queries/download-queries');
const config = require("../config/auth.config");
const fileconfig = require("../config/file.config");
var path = require('path');
var mime = require('mime');
var fs = require('fs');

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

exports.getOldestPendingDownloadRequest = (next) => {
    db.getOldestPendingDownloadRequest(function(result) {
        if(result && result.length > 0) {
            next(result[0]);
        } else {
            console.log("No work to do. Shutting down.");
            process.exit(1);
        }
    });
}

exports.generateQvf = (req) => {
    db.generateQVFWithHistory(req.request_id, req.qvf, req.county_name, req.jurisdiction_name, function(result) { 
        console.log(result);
        db.updateDownloadRequestStatus(req.request_id, result, function(){
            console.log("Status updated for: request_id --> " + req.request_id + " : " + result);
        });
    });
}

exports.downloadFile = (request, response) => {
    const request_id = request.body.request_id;
    const qvf = request.body.qvf;
    const county_name = request.body.county_name.replace(/\s/g, '-');
    const jurisdiction_name = request.body.jurisdiction_name.replace(/\s/g, '-');

    var file = fileconfig.downloadfolder + request_id + "_" + qvf + "_" + county_name + "_" + jurisdiction_name + ".csv";    
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);
    response.setHeader('Content-disposition', 'attachment; filename=' + filename);
    response.setHeader('Content-type', mimetype);
  
    var filestream = fs.createReadStream(file);
    filestream.pipe(response);
    filestream.on("error", (e) => {
        filestream.close();
        console.log("Error" + e);        
    });
    filestream.on("finish", () => {
        filestream.close();
        console.log("Download completed");        
    });    
}