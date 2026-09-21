const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res) => {

res.status(200).json({
    mensagem:"API Funcioando com sucesso"
});
});

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");

app.get("/items",(req,res)=>{
const items =[
    {
        nome:"Notebook",
        preço: 3000,
        Categoria: "Eletronico"
    },
    {
        nome:"Processador",
        preço: 700,
        Categoria: "Eletronico"
    }
];
    res.status(200).json(items);
        
});

});              
