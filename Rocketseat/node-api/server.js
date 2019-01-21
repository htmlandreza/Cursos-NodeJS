const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors()); // pode-se passar domínios específicos pra obter acesso

// Iniciando o Database                     
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", // Nome do database
    { useNewUrlParser: true }
); 
requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); // porta