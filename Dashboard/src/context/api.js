// src/context/api.js
export const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3060/api/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Users:', data); // Debugging log
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const fetchUserById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3060/api/users/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched User By ID:', data); // Debugging log
        return data;
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        return null;
    }
};

export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3060/api/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Products:', data); // Debugging log
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3060/api/products/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Product By ID:', data); // Debugging log
        return data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null;
    }
};