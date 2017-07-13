
export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Message.associate = (models) => {
    Message.belongsTo(models.Group, {
      foreignKey: 'groupId',
      as: 'group'
    });
  };

  Message.associate = (models) => {
    Message.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Message;
};
