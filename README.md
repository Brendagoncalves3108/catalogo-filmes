# 🎬 Catálogo de Filmes
💡 Projeto Final
📅 Junho de 2025

Projeto full stack com **Node.js**, **Express**, **MongoDB** e **React** para cadastrar, editar, listar e remover filmes com suas imagens.

---

## 📌 Tecnologias Utilizadas

- ⚙️ Node.js + Express
- 🗄️ MongoDB + Mongoose
- ⚛️ React + Vite
- 🧪 Thunder Client (para testar rotas)

---

## ✨ Funcionalidades

- 🔍 Listar todos os filmes
- ➕ Cadastrar novo filme
- ✏️ Atualizar filme existente
- ❌ Deletar filme por ID
- 🧹 Deletar todos os filmes (opcional)

---

## 🖼️ Exemplo de filme (formato JSON)

```json
{
  "titulo": "Interestelar",
  "genero": "Ficção Científica",
  "ano": 2014,
  "imagemUrl": "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"
}

 Como rodar o projeto
📦 Backend (API - Node.js)
cd api-filmes
npm install
node app.js
Acesse no navegador: http://localhost:5000


🌐 Frontend (React + Vite)
cd frontend
npm install
npm run dev
Acesse no navegador: http://localhost:5173

 Endpoints da API
Método	Rota	Ação
GET	/filmes	Listar todos os filmes
POST	/filmes	Criar um novo filme
PUT	/filmes/:id	Atualizar filme por ID
DELETE	/filmes/:id	Deletar filme por ID
DELETE	/filmes	Deletar todos os filmes (opcional/admin)

📂 Estrutura de Pastas
catalogo-filmes/
├── api-filmes/         # Backend (Node.js + Express)
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── app.js
├── frontend/           # Frontend (React + Vite)
│   ├── src/
│   └── index.html
└── README.md
