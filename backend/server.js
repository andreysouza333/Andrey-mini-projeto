const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API Funcionando com sucesso"
    });
});

app.get("/items", (req, res) => {
    const items = [
        {
            nome: "Notebook",
            preco: 3000,
            categoria: "Eletronico"
        },
        {
            nome: "Processador",
            preco: 700,
            categoria: "Eletronico"
        }
    ];

    res.status(200).json(items);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});