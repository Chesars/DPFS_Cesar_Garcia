// src/context/ApiProvider.jsx
import React, { useState, useEffect } from 'react';
import ApiContext from './ApiContext';
import { fetchUsers, fetchProducts } from './api';

const ApiProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [latestEntity, setLatestEntity] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersData = await fetchUsers();
                console.log('Fetched Users:', usersData); // Debugging log
                const productsData = await fetchProducts();
                console.log('Fetched Products:', productsData); // Debugging log
                setUsers(usersData);
                setProducts(productsData);

                // Determine the latest entity
                const latestUser = usersData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] || null;
                const latestProduct = productsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] || null;
                const latest = latestUser && latestProduct
                    ? (new Date(latestUser.createdAt) > new Date(latestProduct.createdAt) ? latestUser : latestProduct)
                    : (latestUser || latestProduct);
                console.log('Latest Entity:', latest); // Debugging log
                setLatestEntity(latest);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ users, products, latestEntity }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;