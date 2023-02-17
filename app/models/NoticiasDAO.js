function NoticiasDAO(connection){
    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function (callback){ // Não é possível usar o this em um arrow function, logo nessa situação n é usado um arrow function;
    this._connection.query('SELECT * FROM noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias SET ? ', noticia, callback);
};



module.exports = () => {
    return NoticiasDAO;
}