const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

let daMuaVe = false;

app.get('/xemphim', (req, res) => {
    if (daMuaVe) return res.send('Moi xem phim.');
    res.send('Ban phai mua ve');
});

app.get('/muave', (req, res) => {
    daMuaVe = true;
    res.send('Ban da mua ve.');
});

app.listen(3000, () => console.log('Server started!'));
