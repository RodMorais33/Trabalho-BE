const reformJson = (item, id_servico)=>{
    item.id_servico = id_servico;
    return item;
}

//Cálculo do problema, contem modulo prestadores.js em 'controlle' e em 'router'
//tofixed(2) corresponde a duas casas decimais
const calcTotal = (json) => {
    json.valor_Desconto = (((json.valor_hora * json.horas_trab)/100)*2).toFixed(2)
    json.valor_Total = ((json.valor_hora * json.horas_trab)-json.valor_Desconto)
    json.valor_Total = json.valor_Total.toFixed(2)
    return json    
    }

module.exports = {
    reformJson,
    calcTotal
   
}