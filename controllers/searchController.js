const data = require('../data/quotes.json');

const searchController = (req, res) => {
  try {
    console.log(req.body);

    const results = data;
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = searchController;
