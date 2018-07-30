module.exports = function(sequelize, DataTypes){
var pokemon = sequelize.define("pokemon", {
    number: {
        type: DataTypes.NUMBER
    },
    name: {
        type: DataTypes.STRING
    },    
    type1: {
        type: DataTypes.STRING
    },
    type2: {
        type: DataTypes.STRING
    },
    total: {
        type: DataTypes.NUMBER
    },
    hp: {
        type: DataTypes.NUMBER
    },
    attack: {
        type: DataTypes.NUMBER
    },
    defense: {
        type: DataTypes.NUMBER
    },
    special_attack: {
        type: DataTypes.NUMBER
    },
    special_defense: {
        type: DataTypes.NUMBER
    },
    speed: {
        type: DataTypes.NUMBER
    },
    generation: {
        type: DataTypes.NUMBER
    },
    legendary: {
        type: DataTypes.BOOLEAN
    },
    sprite: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
});
return pokemon;
}