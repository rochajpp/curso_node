module.exports = (app) => {
    app.get("/noticia", (req, res) => {
        const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticia((error, result) => {
            res.render('noticias/noticia', {noticia: result});
        })
    });
}