'use strict';
const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8082;
const app = express();
require('dotenv').config();

// Cors
app.use(cors());
// BodyparserMiddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.get('/', (req, res) => {
  // res.send('Database is alive');
// });
// app.use(formidable())

// Set up routes
app.use('/api/patients', require('./routes/patients'));
app.use('/api/logs', require('./routes/logs'));

app.get('/assets/geojson.json', (req, res) => {
  res.sendFile(path.resolve(__dirname, './scripts/geojson.json'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/dist')))
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  });
}

// Assign port
app.listen(port, () =>
  console.log(`Running on port ${port} in ${process.env.NODE_ENV} mode`)
);
