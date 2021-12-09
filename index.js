
const express = require('express'); //HTTP - GET, POST, PUT, DELETE
const cors = require('cors');//Filtros

const app = express();

app.use(cors());
app.use(express.json());

const prestador = require('./router/prestadores.js');
app.use(prestador);

app.listen(3000, () => {
    console.log('Rodando porta 3000');
})