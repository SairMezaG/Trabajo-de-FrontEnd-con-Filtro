import React, { useState } from 'react';
import Filtro from './Filtro';



const Arreglo = ({ datos }) => {
  const [filtro, setFiltro] = useState("");
  const [cantidadRegistros, setCantidadRegistros] = useState(5);

  const filtroDatos = datos.filter(persona => 
    persona.nombre.toLowerCase().startsWith(filtro.toLowerCase())
  ).slice(0, cantidadRegistros);

  return (
    <div>
      <Filtro filtro={filtro} onFiltroChange={setFiltro} />
      <Select onChange={(e) => setCantidadRegistros(parseInt(e.target.value))} />
      <br />
      <br />
      <Tabla datos={filtroDatos} />
      
      <InformacionRegistros registrosActuales={filtroDatos.length} totalRegistros={datos.length} />
    </div>
  );
}

export default Arreglo;