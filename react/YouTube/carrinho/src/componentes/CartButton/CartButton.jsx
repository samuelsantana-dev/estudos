//Sempre colocar ; no final
import React from 'react';
import './CartButton.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export function CartButton() {
  return (
    <div>
      <button 
        type='button'
        className='cart__button'>
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
}