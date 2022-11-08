'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    unique: true,
    validate:{
      isAlpha: {
        args: true,
        msg: 'El nombre slo debe de tener letras :D'
      },
      notEmpty:{
        args: true,
        msg: 'Campo vacio'
      },
      notNull: true
    }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: {
          args: true,
          msg: "Digite un correo valido: ejemplo@dominio.com"
        },
        notEmpty:{
          args: true,
          msg: 'Campo vacio'
        },
      }
    } ,
    password: {
    type: DataTypes.STRING,
    //allowNull: false,
    //unique: true,
    validate:{
      len:{
        args: [6, 10],
        msg: "minimo de caracteres 6, maximo 10"
      },
      notEmpty:{
        args: true,
        msg: 'Campo vacio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false

    
  });
  return User;
};