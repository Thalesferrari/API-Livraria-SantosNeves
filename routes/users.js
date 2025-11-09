const express = require("express");
const router = express.Router();
const pool = require("../db"); // Importa a conexão do banco de dados

// Listar todos os usuários (GET /users)
router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Buscar usuário por ID (GET /users/:id)
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Criar novo usuário (POST /users)
router.post("/", async (req, res) => {
  try {
    // O usuário enviará 'nome' e 'email' no corpo (body) da requisição
    const { nome, email } = req.body; 
    
    if (!nome || !email) {
      return res.status(400).json({ mensagem: "Nome e email são obrigatórios" });
    }

    const { rows } = await pool.query(
      "INSERT INTO users (nome, email) VALUES ($1, $2) RETURNING *",
      [nome, email]
    );
    
    res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      usuario: rows[0]
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Atualizar usuário por ID (PUT /users/:id)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ mensagem: "Nome e email são obrigatórios" });
    }

    const { rows } = await pool.query(
      "UPDATE users SET nome = $1, email = $2 WHERE id = $3 RETURNING *",
      [nome, email, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({
      mensagem: `Usuário ${id} atualizado`,
      dados: rows[0]
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// Excluir usuário (DELETE /users/:id)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1", [id]);

    if (rowCount === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({ mensagem: `Usuário ${id} deletado` });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

module.exports = router;