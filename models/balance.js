module.exports = (sequelize, DataTypes) => {
  const Balance = sequelize.define('Balance', {
    balance: {
      type: DataTypes.DECIMAL(10,2),
      defaultValue: 0,
    },
    customerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'Balances',
    underscored: true,
  });

  return Balance;
};
