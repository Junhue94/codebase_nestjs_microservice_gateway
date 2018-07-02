module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Stock', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            type: Sequelize.STRING,
            entryDate: Sequelize.DATE,
            exitDate: Sequelize.DATE,
            name: Sequelize.STRING,
            sector: Sequelize.STRING,
            country: Sequelize.STRING,
            currency: Sequelize.STRING,
            priceBuy: Sequelize.FLOAT,
            priceSell: Sequelize.FLOAT,
            priceProfitTarget: Sequelize.FLOAT,
            priceStopLoss: Sequelize.FLOAT,
            quantityBuy: Sequelize.INTEGER,
            quantitySell: Sequelize.INTEGER,
            totalDividend: Sequelize.FLOAT,
            totalCapital: Sequelize.FLOAT,
            capitalReturn: Sequelize.FLOAT,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            isDeleted: Sequelize.BOOLEAN
        });
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Stock');
    }
};
