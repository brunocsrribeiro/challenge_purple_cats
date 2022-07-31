module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    account: DataTypes.INTEGER,
    holder: DataTypes.STRING,
    password: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Customers',
  });

  return Customer;
}