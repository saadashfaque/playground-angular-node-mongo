/**
/* Main app module
/*/

const express = require("express"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  cors = require("cors"),
  path = require("path");

const logger = require("util/logger");

const app = express();

app.use(
  require("morgan")("combined", {
    stream: {
      write: (message, encoding) => {
        logger.info(message);
      },
    },
  })
);

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride());
app.use(cors());

// All routes get mounted below the 'api' path
app.use("/api", require("routes/index.routes"));

// Point static path to dist
app.use(express.static(path.join(__dirname, "../../frontend/dist/frontend")));
// Home route to serve the index file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/frontend/index.html"));
});

app.use((err, req, res, next) => {
  logger.error("error", err);

  res.status(err.status || 500);
  res.send(err.showMessage ? err.message : "error");
});

module.exports = app;
