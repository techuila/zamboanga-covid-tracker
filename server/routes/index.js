module.exports = props => {
  const { app } = props
  // Declare routes on router 
  app.use('/auth', require('./auth')(props))
  app.use('/users', require('./users')(props))
  app.use('/patients', require('./patients')(props))
  app.use('/', (req, res) => res.send('Server is alive...'))

  // return app
}