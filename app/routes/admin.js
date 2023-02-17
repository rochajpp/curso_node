module.exports = (app) => {
    
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', (req, res) => {
        
        var noticia = req.body;

        const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias');
        });
    });
}
