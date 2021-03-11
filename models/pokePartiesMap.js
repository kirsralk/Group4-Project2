module.exports = function(sequelize, DataTypes) {
  const Poke_Parties_Map = sequelize.define(
    "Poke_Parties_Map",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      pokemonId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      partyId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Poke_Parties_Map.associate = function(models) {
    // associations can be defined here
  };
  return Poke_Parties_Map;
};
