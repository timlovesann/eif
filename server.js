const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const path = __dirname + '/app/views/';

app.use(express.static(path));
// For local development server to call hosted api
var corsOptions = {
  origin: "http://localhost:8080"
};
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true,}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require('./app/routes/auth/auth.routes')(app);
require('./app/routes/auth/user.routes')(app);

require("./app/routes/common.routes")(app);
require("./app/routes/ghostbuster.routes")(app);
require("./app/routes/individual-audit.routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
});