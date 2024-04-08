import React from 'react';
import "../Estilos/Tabla.css";
import BotonEliminar from './BotonEliminar';

const Tabla = ({ datos, eliminarRegistro }) => {
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
            <td className='id'>{persona.id}</td>
            <td className='nombre'>{persona.nombre}</td>
            <td className='rol'>{persona.rol}</td>
            <td><BotonEliminar onClick={() => eliminarRegistro(persona.id)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;