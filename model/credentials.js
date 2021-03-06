/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credentials', {
    idUser: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'credentials',
    freezeTableName: true,
    timestamps: false
  });
};
