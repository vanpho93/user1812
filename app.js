const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'af4y3q94sn232f',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000000 },
    rolling: true
}));

app.get('/xemphim', (req, res) => {
    // console.log(req.session.daMuaVe);
    if (req.session.daMuaVe) return res.send('Moi xem phim.');
    res.send('Ban phai mua ve');
});

app.get('/muave', (req, res) => {
    req.session.daMuaVe = true;
    res.cookie('DA_MUA_VE', true).send('Ban da mua ve.');
});

app.listen(3000, () => console.log('Server started!'));
