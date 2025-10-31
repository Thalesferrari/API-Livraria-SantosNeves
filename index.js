//Código do arquivo index.js Aula 24/10 
const express = require("express"); 
const app = express();
const pool = require("./db");
app.use(express.json());

// Importa as rotas de usuários
const userRoutes = require("./routes/users");
app.use("/users", userRoutes); 

app.get("/", (req, res) => { 
  res.json({ message: "API rodando dentro do Codespaces!" }); 
}); 

pool.query("SELECT NOW()", (err, result) => { [cite: 456]
  if (err) { [cite: 457]
    console.error("Erro ao conectar ao banco:", err); [cite: 458]
  } else {
    console.log("Banco conectado:", result.rows); [cite: 460]
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});