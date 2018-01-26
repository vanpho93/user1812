const express = require('express');
const reload = require('reload');
const session = require('express-session');
const upload = require('./uploadConfig');
const { hash, compare } = require('bcrypt');
const User = require('./models/user.model');

const parser = require('body-parser').urlencoded({ extended: false });

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(session({
    secret: 'af4y3q94sn232f',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000000 },
    rolling: true
}));

reload(app);

app.get('/', (req, res) => {
    const { _id } = req.session;
    if (!_id) return res.redirect('/dangnhap');
    User.findById(_id)
    .then(user => res.render('home', { user }))
    .catch(err => res.send(err));
});

app.post('/dangnhap', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(user => {
        // req.session.daDangNhap = true;
        req.session._id = user._id;
        res.redirect('/');
    })
    .catch(err => res.send('Dang nhap that bai.'));
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

app.listen(3000, () => console.log('Server started!'));
