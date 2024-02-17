const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

// mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
//     .then(() => {
//         console.log('Mongo connection open.')
//     })
//     .catch(err => {
//         console.log(err => {
//             console.log('Oh no, mongo connection error.')
//             console.log(err)
//         })
//     })

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Serving app on localhost 3000');
})