const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  ano: { type: Number, required: true },
  imagemUrl: { type: String, required: true }
});

module.exports = mongoose.model('Filme', filmeSchema);
