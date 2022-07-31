module.exports = (sequelize, DataTypes) => {
  const Balance = sequelize.define('Balance', {
    balance: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  return Balance;
}