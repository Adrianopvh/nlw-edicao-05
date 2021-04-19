import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.send("Ola NLW 05");
});

app.post("/", (req, res) => {
    return res.json({ message: "Usuário salvo com sucesso!" });
});

app.listen(3000, () => console.log("Server is running on port 3000"));