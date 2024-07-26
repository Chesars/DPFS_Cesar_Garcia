CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    role VARCHAR(50)
);

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Colors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Sizes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    categoryId INT,
    brandId INT,
    colorId INT,
    sizeId INT,
    FOREIGN KEY (categoryId) REFERENCES Categories(id),
    FOREIGN KEY (brandId) REFERENCES Brands(id),
    FOREIGN KEY (colorId) REFERENCES Colors(id),
    FOREIGN KEY (sizeId) REFERENCES Sizes(id)
);

CREATE TABLE ShoppingCart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    totalAmount DECIMAL(10, 2),
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE CartItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cartId INT,
    productId INT,
    quantity INT,
    price DECIMAL(10, 2),
    FOREIGN KEY (cartId) REFERENCES ShoppingCart(id),
    FOREIGN KEY (productId) REFERENCES Products(id)
);
