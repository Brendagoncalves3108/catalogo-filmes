const Filme = require('../models/Filme');


exports.getFilmes = async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (err) {
    console.error('Erro ao buscar filmes:', err);
    res.status(500).json({ erro: 'Erro ao buscar filmes' });
  }
};

exports.addFilme = async (req, res) => {
  try {
    const novo = new Filme(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    console.error('Erro ao adicionar filme:', err);
    res.status(500).json({ erro: 'Erro ao adicionar filme' });
  }
};


exports.updateFilme = async (req, res) => {
  const { id } = req.params;
  try {
    const atualizado = await Filme.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) {
      return res.status(404).json({ erro: 'Filme não encontrado' });
    }
    res.json(atualizado);
  } catch (err) {
    console.error('Erro ao atualizar filme:', err);
    res.status(500).json({ erro: 'Erro ao atualizar filme' });
  }
};


exports.deleteFilme = async (req, res) => {
  try {
    const deletado = await Filme.findByIdAndDelete(req.params.id);
    if (!deletado) {
      return res.status(404).json({ erro: 'Filme não encontrado' });
    }
    res.json({ msg: 'Filme deletado com sucesso' });
  } catch (err) {
    console.error('Erro ao deletar filme:', err);
    res.status(500).json({ erro: 'Erro ao deletar filme' });
  }
};

exports.deleteAllFilmes = async (req, res) => {
  try {
    await Filme.deleteMany({});
    res.status(200).json({ message: 'Todos os filmes foram deletados com sucesso!' });
  } catch (err) {
    console.error('Erro ao deletar todos os filmes:', err);
    res.status(500).json({ erro: 'Erro ao deletar todos os filmes' });
  }
};
