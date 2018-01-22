const express = require('express');
const reload = require('reload');
const upload = require('./uploadConfig');
const { hash } = require('bcrypt');
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
        hash(password, 8)
        .then(encryted => {
            const user = new User({
                name,
                email,
                password: encryted,
                phone,
                avatar
            });
            return user.save();
        })
        .then(() => res.send('Dang ky thanh cong'))
        .catch(() => res.send('Dang ky that bai'));
    });
});

app.post('/dangnhap', parser, (req, res) => {
});

app.listen(3000, () => console.log('Server started!'));
