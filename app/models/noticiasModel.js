module.exports = () => {

    this.getNoticias = (connection, callback) => { // Atribuindo e retornando o this para que seja executada em qualquer função desse contexto em outros módulos;
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
    }
    
    return this;
}