// Importando
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema ({
    // campos
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        // se preenche sozinha
        type: Date,
        default: Date.now, // data de registro
    },
});

// Registrando um model
mongoose.model("Product", ProductSchema);
