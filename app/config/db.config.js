module.exports = {
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_NAME,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: process.env.DB_POOL_MAX  | 0,
      min: process.env.DB_POOL_Min | 0,
      acquire: process.env.DB_POOL_ACQUIRE | 0, // Time in milliseconds
      idle: process.env.DB_POOL_IDLE | 0 // Time in milliseconds
    }
}