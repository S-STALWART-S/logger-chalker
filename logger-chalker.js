const chalk = require("chalk");

const colors = {
	black: "black",
	blue: "blue",
	cyan: "cyan",
	green: "green",
	greenBright: "greenBright",
	red: "red",
	redBright: "redBright",
	white: "white",
	yellow: "yellow",
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
	constructor(level) {
		this.#level = level;
		this.colorizer = chalk;
		this.colors = colors;
		this.bgColors = bgColors;
		this.levels = {
			error: "error",
			warn: "warn",
			info: "info",
			debug: "debug",
		};
	}
	#logs = [];
	#level = "";
	#levels = ["error", "warn", "info", "debug"];

	setLevel(level) {
		this.#level = level;
	}
	removeLevel() {
		this.setLevel("");
	}

	#canSend(level) {
		if (!level) return false;
		if (!this.levels[level]) return false;
		return this.#levels.indexOf(this.#level) >= this.#levels.indexOf(level);
	}

	clear() {
		console.clear();
		return this;
	}

	log(level, ...text) {
		this.#stdOut(level, text, "log");
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
	dir(object, options) {
		console.dir(object, options);
	}

	#clearLogs() {
		this.#logs = [];
	}
	#stdOut(level, text, logType) {
		if (!this.#canSend(level)) {
			this.#clearLogs();
			return;
		}

		console[logType](...this.#logs, ...text);
		this.#clearLogs();
	}

	#colorCallbackMaker(colorKey) {
		const color = colors[colorKey];

		return (...data) => {
			data.forEach((value) => {
				if (typeof value === "object") {
					this.#logs.push(value);
				} else {
					this.#logs.push(chalk[color](value));
				}
			});
			return this;
		};
	}
	#bgColorCallbackMaker(bgColorKey) {
		const bgColor = bgColors[bgColorKey];

		return (data, textColor = colors.white) => {
			if (typeof data === "object") {
				this.#logs.push(data);
			} else {
				this.#logs.push(chalk[bgColor](chalk[textColor](data)));
			}
			return this;
		};
	}

	//* Colors =>
	black = this.#colorCallbackMaker("black");
	blackBright = this.#colorCallbackMaker("blackBright");
	blue = this.#colorCallbackMaker("blue");
	blueBright = this.#colorCallbackMaker("blueBright");
	cyan = this.#colorCallbackMaker("cyan");
	cyanBright = this.#colorCallbackMaker("cyanBright");
	green = this.#colorCallbackMaker("green");
	greenBright = this.#colorCallbackMaker("greenBright");
	magenta = this.#colorCallbackMaker("magenta");
	magentaBright = this.#colorCallbackMaker("magentaBright");
	red = this.#colorCallbackMaker("red");
	redBright = this.#colorCallbackMaker("redBright");
	white = this.#colorCallbackMaker("white");
	whiteBright = this.#colorCallbackMaker("whiteBright");
	yellow = this.#colorCallbackMaker("yellow");
	yellowBright = this.#colorCallbackMaker("yellowBright");

	//* BG Colors =>
	bgBlack = this.#bgColorCallbackMaker("bgBlack");
	bgBlackBright = this.#bgColorCallbackMaker("bgBlackBright");
	bgBlue = this.#bgColorCallbackMaker("bgBlue");
	bgBlueBright = this.#bgColorCallbackMaker("bgBlueBright");
	bgCyan = this.#bgColorCallbackMaker("bgCyan");
	bgCyanBright = this.#bgColorCallbackMaker("bgCyanBright");
	bgGreen = this.#bgColorCallbackMaker("bgGreen");
	bgGreenBright = this.#bgColorCallbackMaker("bgGreenBright");
	bgMagenta = this.#bgColorCallbackMaker("bgMagenta");
	bgMagentaBright = this.#bgColorCallbackMaker("bgMagentaBright");
	bgRed = this.#bgColorCallbackMaker("bgRed");
	bgRedBright = this.#bgColorCallbackMaker("bgRedBright");
	bgWhite = this.#bgColorCallbackMaker("bgWhite");
	bgWhiteBright = this.#bgColorCallbackMaker("bgWhiteBright");
	bgYellow = this.#bgColorCallbackMaker("bgYellow");
	bgYellowBright = this.#bgColorCallbackMaker("bgYellowBright");
}

module.exports = { LoggerChalker };
