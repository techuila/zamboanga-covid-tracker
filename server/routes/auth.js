const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'), 'utf8')

module.exports = ({ database, auth }) => {
  let users = database.collection('users'),
      error_msg = 'Incorrect username / password!',
      server_error = 'Server Error'

  router.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    users.findOne({ 
      $or: [
        { username }, 
        { email: username }
      ]
    }, (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      }

      if (result) {
        comparePassword(password, result, res)
      } else {
        res.status(404).send(error_msg)
      }
    })
  })

  function comparePassword(password, user, res) {
    bcrypt.compare(password, user.password, (err, match) => {
      if(!match) {
        res.status(400).send(error_msg)
      }

      const issuer  = 'Covid Tracker'
      const subject  = 'axlcuyugan05@gmail.com'
      const audience  = process.env.NODE_ENV
      const userPayload = {
          id: user.id,
          email: user.email
      }

      const signOptions = {
          issuer,
          subject,
          audience,
          expiresIn:  "10h",
          algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
      };

      // Sign in JWT
      try {
        const token = jwt.sign(userPayload, privateKey, signOptions)

        res.send({
          token,
          user: {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            username: user.username,
          }
        })
      } catch (error) {
        
        console.log(error)
        res.status(500).send(server_error)
      }
    })
  }

  return router
}