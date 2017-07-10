
export default (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Groups;
};
