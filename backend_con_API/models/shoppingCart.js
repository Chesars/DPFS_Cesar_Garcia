const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ShoppingCart extends Model {
    static associate(models) {
      ShoppingCart.belongsTo(models.User, { foreignKey: 'userId' });
      ShoppingCart.hasMany(models.CartItem, { foreignKey: 'cartId' });
    }
  }

  ShoppingCart.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    totalAmount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ShoppingCart'
  });

  return ShoppingCart;
};
