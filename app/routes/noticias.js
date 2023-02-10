module.exports = (app) => {

    app.get("/noticias", (req, res) => {
        var mysql = require('mysql2'); // mysql2 modulo atualizado para o mysql mais atual;

        var connection = mysql.createConnection({ // Criando a conexão com o banco de dados
            host: 'localhost',
            user: 'root',
            password: 'database',
            database: 'portal_noticias'
        });


        connection.connect((err) => {
            if(err){
                console.log('Erro ao conectar ao banco de dados: ' + err.stack);
                return;
            }

            console.log("Conectado ao banco de dados com id de conexão " + connection.threadId);
        });

        connection.query('select * from noticias', (error, result) => {
            res.render('noticias/noticias', {noticias: result}); //Enviando uma resposta ao servidor do ejs com as informações do banco de dados;
        });
    });
}