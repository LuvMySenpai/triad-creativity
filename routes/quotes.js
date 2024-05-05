const quotesRoute = require("express").Router();
const getAllQuotesController = require('../controllers/getAllQuotesController');

quotesRoute.post("/", getAllQuotesController);

module.exports = quotesRoute;