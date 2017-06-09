module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Category', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
  return Todo;
};
