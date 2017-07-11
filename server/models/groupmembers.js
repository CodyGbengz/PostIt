export default (sequelize, DataTypes) => {
  const groupMember = sequelize.define('members', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {

      }
    }
  });
  return groupMember;
};
