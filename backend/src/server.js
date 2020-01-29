const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack9:omnistack9@semanaoministack9-diw8e.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//req.query = Acessar os query params (para filtros)
//req.params = Acessar os route params (para edição e delete)
//req.body = Acessa corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes)

app.listen(3333);

console.log('Server is running.');

