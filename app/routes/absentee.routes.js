const db = require('./queries');

app.get('/api/counties-from-absentee-file', db.getCountiesFromAbsenteeFile);
app.get('/api/absentee-by-id/:id', db.getAbsenteeRecordById);
app.get('/api/absentee-by-county/:county', db.getAbsenteeRecordByCounty);
