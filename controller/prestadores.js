//Importação da conexão de banco de dados
const { con } = require('./dbconnect.js');
const modelo = require('../model/prestador.js');

//Função que faz a requisição do banco de dados fazendo uso de conexão
const get = (req, res) => {
    try {
        let string = 'select * from prestadores';
        con.query(string, (err, result) => {
            res.json(result);
        });

    } catch (error) {
        res.status(400).end();
    }
}

const calcTotal = (req, res)=>{
    let string = 'select * from prestadores'
    con.query(string, (err, result)=>{
        let array = []
        result.forEach(e=>{
            array.push(modelo.calcTotal(e))
        })
        res.json(array)
    })
}

const post = (req, res)=>{
    let prestador = "\""+req.body.prestador+"\"";
    let valor_hora = "\""+req.body.valor_hora+"\"";
    let horas_trab = req.body.horas_trab;
    let string = `insert into prestadores(prestador, valor_hora, horas_trab) values (${prestador}, ${valor_hora}, ${horas_trab})`;
    con.query(string, (err,result)=>{
        if(result.affectedRows == 1){
            res.json(modelo.reformJson(req.body, result.insertId));
        }else{
            res.status(400).end();
        }
    })
}

const put = (req, res) =>{
    let id_servico = req.body.id_servico;
    let prestador = "\""+req.body.prestador+"\"";
    let valor_hora = "\""+req.body.valor_hora+"\"";
    let horas_trab = req.body.horas_trab;
    let string =`update prestadores set prestador = ${prestador}, valor_hora = ${valor_hora}, horas_trab = ${horas_trab} where id_servico = ${id_servico}`;
    con.query(string,(err, result)=>{
        if(result.changedRows == 1){
            res.json(req.body)
        }else{
        res.status(400).end()
        }
        
    })
}
const del = (req, res) =>{
    let string = `delete from prestadores where id_servico = ${req.params.id_servico}`
    con.query(string, (err, result)=>{
        if(result.affectedRows == 1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}
//Exportação de funções
module.exports = {
    get,
    post,
    put,
    del,
    calcTotal
}