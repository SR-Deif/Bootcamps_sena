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

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
        notNull: true
      }
    },

    description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
        notNull: true
      }
    },

    weeks: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
        notNull: true
      }
    },

    enroll_cost:{
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

    minimum_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'courses',
    timestamps: false
  });
  return courses;
};