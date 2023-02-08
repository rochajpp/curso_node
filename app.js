const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render("admin/form_add_noticia")
});

app.get("/noticias", (req, res) => {
    res.render("noticias/noticias");
});

app.listen(8080, () => {
    let x = 2;
    let y = 2;
    console.log("2 + 2 é ", x + y );

});