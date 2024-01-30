const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/ip-api",
    createProxyMiddleware({
      target: "https://ip-api.com",
      changeOrigin: true,
      pathRewrite: {
        "^/ip-api": "", // remove the '/ip-api' path to avoid issues
      },
    })
  );
};
