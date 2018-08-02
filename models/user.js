module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		pokemon1: {
			type: DataTypes.STRING
		},
		pokemon2: {
			type: DataTypes.STRING
		},
		pokemon3: {
			type: DataTypes.STRING
		},
		pokemon4: {
			type: DataTypes.STRING
		},
		pokemon5: {
			type: DataTypes.STRING
		},
		pokemon6: {
			type: DataTypes.STRING
		}
		
    });
    return User;
};