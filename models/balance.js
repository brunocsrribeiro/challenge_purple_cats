module.exports = (sequelize, DataTypes) => {
  const Balance = sequelize.define('Balance', {
    balance: DataTypes.DECIMAL(10,2),
    customerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'Balances',
    underscored: true,
  });

  Balance.associate = (models) => {
    Balance.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      as: 'customers'
    });
  };

  return Balance;
};
