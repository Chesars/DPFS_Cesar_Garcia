const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Product, { foreignKey: 'brandId' });
    }
  }

  Brand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand'
  });

  return Brand;
};
