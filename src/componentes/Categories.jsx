import React from 'react';
import "../assets/Cards.css";

const Categories = ({ categories, onCategorySelect }) => {
  return (
    <div className="categories-container">
      <div className="categories-bar">
        {/* Agregar el botón ALL */}
        <button
          className="category-button"
          onClick={() => onCategorySelect(null)}
        >
          ALL
        </button>
        
        {/* Resto de categorías */}
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            onClick={() => onCategorySelect(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
