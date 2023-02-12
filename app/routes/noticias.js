
module.exports = (app) => {
    app.get("/noticias", (req, res) => {
        const connection = app.config.dbConnection();

        connection.query('select * from noticias', (error, result) => {
            res.render('noticias/noticias', {noticias: result}); //Enviando uma resposta ao servidor do ejs com as informações do banco de dados;
        });
    });
}