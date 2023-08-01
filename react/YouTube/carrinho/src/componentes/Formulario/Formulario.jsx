import React from 'react';

function Formulario() {
  return ( 
    <form className="search-bar">
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required
      />

      <button type="submit" className="search__button">
      </button>
  </form>
   );
}

export default Formulario;