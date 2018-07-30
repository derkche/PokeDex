module.exports = function(sequelize, DataTypes){
	var users = sequelize.define("users", {
		name: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false,
			}
		}
		// add in a foreign key for each of the six pokemon that a user chooses.
    });
    return users;
};