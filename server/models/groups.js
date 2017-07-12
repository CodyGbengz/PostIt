
export default (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
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
        Group.belongsToMany(models.User, {
          as: 'GroupMembers',
          through: 'GroupMembers',
          foreignKey: 'groupId'
        });
      }
    }
  });
  return Group;
};
