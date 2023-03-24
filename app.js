const express = require('express');
const app = express()
const port = 9000

const path = require('path'); 

const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'main'
}))

app.set('view engine', '.hbs');
app.set('views', './views');

app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('index', {
        layout: 'main'
    });
});

app.get('/trangQuanTri', function(req, res){
    res.render('index', {
        layout: 'table'
    });
});

app.get('/themMoi', function(req, res){
    res.render('index', {
        layout: 'addNew'
    });
});
app.get('/sanPham', function(req, res){
    res.render('index', {
        layout: 'sanpham'
    });
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
app.set('views', path.join(__dirname, 'views'));