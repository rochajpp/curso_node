module.exports.formulario_inclusao_noticia = (app, req, res) => { //Exports com uma 'variável' para exportar funções diferentes para cada app.
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
};

module.exports.noticias_salvar = (app , req, res) => {

    let noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obirgatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatória').notEmpty();

    let error = req.validationErrors();

    if(error){
        res.render('admin/form_add_noticia', {validacao: error, noticia: noticia});
        return;
    }

    const connection = app.config.dbConnection();
    const model = new app.app.models.NoticiasDAO(connection);

    model.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
    });
};