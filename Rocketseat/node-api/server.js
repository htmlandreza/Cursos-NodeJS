//configuração do servidor

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("oi3");
});

app.listen(3001); //ouvir a porta do 3001 do navegador