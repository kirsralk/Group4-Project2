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
        primaryKey: true
      },
      type1: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  Pokemon.associate = function(models) {
    //Associating Pokemans to Parties
    // This is a many to many relationship
    Pokemon.belongsToMany(models.User, {
      through: "Parties",
      as: "pokemon",
      foreignKey: "pokeId"
      //other key: 'userId'
    });
  };

  return Pokemon;
};
