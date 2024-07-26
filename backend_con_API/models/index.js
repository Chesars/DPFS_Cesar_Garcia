const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import all models
db.User = require('./user')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.Category = require('./category')(sequelize, Sequelize);
db.Brand = require('./brand')(sequelize, Sequelize);
db.Color = require('./color')(sequelize, Sequelize);
db.Size = require('./size')(sequelize, Sequelize);
db.CartItem = require('./cartItem')(sequelize, Sequelize);
db.ShoppingCart = require('./shoppingCart')(sequelize, Sequelize);

// Initialize associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
