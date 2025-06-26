import { useEffect, useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/filmes')
      .then((res) => res.json())
      .then((data) => setFilmes(data))
      .catch((err) => console.error('Erro ao buscar filmes:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🎬 Catálogo de Filmes</h1>
      {filmes.length === 0 ? (
        <p>Carregando filmes ou nenhum filme cadastrado...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {filmes.map((filme) => (
            <div
              key={filme._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                width: '220px',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={filme.imagemUrl}
                alt={filme.titulo}
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
              <h3>{filme.titulo}</h3>
              <p><strong>Gênero:</strong> {filme.genero}</p>
              <p><strong>Ano:</strong> {filme.ano}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
