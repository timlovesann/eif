module.exports = {
  HOST: "127.0.0.1",
  USER: "",
  PASSWORD: "",
  DATABASE: "",
  //PASSWORD: "",
  //DATABASE: "",
  PORT: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};