const db = require("../app/models");
const Role = db.role;

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync()
  .then(() => {
    console.log('Drop and Resync Database');    
    initial();
  }).catch((err) => {
    console.log(err);
  });

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "data-curator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}  
