const express = require('express')
const router = express.Router()

module.exports = ({ database, auth }) => {
  const patients = database.collection('patients')

  router.get('/', auth, async (req, res) => {
    res.send(await patients.find().toArray((err, res) => {
      if (err)  throw err
      console.log('patients')
      database.close()
    }))
  })

  router.post('/', auth, async (req, res) => {
    await patients.insertOne(req.body, (err, res) => {
      if (err)  throw err

      database.close()
    })
  })

  return router
}