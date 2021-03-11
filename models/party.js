module.exports = function(sequelize, DataTypes) {
  const Party = sequelize.define(
    "Party",
    {
      party_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
    },
    {
      timestamps: false
    }
  );
  Party.associate = function(models) {
    //Associating party to User - saying should belong to user
    Party.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Party.belongsToMany(models.Pokemon, {
      through: "Poke_Parties_Map",
      as: "party",
      foreignKey: "partyId"
      //other key: 'partyId'
    });
  };
  return Party;
};
