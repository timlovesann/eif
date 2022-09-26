const controller = require('./app/controllers/download.controller');

const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();

const date = require('date-and-time');

rule.second = 16;

const job = schedule.scheduleJob(rule, function(){   
    console.log(date.format((new Date()),'YYYY/MM/DD HH:mm:ss')); 
    controller.getOldestPendingDownloadRequest(function(result) {
        console.log(result.request_id);
        console.log("qvf: " + result.qvf);
        console.log("county_name: " + result.county_name);
        console.log("jurisdiction_name: " + result.jurisdiction_name);
        controller.generateQvf(result);        
    });
});

job.invoke();