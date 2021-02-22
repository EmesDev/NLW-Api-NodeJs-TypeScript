import express from 'express';

const app = express();

app.get("/", (req, res) =>{
    return res.json({ massage: "Hello World!" });
});


app.post("/", (req, res) =>{
    return res.json({ massage: "Os dados foram salvos com sucesso" });
});

app.listen(3333, () => (console.log("Server is Running")));