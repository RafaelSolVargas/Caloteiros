const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

let db;

module.exports = {
    // Cria uma função para conectar no servidor
    connectToServer: function (callback) {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            db = client.db('AulaWeb'); // Configura qual database vamos usar e deixa na variável db  
            return callback(err);
        });
    },

    getDb: function () {
        return db;
    }
};
