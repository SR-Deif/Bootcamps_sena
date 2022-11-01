'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    weeks: DataTypes.STRING,
    enroll_cost: DataTypes.STRING,
    minimum_skill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};