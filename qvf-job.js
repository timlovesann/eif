const controller = require('./app/controllers/download.controller');

const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.second = 16;

const job = schedule.scheduleJob(rule, function(){    
    controller.getOldestPendingDownloadRequest();
});

job.invoke();