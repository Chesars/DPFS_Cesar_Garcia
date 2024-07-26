import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/Dashboard.css';

const CategoryList = () => {
    const { products } = useContext(ApiContext);

    const categories = products.reduce((acc, product) => {
        acc[product.categoryId] = (acc[product.categoryId] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="panel category-list-panel-horizontal">
            <h2><i className="fas fa-list-alt"></i> Category List</h2>
            <div className="category-list-horizontal">
                {Object.entries(categories).map(([categoryId, count]) => (
                    <div key={categoryId} className="category-item-horizontal">
                        <h3>Category {categoryId}</h3>
                        <p>{count} products</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;