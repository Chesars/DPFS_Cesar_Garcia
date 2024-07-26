const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Color extends Model {
    static associate(models) {
      Color.hasMany(models.Product, { foreignKey: 'colorId' });
    }
  }

  Color.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color'
  });

  return Color;
};
