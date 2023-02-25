function NoticiasDAO(connection){
    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function (callback){ // Não é possível usar o this em um arrow function, logo nessa situação n é usado um arrow function;
    this._connection.query('SELECT * FROM noticias ORDER BY data_noticia DESC', callback);
};

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias SET ? ', noticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
};

module.exports = () => {
    return NoticiasDAO;
} 