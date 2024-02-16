const express = require('express');
const app = express();
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/secret', (req, res) => {
    res.send("This is a secret. You can't see me unless you are logged in.");
})

app.listen(3000, () => {
    console.log('Serving your app.');
})