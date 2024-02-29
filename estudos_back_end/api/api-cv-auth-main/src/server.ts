/* eslint-disable no-console */
/* eslint-disable import/first */

import { config } from 'dotenv';

config();
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { collectDefaultMetrics, register } from 'prom-client';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import dbConfig from './config/database';
import routes from './routes';

const PORT = process.env.PORT || 8000;
const app = express();
// let middleware;

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

// grafana config
collectDefaultMetrics();

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

app.use(routes);

createConnection(dbConfig)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  })
  .catch((err) => {
    console.log('Unable to connect to db', err);
    process.exit(1);
  });

app.get('/', (request, response) => response.json({ message: 'API CV Authentication' }));

// if (process.env.NODE_ENV === 'production' && middleware) {
//   app.use(middleware.errorHandler);
// }
