DROP DATABASE IF EXISTS pokemon_db;
CREATE DATABASE pokemon_db;
USE pokemon_db;

CREATE TABLE pokemonDataset (abilities VARCHAR(100) NOT NULL, against_bug INT NOT NULL, against_dark INT NOT NULL, against_dragon INT NOT NULL, against_electric INT NOT NULL, against_fairy INT NOT NULL, against_fight INT NOT NULL, against_fire INT NOT NULL, against_flying INT NOT NULL, against_ghost INT NOT NULL);