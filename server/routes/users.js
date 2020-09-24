const express = require('express')
const router = express.Router()

module.exports = ({ database, client, auth }) => {
  let users = database.collection('users')

  router.get('/', auth, async (req, res) => {
    console.log('users')
    res.send(await users.find().toArray())
  })

  router.post('/', auth, (req, res) => {
    users.insert(req.body, () => {
      client.emit('output', req.body)
    })
  })
  
  return router
}