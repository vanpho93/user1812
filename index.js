const express = require('express');
const reload = require('reload');
const upload = require('./uploadConfig');

const parser = require('body-parser').urlencoded({ extended: false });

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
reload(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/dangky', (req, res) => {
    res.render('dangky');
});

app.get('/dangnhap', (req, res) => {
    res.render('dangnhap');
});

app.post('/dangky', (req, res) => {
    upload.single('avatar')(req, res, err => {
    });
});

app.post('/dangnhap', parser, (req, res) => {
});

app.listen(3000, () => console.log('Server started!'));
