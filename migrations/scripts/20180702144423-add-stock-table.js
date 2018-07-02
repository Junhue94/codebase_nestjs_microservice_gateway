module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Stock', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: Sequelize.ENUM,
                values: [
                    'Current',
                    'Watchlist',
                    'Partial Exit',
                    'Exited'
                ]
            },
            entryDate: Sequelize.DATE,
            exitDate: Sequelize.DATE,
            name: Sequelize.STRING,
            sector: Sequelize.ENUM(
                'Basic Material',
                'Consumer Staple',
                'Consumer Discretionary',
                'Energy',
                'Entertainment',
                'Financial',
                'Health Care',
                'Industrial',
                'Property',
                'Service',
                'Technology',
                'Telecommunication',
                'Transportation',
                'Utilities',
                'REIT',
                'Business Trust'
            ),
            country: Sequelize.ENUM(
                'SG',
                'MY',
                'HK',
                'US'
            ),
            currency: Sequelize.ENUM(
                'S$',
                'RM',
                'HKD',
                'US$'
            ),
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

// TODO Add ENum
// https://stackoverflow.com/questions/45437924/drop-and-create-enum-with-sequelize-correctly
// https://github.com/sequelize/sequelize/issues/2554