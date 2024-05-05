// routes/searchRoutes.js

const searchRoute = require("express").Router();
const searchController = require("../controllers/searchController");

// Маршрут для обработки запроса поиска
searchRoute.post("/search", searchController);

module.exports = searchRoute;
