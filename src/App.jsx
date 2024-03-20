import React from 'react';
import Arreglo from './Componentes/Arreglo';

const datos = [
  { id: 1, nombre: "luis Garcia", rol: "Director" },
  { id: 2, nombre: "Henry Bastidas", rol: "Instructor" },
  { id: 3, nombre: "Guisella Nathali Jaramillo", rol: "Aprendiz SENA" },
  { id: 4, nombre: "David Astaiza ", rol: "Instructor" },
  { id: 5, nombre: "Jesus Paladines", rol: "Aprendiz SENA" },
  { id: 6, nombre: "Jairo Muñoz", rol: "Aprendiz SENA" },
  { id: 7, nombre: "Camilo Rojas", rol: "Aprendiz SENA" },
  { id: 8, nombre: "Laura Garcia", rol: "Aprendiz SENA" },
  { id: 9, nombre: "Fernanda Martinez", rol: "Aprendiz SENA" },
  { id: 10, nombre: "Andres Perez", rol: "Instructor" },
  { id: 11, nombre: "Carlos Rodriguez", rol: "Aprendiz SENA" },
  { id: 12, nombre: "Diana Mendez", rol: "Aprendiz SENA" },
  { id: 13, nombre: "Maria Suarez", rol: "Aprendiz SENA" },
  { id: 14, nombre: "Julian Herrera", rol: "Instructor" },
  { id: 15, nombre: "Sandra Lopez", rol: "Aprendiz SENA" },
  { id: 16, nombre: "Mateo Gomez", rol: "Aprendiz SENA" },
  { id: 17, nombre: "Alejandro Ramirez", rol: "Aprendiz SENA" },
  { id: 18, nombre: "Juan Velez", rol: "Instructor" },
  { id: 19, nombre: "Esteban Diaz", rol: "Aprendiz SENA" },
  { id: 20, nombre: "Gabriela Castro", rol: "Aprendiz SENA" }
];


function App() {
  return (
    <div className="App">
      <Arreglo datos={datos} />
    </div>
  );
}

export default App;



