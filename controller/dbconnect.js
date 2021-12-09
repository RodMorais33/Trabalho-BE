//Importação da dependencia do banco de dados
const mysql = require('mysql');
//Importação do arquivo settings
const settings = require('./settings.json')
//Conexão com o banco de dados
const con = mysql.createConnection(settings.servicos);
//Exportação do banco de dados
module.exports = {
    con
};