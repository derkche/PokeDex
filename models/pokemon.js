module.exports = function(sequelize, DataTypes){
    var Pokemon = sequelize.define("Pokemon", {
        number: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        hp: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        attack: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        defense: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        special_attack: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        special_defense: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        speed: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        generation: {
            type: DataTypes.INTEGER,
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