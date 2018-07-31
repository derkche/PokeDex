module.exports = function(sequelize, DataTypes){
    var Pokemon = sequelize.define("pokemon", {
        number: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },    
        type1: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        type2: {
            type: DataTypes.STRING,
            validate: {
                allowNull: true,
            }
        },
        total: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        hp: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        attack: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        defense: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        special_attack: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        special_defense: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        speed: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        generation: {
            type: DataTypes.NUMBER,
            validate: {
                allowNull: false,
            }
        },
        legendary: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        sprite: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        }
    });
    return Pokemon;
    }