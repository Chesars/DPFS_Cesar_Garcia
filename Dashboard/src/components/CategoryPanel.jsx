import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/Dashboard.css';

const CategoryPanel = () => {
    const { products } = useContext(ApiContext);

    const categories = products.reduce((acc, product) => {
        acc[product.categoryId] = (acc[product.categoryId] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="panel category-panel">
            <h2><i className="fas fa-tags"></i> Categories</h2>
            <ul>
                {Object.entries(categories).map(([categoryId, count]) => (
                    <li key={categoryId}>Category {categoryId}: {count} products</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPanel;