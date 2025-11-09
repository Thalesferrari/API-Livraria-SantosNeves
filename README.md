# API-Livraria-SantosNeves

Projeto de API REST desenvolvido para a atividade processual da disciplina de Modelos e Linguagens de Programação III.

O objetivo foi criar uma API completa com Node.js e Express, conectada a um banco de dados PostgreSQL e publicada na plataforma Render, seguindo os tutoriais e requisitos da avaliação.

---

## 🚀 Tecnologias Utilizadas

* **Node.js:** Ambiente de execução do JavaScript no backend.
* **Express.js:** Framework para criação das rotas e gerenciamento do servidor.
* **PostgreSQL:** Banco de dados relacional para persistência dos dados.
* **GitHub / GitHub Codespaces:** Para versionamento do código e ambiente de desenvolvimento.
* **Render:** Plataforma de nuvem para deploy (publicação) da API e do banco de dados.
* **pg (node-postgres):** Cliente Node.js para conexão com o PostgreSQL.

---

## 🔗 Link da API Publicada

A API está no ar e pode ser acessada através da seguinte URL base:

**`https://api-livraria-santosneves.onrender.com`**

---

## 🛠️ Endpoints (Como Testar)

A API possui um CRUD completo para a rota `/users`.

### 1. Listar Usuários (GET)

Retorna uma lista com todos os usuários cadastrados no banco de dados.

* **Método:** `GET`
* **URL:** `https://api-livraria-santosneves.onrender.com/users`
* **Teste Rápido:** [Clique aqui para testar no navegador](https://api-livraria-santosneves.onrender.com/users)

### 2. Criar Novo Usuário (POST)

Cria um novo usuário no banco de dados.

* **Método:** `POST`
* **URL:** `https://api-livraria-santosneves.onrender.com/users`
* **Body (JSON):**
    ```json
    {
      "nome": "Seu Nome",
      "email": "seu@email.com"
    }
    ```

### 3. Atualizar Usuário (PUT)

Atualiza um usuário existente pelo seu `id`.

* **Método:** `PUT`
* **URL:** `https://api-livraria-santosneves.onrender.com/users/1` (exemplo para ID 1)
* **Body (JSON):**
    ```json
    {
      "nome": "Novo Nome",
      "email": "novo@email.com"
    }
    ```

### 4. Deletar Usuário (DELETE)

Deleta um usuário do banco de dados pelo seu `id`.

* **Método:** `DELETE`
* **URL:** `https://api-livraria-santosneves.onrender.com/users/1` (exemplo para ID 1)

---

## 👥 Equipe do Projeto

* Thales Ferrari
* Tiago Cézar
* Felipe Motta
* Filipe Lins
* Maria Eduarda
