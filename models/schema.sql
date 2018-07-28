DROP DATABASE IF EXISTS pokedex;

CREATE DATABASE pokedex;

USE pokedex;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(85) NOT NULL,
    favorite_pokemon1 VARCHAR(90),
    favorite_pokemon2 VARCHAR(90),
    favorite_pokemon3 VARCHAR(90),
    favorite_pokemon4 VARCHAR(90),
    favorite_pokemon5 VARCHAR(90),
    favorite_pokemon6 VARCHAR(90),
    PRIMARY KEY(id)
);