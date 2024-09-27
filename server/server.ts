import express from 'express';
const app = express();
import path from 'path';
// import controller from './controller';
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*.css', (req, res, next) => {
  res.setHeader('Content-Type', 'text/css');
  next();
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export { app as default };
