const controller = require('./app/controllers/download.controller');

const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();

const date = require('date-and-time');
const { request } = require('express');

rule.second = 17;

const job = schedule.scheduleJob(rule, function(){   
    controller.getOldestPendingDownloadRequest(function(result) {
        console.log(date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + "Request_id: " + result.request_id + "qvf: " + result.qvf + " :: county_name: " + result.county_name + " :: jurisdiction_name: " + result.jurisdiction_name);
        if(result.jurisdiction_name) {
            controller.generateQvfForJurisdiction(result);
        } else {
            controller.generateQvfForCounty(result);
        }
    });
});

job.invoke();