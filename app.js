const express = require("express");
const path = require("path");

const bodyParser = require('body-parser');

const errorHandler = require("./middlewares/errorHandler");
const mainRoute = require("./routes/main");
const searchRoute = require("./routes/search");
const quotesRoute = require("./routes/quotes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  bodyParser.json(),
  express.json(),
  errorHandler,
  express.static(path.join(__dirname, "public")),
  mainRoute,
  searchRoute,
  quotesRoute
);

app.listen(PORT, () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`)
);