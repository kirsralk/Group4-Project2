// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route to retrieve random wild pokemon
  app.get("/api/pokemon", (req, res) => {
    db.Pokemon.findOne({
      where: {
        pokedex_number: Math.floor(Math.random() * 151)
      }
    }).then(dbPokemon => {
      res.json(dbPokemon);
    });
  });

  // Route to retrieve starter pokemon
  // app.get("/api/pokemon:id", (req, res) => {
  //   db.Pokemon.findOne({
  //     where: {
  //       pokedex_number: req.params.id
  //     }
  //   }).then(dbPokemon => {
  //     res.json(dbPokemon);
  //   });
  // });
}; //Close module export
