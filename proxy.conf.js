const proxyConfig = {
  '/echo': {
    target: 'https://reqbin.com',
    secure: true,
    changeOrigin: true,
    logLevel: 'debug',
  },
};

module.exports = proxyConfig;
