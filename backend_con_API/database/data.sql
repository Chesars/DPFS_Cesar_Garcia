INSERT INTO Categories (name) VALUES ('Electronics'), ('Clothing'), ('Books');
INSERT INTO Brands (name) VALUES ('BrandA'), ('BrandB');
INSERT INTO Colors (name) VALUES ('Red'), ('Blue');
INSERT INTO Sizes (name) VALUES ('Small'), ('Medium'), ('Large');
INSERT INTO Users (firstName, lastName, email, password, role) VALUES ('John', 'Doe', 'john@example.com', 'hashedpassword', 'user');
INSERT INTO Products (name, description, price, categoryId, brandId, colorId, sizeId) VALUES ('Product1', 'Description1', 10.99, 1, 1, 1, 1);
