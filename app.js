const app = require("./config/server");

require("./app/routes/home")(app);
require("./app/routes/formulario_inclusao_noticia")(app);
require("./app/routes/noticias")(app);


app.listen(8080, () => {
    let x = 2;
    let y = 2;
    console.log("2 + 2 é ", x + y );
});