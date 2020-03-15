module.exports = {
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_NAME,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: process.env.DB_POOL_MAX,
      min: process.env.DB_POOL_Min,
      acquire: process.env.DB_POOL_ACQUIRE, // Time in milliseconds
      idle: process.env.DB_POOL_IDLE // Time in milliseconds
    }
};