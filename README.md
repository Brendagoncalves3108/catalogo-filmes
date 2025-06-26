 🎬 Catálogo de Filmes

Projeto full stack com **Node.js**, **Express**, **MongoDB** e **React** para cadastrar, editar e listar filmes com imagens.

---

📌 Tecnologias
- Node.js + Express
- MongoDB + Mongoose
- React + Vite
- Thunder Client (testes de API)

---

✨ Funcionalidades
- 🔍 Listar filmes
- ➕ Cadastrar novo filme
- ✏️ Atualizar filme
- ❌ Deletar filme por ID
- 🧹 Deletar todos os filmes

---

 🖼️ Exemplo de filme (JSON)

```json
{
  "titulo": "Interestelar",
  "genero": "Ficção Científica",
  "ano": 2014,
  "imagemUrl": "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"
}
🔧 Como rodar o projeto
📦 Backend (Node.js)
cd api-filmes
npm install
node app.js
Servidor sobe em: http://localhost:5000

🌐 Frontend (React + Vite)
cd frontend
npm install
npm run dev
Acesse no navegador: http://localhost:5173

🔁 Endpoints da API
Método	Rota	Ação
GET	/filmes	Lista todos os filmes
POST	/filmes	Cria um novo filme
PUT	/filmes/:id	Atualiza um filme por ID
DELETE	/filmes/:id	Deleta um filme por ID
DELETE	/filmes	Deleta todos os filmes

 Feito por
Brenda Gonçalves da silva (RA:5157035)
Pablo Henzzo Castro Magalhães (RA:5164673)

