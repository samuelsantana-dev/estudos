import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

export function SearchBar() {
  const [valueAtual, setValueAtual] = useState('');

  return (
    <form className="search-bar">
      <input
        type="search"
        value={valueAtual}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={(target) => setValueAtual(target.value)}
        required
      />
      
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}


 