'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    rating: DataTypes.DECIMAL(3,1),
    awards: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    length: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};