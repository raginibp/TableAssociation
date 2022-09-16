module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    cartName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })


    // Cart.hasMany(models.Product, {
    //   foreignKey: 'cartId',
    //   onDelete: 'CASCADE'
    // })
  };
  return Cart;
};