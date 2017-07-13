
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
      notNull: true,
      validate: {
        len: {
          is: /^[a-z0-9_-]+$/,
          args: [6, 50]
        }
      }
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      as: 'member',
      through: 'GroupMembers',
      foreignKey: 'userId'
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Message, { foreignKey: 'userId', as: 'message' });
  };

  return User;
};
