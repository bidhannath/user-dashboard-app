import * as dotenv from 'dotenv';
import * as path from 'path';
import * as Joi from 'joi';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'staging', 'development', 'test').required(),
    PORT: Joi.number().default(4000),
    DB_USER: Joi.string().required().description('DB User'),
    DB_NAME: Joi.string().required().description('DB Name'),
    DB_PASS: Joi.string().required().description('DB Password'),
    DB_HOST: Joi.string().required().description('DB Host'),
    FIREBASE_API_KEY: Joi.string().required().description('Firebase API Key'),
    FIREBASE_AUTH_DOMAIN: Joi.string().required().description('Firebase Auth Domain'),
    FIREBASE_PROJECT_ID: Joi.string().required().description('Firebase Project Id'),
    FIREBASE_SENDER_ID: Joi.string().required().description('Firebase Sender Id'),
    FIREBASE_APP_ID: Joi.string().required().description('Firebase App Id'),
    FIREBASE_PRIVATE_KEY: Joi.string().required().description('Firebase Private Key'),
    FIREBASE_PRIVATE_KEY_ID: Joi.string().required().description('Firebase Private Key Id'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  postgres: {
    user: envVars.DB_USER,
    name: envVars.DB_NAME,
    password: envVars.DB_PASS,
    host: envVars.DB_HOST,
  },
  firebase: {
    apiKey: envVars.FIREBASE_API_KEY,
    authDomain: envVars.FIREBASE_AUTH_DOMAIN,
    projectId: envVars.FIREBASE_PROJECT_ID,
    senderId: envVars.FIREBASE_SENDER_ID,
    appId: envVars.FIREBASE_APP_ID,
    privateKey: envVars.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    privateKeyId: envVars.FIREBASE_PRIVATE_KEY_ID,
  },
};
