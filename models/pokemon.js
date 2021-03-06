module.exports = function(sequelize, DataTypes) {
  const Pokemon = sequelize.define(
    "Pokemon",
    {
      abilites: DataTypes.STRING,
      attack: DataTypes.INTEGER,
      classification: DataTypes.STRING,
      hp: DataTypes.INTEGER,
      name: DataTypes.STRING,
      pokedex_number: DataTypes.INTEGER,
      type1: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Pokemon;
};
