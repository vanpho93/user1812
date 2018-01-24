const express = require('express');
const reload = require('reload');
const upload = require('./uploadConfig');
const { hash, compare } = require('bcrypt');
const User = require('./models/user.model');

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
        const { name, email, password, phone } = req.body;
        const avatar = req.file ? req.file.filename : 'default.png';
        User.signUp(email, password, name, phone, avatar)
        .then(user => res.send('Dang ky thanh cong'))
        .catch(err => res.send('Dang ky that bai'));
    });
});

app.post('/dangnhap', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(() => res.send('Dang nhap thanh cong.'))
    .catch(err => res.send('Dang nhap that bai.'));
});

app.listen(3000, () => console.log('Server started!'));
