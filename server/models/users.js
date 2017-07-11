
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
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Enter a valid email address'
        },
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
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Message, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
        User.belongsToMany(models.Group, {
          through: 'UserGroup',
          foreignKey: 'userId'
        });
      }
    }
  });
  return User;
};
