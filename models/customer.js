module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    account: DataTypes.INTEGER,
    holder: DataTypes.STRING,
    password: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'Customers',
  });

  Customer.associate = (models) => {
    Customer.hasOne(models.Balance, {
      foreignKey: 'customerId',
      as: 'balances',
    });
  };

  return Customer;
};
