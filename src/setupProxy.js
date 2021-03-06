const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/loans/marketplace',
    createProxyMiddleware({
      target: 'https://api.zonky.cz',
      secure: false,
      changeOrigin: true,
    })
  );
};
