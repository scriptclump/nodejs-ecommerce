module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "@123",
    DB: "nd_ecommerce",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // Time in milliseconds
      idle: 10000 // Time in milliseconds
    }
};