const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  const requestAddress = `${req.ip}:${req.socket.localPort}`;
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${requestAddress}`);
  next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/resources', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources.html'));
});

app.post('/submit-contact-form', (req, res) => {
  console.log(req.body);
  res.send('Received your message! We will get back to you soon.');
});

const HOST = '0.0.0.0'; 
const PORT = 80; 
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});