module.exports = function(sequelize, DataTypes) {
  const Pokemon = sequelize.define(
    "Pokemon",
    {
      abilities: DataTypes.STRING,
      attack: DataTypes.INTEGER,
      classification: DataTypes.STRING,
      hp: DataTypes.INTEGER,
      name: DataTypes.STRING,
      pokedex_number: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      type1: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

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
      },
    });
  };

  Pokemon.associate = function(models) {
    //Associating Pokemans to Parties
    // This is a many to many relationship
    Pokemon.belongsToMany(models.Party, {
      through: "Poke_Parties_Map",
      as: "pokemon",
      foreignKey: "pokemonId"
      //other key: 'partyId'
    });
  };

  return Pokemon;
};
