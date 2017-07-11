export default (sequelize) => {
  const GroupMember = sequelize.define('GroupMember', {
  }, {
    classMethods: {
      associate: (models) => {
        GroupMember.belongsTo(models.User);
        GroupMember.belongsTo(models.Group);
      }
    }
  });
  return GroupMember;
};
