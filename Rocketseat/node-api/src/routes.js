const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);           // listar
routes.get("/products/:id", ProductController.show);        // detalhes
routes.post("/products", ProductController.store);          // criar, adicionar
routes.put("/products/:id", ProductController.update);      // atualizar
routes.delete("/products/:id", ProductController.destroy);  // destroi, excluir

module.exports = routes;