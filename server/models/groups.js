
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
  });

  Group.associate = (models) => {
    Group.belongsToMany(models.User, {
      as: 'groups',
      through: 'GroupMembers',
      foreignKey: 'groupId'
    });
  };

  Group.associate = (models) => {
    Group.hasMany(models.Message, { foreignKey: 'groupId', as: 'message' });
  };

  return Group;
};
