import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/Dashboard.css';

const ProductListPanel = () => {
    const { products } = useContext(ApiContext);

    return (
        <div className="panel product-list-panel-horizontal">
            <h2><i className="fas fa-boxes"></i> Product List</h2>
            <div className="product-list-horizontal">
                {products.map(product => (
                    <div key={product.id} className="product-item-horizontal">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListPanel;