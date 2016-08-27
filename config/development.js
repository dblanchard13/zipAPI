module.exports = {
  loggingOff: false,
  db: {
    name: 'zip_code_db',
    user: '',
    password: '',
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
