const data = require('../data/quotes.json');

const getAllQuotesController = (req, res, next) => {
    try {
        const results = data;

        const randomQuote = array[Math.floor(Math.random() * results.length)];

        res.json(randomQuote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}

module.exports = getAllQuotesController;