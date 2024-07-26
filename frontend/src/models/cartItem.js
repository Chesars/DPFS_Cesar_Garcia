const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.ShoppingCart, { foreignKey: 'cartId' });
      CartItem.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  CartItem.init({
    cartId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ShoppingCart', // Ensure this matches the table name of ShoppingCart
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products', // Ensure this matches the table name of Product
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'CartItems' // Ensure the table name matches the one in the database
  });

  return CartItem;
};