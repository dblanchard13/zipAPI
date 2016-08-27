module.exports = {
  loggingOff: false,
  db: {
    name: process.env.ZIP_DB_NAME,
    user: process.env.ZIP_DB_USER,
    password: process.env.ZIP_DB_PASS,
    host: process.env.ZIP_DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    port: '5432',
    protocol: 'ssl',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
