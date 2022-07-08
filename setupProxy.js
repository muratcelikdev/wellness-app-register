const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: '', // url will be here
      changeOrigin: true,
    })
  );
};
