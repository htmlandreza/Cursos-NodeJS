// Importando
const mongoose = require("mongoose");

// Importando Model
const Product = mongoose.model('Product');

// Objeto
module.exports = {
    async index(req, res){ // busca os registros
        const { page = 1 } = req.query; // page default
        const products = await Product.paginate({}, {page, limit: 10} ); // {/condições pra filtro}, {/pagina atual, tamanho}

        return res.json(products);
    },

    async show(req, res){   // Detalhe
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){  // Criação
        const product = await Product.create(req.body); // req contem todos os campos da requisição

        return res.json(product);
    },

    async update(req, res){ // Atualização
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(product);
    },

    async destroy (req, res){   // Remoção
        await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }
};