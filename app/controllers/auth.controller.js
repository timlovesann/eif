const db = require("../models");
const date = require('date-and-time');
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username.toLowerCase(),
    email: req.body.email.toLowerCase(),
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully. Next, your admin needs to approve your account before you can login successfully." });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully. Next, your admin needs to approve your account before you can login successfully." });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {  
  User.findOne({
    where: {
      username: req.body.username.toLowerCase()
    }
  })
    .then(user => {
      if (!user) {
        console.log(date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " :: signin attempt by: " + req.body.username + " :: IP: " + " FAILED (User not found)");
        //return res.status(404).send({ message: "Login failed. Please check your credentials. ¯\_(ツ)_/¯" });
        return res.status(404).send({ message: "User not found. " });
      }
      if(!user.isActive) {
        console.log(date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " :: signin attempt by: " + req.body.username + " :: IP: " + " FAILED (User inactive)");
        return res.status(400).send({ message: "User Not Activated. Admin has been notified to approve your access. You'll be notified via email at " + user.email + " when account has been activated." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        console.log(date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " :: signin attempt by: " + req.body.username + " :: IP: " + " FAILED (password invalid)");
        return res.status(401).send({          
          accessToken: null,
          //message: "Login failed. Please check your credentials. ¯\_(ツ)_/¯"
          message: "Login failed. Please check your credentials. "
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        console.log(date.format((new Date()),'YYYY/MM/DD HH:mm:ss') + " :: signin attempt by: " + req.body.username + " :: IP: " + " SUCCESS");
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
