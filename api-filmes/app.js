const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/filmesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));


app.use(cors());
app.use(express.json());


const filmeRoutes = require('./routes/filmeRoutes');
app.use('/filmes', filmeRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
