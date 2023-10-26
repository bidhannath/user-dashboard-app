import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import httpStatus from 'http-status';
import config from './config/config';
import morgan from './config/morgan';
import { authLimiter } from './middlewares/rateLimiter';
import { applyRoutes } from './routes/v1';
import { errorConverter, errorHandler } from './middlewares/error';
import ApiError from './utils/ApiError';

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());


// limit repeated failed requests to auth endpoints
// if (config.env === 'production') {
//   app.use('/v1/auth', authLimiter);
// }
app.use('/v1/auth', authLimiter);

app.get('/', (req, res) => {
  res.json({message: 'Hello! Welcone to User Dashboard App'});
});

app.get('/v1/health', (req, res) => {
  res.status(200).json({uptime: process.uptime(), status: 'OK'});
});

// v1 api routes
app.use('/v1', applyRoutes(express.Router()));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
