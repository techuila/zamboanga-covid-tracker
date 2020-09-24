const express = require('express'),
      MongoClient = require('mongodb').MongoClient,
      client = require('socket.io').listen(4000).sockets,
      auth = require('./middleware/auth'),
      PORT = process.env.PORT || 8082,
      app = express(),
      path = require('path')

require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connection URL
const db_url = 'mongodb://localhost:27017'

MongoClient.connect(db_url, { useUnifiedTopology: true }, (err, db) => { 
  if (err)  throw err

  console.log(`MongoDB: Connected to database...`)

  // Initialize routes and pass params (router, database, socket)
  require('./routes')({app, database: db.db('covidtracker'), client, auth})
  // app.use('/users', require('./routes/users')({ app, router: express.Router(), database: db.db('covidtracker'), client, auth }))
  // app.use('/patients', require('./routes/patients')({ app, router: express.Router(), database: db.db('covidtracker'), client, auth }))
  // app.use('/', (req, res) => res.send('Server is alive...'))

})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });
}

app.listen(PORT, () => { 
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`) 
})