module.exports.noticias = (app, req, res) => {
    let connection = app.config.dbConnection();
    let model = new app.app.models.NoticiasDAO(connection);

    model.getNoticias((error, result) => {
        res.render('noticias/noticias', {noticias: result});    
    });
};

module.exports.noticia = (app, req, res) => {
    const connection = app.config.dbConnection();
    const model = new app.app.models.NoticiasDAO(connection);

    model.getNoticia((error, result) => {
        res.render('noticias/noticia', {noticia: result});
    });
};