
   
//Importação do express
const express = require('express')
//Faz o gerenciamento dos metodos HTTP
const router = express.Router()
const prestador = require('../controller/prestadores.js')

//Metodo HTTP com link pós DNS que executa o controle
router.get('/servicos/read', prestador.get)
router.get('/servicos/calcT/todos', prestador.calcTotal)
router.post('/servicos/create', prestador.post)
router.put('/servicos/update',prestador.put)
router.delete('/servicos/delete/:id_servico',prestador.del)

//Exporta as rotas para o arquivo principals
module.exports = router