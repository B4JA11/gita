import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const isElectronics = product.category === 'Electronics';

  return (
    <div 
      style={{
        border: isElectronics ? '2px solid #3b82f6' : '1px solid #ccc',
        backgroundColor: isElectronics ? '#eff6ff' : '#fff',
        padding: '15px',
        margin: '10px',
        borderRadius: '8px',
        maxWidth: '200px'
      }}
    >
      <h3>{product.title}</h3>
      <p>კატეგორია: {product.category}</p>
      <p>ფასი: {product.price} ₾</p>
      <button 
        onClick={onAddToCart}
        style={{
          padding: '8px 12px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;