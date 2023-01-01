// const { LoggerChalker } = require("./logger-chalker");

// const logger = new LoggerChalker();

// logger.updateLevel("bug", 5);

// logger.setLevel(logger.levels.error);
// console.log("\nlevel:error");
// logger.error("log error"); //printed
// logger.warn("log warning"); //not printed
// logger.info("log info"); //not printed
// logger.debug("log debug"); //not printed
// logger.log(logger.levels.bug, "log bug"); //not printed

// logger.setLevel(logger.levels.warn);
// console.log("\nlevel:warn");
// logger.error("log error"); //printed
// logger.warn("log warning"); //printed
// logger.info("log info"); //not printed
// logger.debug("log debug"); //not printed
// logger.log(logger.levels.bug, "log bug"); //not printed

// logger.setLevel(logger.levels.info);
// console.log("\nlevel:info");
// logger.error("log error"); //printed
// logger.warn("log warning"); //printed
// logger.info("log info"); //printed
// logger.debug("log debug"); //not printed
// logger.log(logger.levels.bug, "log bug"); //not printed

// logger.setLevel(logger.levels.debug);
// console.log("\nlevel:debug");
// logger.error("log error"); //printed
// logger.warn("log warning"); //printed
// logger.info("log info"); //printed
// logger.debug("log debug"); //printed
// logger.log(logger.levels.bug, "log bug"); //not printed

// logger.setLevel(logger.levels.bug);
// console.log("\nlevel:bug");
// logger.error("log error"); //printed
// logger.warn("log warning"); //printed
// logger.info("log info"); //printed
// logger.debug("log debug"); //printed
// logger.log(logger.levels.bug, "log bug"); //printed

// logger.bgBlack("Hello!", logger.colors.yellow).info("World!");
// logger.red("Hello").bgBlue("JS", logger.colors.whiteBright).info("World!"); //Hello JS World!
