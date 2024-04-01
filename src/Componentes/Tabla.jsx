import React from 'react';
import "../Estilos/Tabla.css";
import BotonEliminar from './BotonEliminar';


const Tabla = ({ datos }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>DESCRIPCIÓN</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((persona) => (
          <tr key={persona.id}>
            <td>{persona.id}</td>
            <td>{persona.nombre}</td>
            <td>{persona.rol}</td>
            <td><BotonEliminar/></td>
          </tr>
        ))}
      </tbody>
      

    </table>
    
  );
}

export default Tabla;
