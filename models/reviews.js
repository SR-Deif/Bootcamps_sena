'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
        notNull: true
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
        notNull: true
      }
    },
    
    rating:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
        notNull: true
      }
    },
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  });
  return reviews;
};