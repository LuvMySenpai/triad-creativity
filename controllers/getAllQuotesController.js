const data = require('../data/quotes.json');

const getAllQuotesController = (req, res, next) => {
    try {
        const results = data;
        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}

module.exports = getAllQuotesController;