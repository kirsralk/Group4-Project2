module.exports = function(sequelize, DataTypes) {
  const Parties = sequelize.define(
    "Parties",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: DataTypes.INTEGER,
        allowNull: false
      },
      pokeId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Parties.associate = function(models) {
    // associations can be defined here
  };
  return Parties;
};
