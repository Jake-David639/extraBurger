'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};