import { useState } from 'react';

function Home() {
  // useState returns an array with 2 things:
  // 1. count = the current value
  // 2. setCount = function to change the value
  const [count, setCount] = useState(10);

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🔢 Contador Simples</h1>

      {/* Display the current count */}
      <h2 style={{ fontSize: '4em', color: '#333' }}>{count}</h2>

      {/* Buttons to change the count */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ➕ Adicionar 1
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ➖ Subtrair 1
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🔄 Zerar
        </button>
      </div>

      {/* Show different messages based on count */}
      <div style={{ marginTop: '30px', fontSize: '18px', color: '#666' }}>
        {count === 0 && <p>Comece clicando nos botões!</p>}
        {count > 0 && <p>Você adicionou {count} vez(es)!</p>}
        {count < 0 && <p>Você subtraiu {Math.abs(count)} vez(es)!</p>}
        {count > 10 && <p>🎉 Uau! Você chegou a {count}!</p>}
      </div>
    </div>
  );
}

// Define que Home é a saída padrão
export default Home;
