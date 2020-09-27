module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/v1/api' }
      },
      '^/assets': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/assets': '/' }
      }
    }
  }
}
