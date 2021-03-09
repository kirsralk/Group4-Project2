// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route to retrieve pokemon

  app.get("/api/pokemon", (req, res) => {

    db.Pokemon.findOne({
      where: {
        pokedex_number: Math.floor(Math.random() * 151)
      }
    }).then(dbPokemon => {
      res.json(dbPokemon);
    });
  });

}; //Close module export
