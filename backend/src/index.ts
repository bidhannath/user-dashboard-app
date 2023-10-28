import http from 'http';
import app from './app';
import config from './config/config';
import logger from './config/logger';
import { sequelize } from './db/sequelize';
import firebase from 'firebase/compat/app';
import * as admin from 'firebase-admin';
import 'firebase/compat/auth';
import firebaseConfig from './config/firebase';
import serviceAccount from './config/firebaseAdmin';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAdminAuth = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}).auth();

async function initializeDatabase() {
  try {
    await sequelize.authenticate(); // Test the database connection
    await sequelize.sync({alter: true}); // Synchronize the models with the database
    logger.info('Database connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
}

initializeDatabase();

const httpServer = http.createServer(app);

let server: any = httpServer.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: any) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

export { firebaseApp, firebaseAdminAuth }