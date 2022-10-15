const chalk = require("chalk");
const { LoggerChalker } = require("./logger-chalker");

const logger = new LoggerChalker("info");
global.logger = logger;
