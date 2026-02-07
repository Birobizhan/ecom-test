import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchProducts } from './mockData';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Магазин товаров</h1>

      <input
        type="text"
        placeholder="Поиск товаров..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? <p>Загрузка...</p> : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="card"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.title} />
              <div className="card-body">
                <h3>{product.title}</h3>
                <span className="price">{product.price.toLocaleString()} ₽</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            
            <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image"/>
            
            <div className="modal-details">
              <h2>{selectedProduct.title}</h2>
              <p className="category">{selectedProduct.category}</p>
              <p className="price" style={{fontSize: '1.5em'}}>{selectedProduct.price.toLocaleString()} ₽</p>
              <p>{selectedProduct.description}</p>
              <button className="buy-btn" onClick={() => alert('Товар добавлен в корзину!')}>
                Купить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;