import React from 'react';


const Tabla = ({ datos }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>DESCRIPCIÓN</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((persona) => (
          <tr key={persona.id}>
            <td>{persona.id}</td>
            <td>{persona.nombre}</td>
            <td>{persona.rol}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
