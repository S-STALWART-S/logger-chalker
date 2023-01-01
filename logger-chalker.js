const chalk = require("chalk");
const { customTypeof } = require("custom-typeof");

const colors = {
	black: "black",
	blackBright: "blackBright",
	blue: "blue",
	blueBright: "blueBright",
	cyan: "cyan",
	cyanBright: "cyanBright",
	green: "green",
	greenBright: "greenBright",
	magenta: "magenta",
	magentaBright: "magentaBright",
	red: "red",
	redBright: "redBright",
	white: "white",
	whiteBright: "whiteBright",
	yellow: "yellow",
	yellowBright: "yellowBright",
};

const bgColors = {
	bgBlack: "bgBlack",
	bgBlackBright: "bgBlackBright",
	bgBlue: "bgBlue",
	bgBlueBright: "bgBlueBright",
	bgCyan: "bgCyan",
	bgCyanBright: "bgCyanBright",
	bgGreen: "bgGreen",
	bgGreenBright: "bgGreenBright",
	bgMagenta: "bgMagenta",
	bgMagentaBright: "bgMagentaBright",
	bgRed: "bgRed",
	bgRedBright: "bgRedBright",
	bgWhite: "bgWhite",
	bgWhiteBright: "bgWhiteBright",
	bgYellow: "bgYellow",
	bgYellowBright: "bgYellowBright",
};

class LoggerChalker {
	#logs = [];
	#level = 0;
	levels = {
		none: 0,
		error: 1,
		warn: 2,
		info: 3,
		debug: 4,
	};

	constructor() {
		this.colorizer = chalk;
		this.colors = colors;
		this.bgColors = bgColors;
	}

	updateLevel(name, value) {
		this.#checkLevelValue(value);
		this.levels[name] = value;
		return this;
	}
	removeLevel(name) {
		delete this.levels[name];
		return this;
	}
	#checkLevelValue(sentLevelValue) {
		if (customTypeof.isNotNumber(sentLevelValue)) {
			throw {
				message: "level value should be an number",
				sentLevelValue,
			};
		}
	}

	setLevel(level) {
		this.#checkLevelValue(level);
		this.#level = level;
	}
	unsetLevel() {
		this.setLevel(this.levels.none);
	}

	log(level, ...text) {
		this.#stdOut(level, text, "log");
	}
	dir(level, item, options) {
		this.#stdOut(level, item, "dir", options);
	}
	info(...text) {
		this.#stdOut(this.levels.info, text, "info");
	}
	error(...text) {
		this.#stdOut(this.levels.error, text, "error");
	}
	warn(...text) {
		this.#stdOut(this.levels.warn, text, "warn");
	}
	debug(...text) {
		this.#stdOut(this.levels.debug, text, "debug");
	}
	clear() {
		console.clear();
		return this;
	}
	clearLogs() {
		this.#logs = [];
	}

	#stdOut(level, text, logMethod, options) {
		if (!this.#canSend(level)) {
			this.clearLogs();
			return;
		}

		if (logMethod === "dir") {
			console.log(...this.#logs);
			console.dir(text, options);
		} else {
			console[logMethod](...this.#logs, ...text);
		}

		this.clearLogs();
	}

	#canSend(level) {
		if (customTypeof.isNotNumber(level)) return false;

		return this.#level >= level;
	}

	#colorMaker(colorKey) {
		return (...data) => {
			data.forEach((value) => {
				if (typeof value === "object") {
					this.#logs.push(value);
				} else {
					this.#logs.push(this.colorizer[colorKey](value));
				}
			});
			return this;
		};
	}
	#bgColorMaker(bgColorKey) {
		return (data, textColor = colors.white) => {
			if (typeof data === "object") {
				this.#logs.push(data);
			} else {
				this.#logs.push(
					this.colorizer[bgColorKey](this.colorizer[textColor](data)),
				);
			}
			return this;
		};
	}

	//* Colors =>
	black = this.#colorMaker("black");
	blackBright = this.#colorMaker("blackBright");
	blue = this.#colorMaker("blue");
	blueBright = this.#colorMaker("blueBright");
	cyan = this.#colorMaker("cyan");
	cyanBright = this.#colorMaker("cyanBright");
	green = this.#colorMaker("green");
	greenBright = this.#colorMaker("greenBright");
	magenta = this.#colorMaker("magenta");
	magentaBright = this.#colorMaker("magentaBright");
	red = this.#colorMaker("red");
	redBright = this.#colorMaker("redBright");
	white = this.#colorMaker("white");
	whiteBright = this.#colorMaker("whiteBright");
	yellow = this.#colorMaker("yellow");
	yellowBright = this.#colorMaker("yellowBright");

	//* BG Colors =>
	bgBlack = this.#bgColorMaker("bgBlack");
	bgBlackBright = this.#bgColorMaker("bgBlackBright");
	bgBlue = this.#bgColorMaker("bgBlue");
	bgBlueBright = this.#bgColorMaker("bgBlueBright");
	bgCyan = this.#bgColorMaker("bgCyan");
	bgCyanBright = this.#bgColorMaker("bgCyanBright");
	bgGreen = this.#bgColorMaker("bgGreen");
	bgGreenBright = this.#bgColorMaker("bgGreenBright");
	bgMagenta = this.#bgColorMaker("bgMagenta");
	bgMagentaBright = this.#bgColorMaker("bgMagentaBright");
	bgRed = this.#bgColorMaker("bgRed");
	bgRedBright = this.#bgColorMaker("bgRedBright");
	bgWhite = this.#bgColorMaker("bgWhite");
	bgWhiteBright = this.#bgColorMaker("bgWhiteBright");
	bgYellow = this.#bgColorMaker("bgYellow");
	bgYellowBright = this.#bgColorMaker("bgYellowBright");
}

module.exports = { LoggerChalker };
