module.exports = function (sequelize, DataTypes) {
  var Answers = sequelize.define('Answers', {
    concert: {
      type: DataTypes.STRING,
      allowNull: false
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurant: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Answers;
};
