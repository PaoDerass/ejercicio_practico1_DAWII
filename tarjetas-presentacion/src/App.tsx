import React from 'react';
import './App.css';
import tarjetaP from './componentes/tarjetaP'; 
import { persona } from './modelos/persona'; 

function App() {
  const personas: persona[] = [
    { id: 1, nombre: 'Mariana Gomez', ocupacion: 'Ing. Civil', pais: 'Honduras' },
    { id: 2, nombre: 'José Martinez', ocupacion: 'Ing. Sistemas', pais: 'Honduras' },
    { id: 3, nombre: 'Sofia Gutierrez', ocupacion: 'Ing. Electricidad', pais: 'Honduras' },
  ];

  return (
    <div className="App">
      <header className="Appheader">
        <h1>Tarjetas de Presentación</h1>
        {personas.map((persona) => (
          <tarjetaP key={persona.id} {...persona} />
        ))}
      </header>
    </div>
  );
}

export default App;
