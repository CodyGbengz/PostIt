
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      validate: {
        is: /^[a-z0-9_-]+$/
      }
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 50]
        }
      }
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsToMany(models.Group, {
          as: 'GroupMembers',
          through: 'GroupMembers',
          foreignKey: 'userId'
        });
      }
    }
  });
  return User;
};
