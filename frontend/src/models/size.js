const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Size extends Model {
    static associate(models) {
      Size.hasMany(models.Product, { foreignKey: 'sizeId' });
    }
  }

  Size.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size'
  });

  return Size;
};
