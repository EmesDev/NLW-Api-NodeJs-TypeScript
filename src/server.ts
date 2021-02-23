import 'reflect-metadata';
import express from 'express';
import "./database"

const app = express();



app.get("/", (req, res) =>{
    return res.json({ massage: "Hello World!" });
});


app.post("/", (req, res) =>{
    return res.json({ massage: "Os dados foram salvos com sucesso" });
});

app.listen(3333, () => (console.log("Server is Running")));