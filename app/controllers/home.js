module.exports.index = (app, req, res) => {

    const connection = app.config.dbConnection();
    const model = new app.app.models.NoticiasDAO(connection);


    model.get5UltimasNoticias((error, result) => {
        res.render('home/index', {noticias: result});
    });
    
};