'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here
    }

  }

  ;
  users.init({
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_login: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_mail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users'
  });
  return users;
};