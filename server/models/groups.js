
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
          through: 'GroupMember',
          foreignKey: 'groupId',
          onDelete: 'CASCADE'
        });
        Group.hasMany(models.Message, {
          foreignKey: 'groupId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Group;
};
