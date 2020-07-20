//
// Configure the default logger which can be used in any other module just via "const logger = require('winston')".
//

const winston = require("winston");

winston.remove(winston.transports.Console);

winston.add(new winston.transports.Console(), {
  level: process.env.LOG_LEVEL || "info",
  timestamp: true,
  handleExceptions: true,
  json: false,
  colorize: true,
});

winston.info("Initialized Winston");

module.exports = winston;
