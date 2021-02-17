const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ["/auth" ,"/auth/logout" ,"/delete","/add","/auth/current_user" ,"/"  ],
    createProxyMiddleware({
      target: "https://www.reddit.com" ,
    })
  );
};
 
 