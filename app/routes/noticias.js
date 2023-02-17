module.exports = (application) => {
    application.get("/noticias", (req, res) => {

        const connection = application.config.dbConnection();
        const NoticiasDAO = new application.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias((error, result) => {
            res.render('noticias/noticias', {noticias: result}); //Enviando uma resposta ao servidor do ejs com as informações do banco de dados;
        });
    });
}