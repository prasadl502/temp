const express = require('express');
const app = express()
const PORT = 3001
const custom = process.env.CUSTOM || 'custom'

let iCount = 0;

app.get('/', (req, res) => {
  res.send(`Hello from App Server`)
});

app.post('/clouflareTrial', (req, res) => {
  console.log("Hit count : " + iCount);
  iCount++;
  res.set('x-custom-response', 'cloudflareTrialEndpoint');
  res.send({
    "x-custom-body": "custom_request_body",
    'response': 'Hello post',
  });
});


app.post('/clouflareTrial2', (req, res) => {
  console.log("Hit count : " + iCount);
  iCount++;
  res.set('x-custom-response', 'cloudflareTrialEndpoint2');
  res.send({
    "x-custom-body": "custom_request_body",
    'response': 'Hello post',
  });
});


app.listen(PORT, () => {
console.log(`app running on http://localhost:${PORT}`)});
