const express = require('express');
const cookieParser = require('cookie-parser');
const { sign, verify } = require('./jwt');

const app = express();
app.use(cookieParser());

app.get('/xemphim', (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send('Ban phai mua ve.');
    verify(token)
    .then(() => res.send('Moi xem phim.'))
    .catch(() => res.send('Ban phai mua ve.'));
});

app.get('/muave', (req, res) => {
    sign({ daMuaVe: true })
    .then(token => {
        res.cookie('token', token).send('Ban da mua ve.');
    });
});

app.listen(3000, () => console.log('Server started!'));
