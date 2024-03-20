import React from 'react'


const Registros = ({ cantidadRegistros, totalRegistros }) => {
    return (
      <div className='infoRegistros'>
        ... {cantidadRegistros} de {totalRegistros} registros.
      </div>
    );
  }

export default Registros