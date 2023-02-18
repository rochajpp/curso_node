module.exports = (app) => {
    app.get("/noticias", (req, res) => {

        const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias((error, result) => {
            res.render('noticias/noticias', {noticias: result}); //Enviando uma resposta ao servidor do ejs com as informações do banco de dados;
        });
    });

    app.get("/noticia", (req, res) => {
        const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticia((error, result) => {
            res.render('noticias/noticia', {noticia: result});
        })
    });
}