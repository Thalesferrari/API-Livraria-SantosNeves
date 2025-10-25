//Código do arquivo index.js Aula 24/10 
const express = require("express"); 
const app = express(); 
app.use(express.json());

// Importa as rotas de usuários
const userRoutes = require("./routes/users");
app.use("/users", userRoutes); 

app.get("/", (req, res) => { 
  res.json({ message: "API rodando dentro do Codespaces!" }); 
}); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});