import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

// Define o componente CartItem
function CartItem({ data }) {
  // Usa o hook useContext para acessar o contexto do aplicativo
  const { cartItems, setCartItems } = useContext(AppContext);
  
  // Desestrutura os dados do item do carrinho
  const { id, thumbnail, title, price } = data;

  // Define a função para remover o item do carrinho
  const handleRemoveItem = () => {
    // Filtra os itens do carrinho para remover o item com o id especificado
    const updatedItems = cartItems.filter((item) => item.id != id);
    // Atualiza o estado dos itens do carrinho
    setCartItems(updatedItems);
  };

  // Renderiza o componente
  return (
    <section className="cart-item">
      {/* Renderiza a imagem do item */}
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      {/* Renderiza as informações do item */}
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        {/* Renderiza o botão para remover o item do carrinho */}
        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

// Define os tipos esperados para as propriedades do componente CartItem
CartItem.propTypes = {
  // A propriedade 'data' deve ser um objeto e é obrigatória
  data: propTypes.object
}.isRequired;
