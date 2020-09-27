const Sequelize = require('sequelize');

require('dotenv').config();
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'maintainance':
  case 'production':
    sequelize = new Sequelize('exactplace2', 'exact', '2GrD7M7KKPZCkCA6', {
      dialect: 'mysql',
      host: 'exactconstruct.synology.me',
      port: 3307,
      retry: {
        match: [
          /ETIMEDOUT/,
          /EHOSTUNREACH/,
          /ECONNRESET/,
          /ECONNREFUSED/,
          /ETIMEDOUT/,
          /ESOCKETTIMEDOUT/,
          /EHOSTUNREACH/,
          /EPIPE/,
          /EAI_AGAIN/,
          /SequelizeConnectionError/,
          /SequelizeConnectionRefusedError/,
          /SequelizeHostNotFoundError/,
          /SequelizeHostNotReachableError/,
          /SequelizeInvalidConnectionError/,
          /SequelizeConnectionTimedOutError/,
        ],
        max: 5,
      },
      logging: false,
    });
    break;

  case 'development':
    sequelize = new Sequelize('covid_tracker', 'root', '', {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      retry: {
        match: [
          /ETIMEDOUT/,
          /EHOSTUNREACH/,
          /ECONNRESET/,
          /ECONNREFUSED/,
          /ETIMEDOUT/,
          /ESOCKETTIMEDOUT/,
          /EHOSTUNREACH/,
          /EPIPE/,
          /EAI_AGAIN/,
          /SequelizeConnectionError/,
          /SequelizeConnectionRefusedError/,
          /SequelizeHostNotFoundError/,
          /SequelizeHostNotReachableError/,
          /SequelizeInvalidConnectionError/,
          /SequelizeConnectionTimedOutError/,
        ],
        max: 5,
      },
      logging: false,
    });
}

const models = {
  Patient: require('./a_covid_patients')(sequelize, Sequelize),
  PatientLog: require('./a_covid_patient_logs')(sequelize, Sequelize),
};

/* Create association (relations) */
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.upsert = require('../utils/upsert');

module.exports = models;
