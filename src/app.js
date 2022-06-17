const path = require('path');
const express = require('express');
const app = express()
app.listen(process.env.PORT || 2020, () => console.log('Abriendo el servidor'))
app.use(express.static('public'))
path.resolve(__dirname, 'public')
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views/home.html')))
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views/register.html')))
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views/login.html')))