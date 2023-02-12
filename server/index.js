const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
// Configuration
const PORT = 3000;
const HOST = 'localhost';
app.use(cors());
app.use(morgan('dev'));
app.set('etag', false);
app.get('/hello', (req, res, _next) => {
  res.send('Alive');
});
app.get('/proxy', (req, res, _next) => {
  const { route } = req.query;
  try {
    axios.get(route).then((response) => {
      res.send(response.data);
    }).catch((e) => {
      console.log(e);
    });
  } catch (e) {
    console.log(e);
  }
});
app.options('/proxy', cors());
app.post('/proxy', cors(), (req, res, _next) => {
  try {
    const { route } = req.query;
    axios
      .post(route)
      .then((response) => {
        res.send(response.data);
      })
      .catch(console.log);
  } catch (err) {
    console.log('ERROR on Proxy Post Request', err.message);
  }
});
app.post(
  '/login',
  createProxyMiddleware({
    target: 'https://id.maiar.com/api/v1',
    changeOrigin: true,
  }),
);
app.post(
  '/login/access-token-generate',
  createProxyMiddleware({
    target: 'https://id.maiar.com/api/v1',
    changeOrigin: true,
  }),
);
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
