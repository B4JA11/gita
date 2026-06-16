import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: 'ტელეფონი', price: 1200, category: 'Electronics' },
  { id: 2, title: 'ჰუდი', price: 80, category: 'Clothing' },
  { id: 3, title: 'ლეპტოპი', price: 2500, category: 'Electronics' },
  { id: 4, title: 'ფეხსაცმელი', price: 150, category: 'Clothing' },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>🛒 კალათა: <span style={{ color: '#10b981' }}>{cartCount}</span> ნივთი</h2>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;