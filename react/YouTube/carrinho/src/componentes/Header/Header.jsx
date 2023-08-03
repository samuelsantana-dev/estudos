//Sempre colocar ; no final
import React from 'react';
import './Header.css';

//import CartButton from '../CartButton/CartButton';
import {SearchBar} from '../SearchBar/SearchBar';
import { CartButton } from '../CartButton/CartButton';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}
/* <CartButton />*/