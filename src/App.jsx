import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Cards from './componentes/Cards';
import Categories from './componentes/categories';
import Nosotros from './componentes/Nosotros'; // Importa el componente Nosotros

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const productsSectionRef = useRef(null);

  const fetchAllProducts = async () => {
    try {
      let allProducts = [];
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?page=${page}&limit=10`);
        const data = await response.json();
        allProducts = [...allProducts, ...data];
        hasNextPage = data.length === 10;
        page += 1;
      }

      setProducts(allProducts);
      setFilteredProducts(allProducts);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    fetchCategories();
  }, []);

  const filterByCategory = (categoryId) => {
    if (categoryId) {
      const filtered = products.filter((product) => product.category?.id === categoryId);
      setFilteredProducts(filtered);
      setCurrentPage(1);
    } else {
      setFilteredProducts(products); // Mostrar todos los productos si categoryId es null
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onScrollToTop={scrollToTop} onScrollToProducts={scrollToProducts} />
      <Banner />
      
      {/* Sección Nosotros */}
      <Nosotros /> {/* Agrega aquí el componente Nosotros */}
      
      {/* Título de Categorías */}
      <div className="section-title">
        <h2>Categorías</h2>
      </div>
      <Categories categories={categories} onCategorySelect={filterByCategory} />
      
      {/* Título de Productos */}
      <div className="section-title">
        <h2>Productos</h2>
      </div>
      <div ref={productsSectionRef}>
        <div className="cards-container">
          {currentProducts.map((product) => (
            <Cards
              key={product.id}
              Nombre={product.title}
              Precio={product.price}
              Foto={product.images[0]}
            />
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
