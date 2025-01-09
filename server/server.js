import express from 'express';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

app.use('/', (req, res) => {
  res.send({ test: 'hi' });
});

app.get('/api', (req, res) => {
  res.send({ test: 'hi' });
});

app.listen(5000, () => {
  console.log('server is running on 5000!');
});
