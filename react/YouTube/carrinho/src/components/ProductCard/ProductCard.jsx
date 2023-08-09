import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency'; // Importa a função para formatar moeda
import AppContext from '../../context/AppContext'; // Importa o contexto do aplicativo

// Define o componente ProductCard, que exibe informações de um produto individual
function ProductCard({ data }) {

  // Desestrutura os dados do produto
  const { title, thumbnail, price } = data;

  // Usa o hook useContext para acessar o contexto do aplicativo
  const { cartItems, setCartItems } = useContext(AppContext);
  // O contexto é usado para acessar informações compartilhadas, como os itens do carrinho e a função para atualizar os itens do carrinho

  // Define a função para adicionar o produto ao carrinho
  const handleAddCart = () => setCartItems([ ...cartItems, data ]);
  // Ao clicar no botão "Adicionar ao Carrinho", a função 'setCartItems' é chamada para adicionar o produto atual ao carrinho

  // Renderiza o componente
  return (
    <section className="product-card">
      {/* Renderiza a imagem do produto */}
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} // Substitui o nome do arquivo da imagem para usar uma versão de maior resolução
        alt="product"
        className="card__image"
      />

      {/* Renderiza as informações do produto */}
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        {/* Formata e exibe o preço do produto usando a função formatCurrency */}
        <h2 className="card__title">{title}</h2>
        {/* Exibe o título do produto */}
      </div>

      {/* Renderiza o botão para adicionar o produto ao carrinho */}
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill /> {/* Ícone de carrinho de compras */}
      </button>
    </section>
  );
}


export default ProductCard;

// Define os tipos esperados para as propriedades do componente ProductCard
ProductCard.propTypes = {
  // A propriedade 'data' deve ser um objeto
  data: propTypes.shape({}),
}.isRequired; // É requerido, ou seja, o componente não pode ser utilizado sem essa propriedade

