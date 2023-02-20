const {createProxyMiddleware} = require('http-proxy-middleware');
if (process.env.NODE_ENV === 'development') {
    module.exports = function (app) {
        app.use(
            ['/api'],
            createProxyMiddleware({
                changeOrigin: true,
                target: 'http://localhost:8080/',
                router: {
                    'localhost:3000': 'http://localhost:8080/',
                },
            })
        );
    };
}