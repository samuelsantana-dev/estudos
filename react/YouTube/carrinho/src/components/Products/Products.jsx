import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

// Define o componente Products
function Products() {
  // Usa o hook useContext para acessar o contexto do aplicativo
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  // Usa o hook useEffect para buscar os produtos quando o componente é montado
  useEffect(() => {
    // Busca os produtos com a função fetchProducts
    fetchProducts('iphone').then((response) => {
      // Atualiza o estado dos produtos com a resposta da API
      setProducts(response);
      // Define o estado de carregamento como falso
      setLoading(false);
    });
  }, []);

  // Renderiza o componente
  return (
    // Se estiver carregando, renderiza o componente Loading
    (loading && <Loading /> ) || (
      // Caso contrário, renderiza a lista de produtos
      <section className="products container">
        {/* Cria uma seção para exibir os produtos com a classe de estilo 'products' */}
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
        {/* Utiliza o método map para percorrer a lista de produtos e renderizar um componente ProductCard para cada produto */}
      </section>
    )
  );
}

export default Products;
