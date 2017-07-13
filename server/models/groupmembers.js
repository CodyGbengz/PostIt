
export default (sequelize, DataTypes) => {
  const GroupMembers = sequelize.define('GroupMembers', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return GroupMembers;
};
