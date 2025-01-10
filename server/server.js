import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './database.js';

const app = express();
app.use(morgan('tiny'));
app.use(
  cors({
    origin: '*',
  })
);

// Connect to database
sequelize.sync().then(() => {
  // Connect to server
  app.listen(process.env.HOST_PORT || 5000, () => {
    console.log(`server is running on ${process.env.HOST_PORT || 5000}!`);
  });
});
