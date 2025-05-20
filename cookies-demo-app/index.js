const express = require('express');
const app = express();
// npm i cookie-parser
const cookieParser = require('cookie-parser'); 

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name'} = req.cookies;
    res.send(`Hey there, ${name}!`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Henrietta');
    res.cookie('font-family', 'Helvetica');
    res.cookie('background-color', 'fff');
    res.send('Ok, sent you a cookie!');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('Ok, signed your fruit cookie.');
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('Serving on port 3000 (Cookies)');
})