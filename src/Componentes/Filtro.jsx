
import React from 'react';


const Filtro = ({ filtro, onFiltroChange }) => {
  return (
    <div className="inputFiltro">
      <input
        type="text"
        placeholder="Filtrar por la inicial del nombre"
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </div>
  );
}

export default Filtro;