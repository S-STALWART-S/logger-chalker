A simple package to log your data. The main feature of this package is leveling

## Install

```bash
npm i logger-chalker
```

or

```bash
yarn add logger-chalker
```

## How it works

**Import**

```js
const { LoggerChalker } = require("logger-chalker");
```

**Create instance**

```js
const logger = new LoggerChalker();
```

**Set level**

The default levels you can use

```js
{
   none:0
   error: 1,
   warn: 2,
   info: 3,
   debug: 4,
}
```

Use the `setLevel` method to set the desired level

```js
logger.setLevel(logger.levels.levelName);
```

### Examples

To control levels you can use predefined methods or manually with `log` method.

#### Using predefined methods

**When level is `error`**

```js
logger.error("logging error"); // printed
logger.warn("logging warning"); // not printed
logger.info("logging info"); // not printed
logger.debug("logging debug"); // not printed
```

**When level is `warning`**

```js
logger.error("logging error"); // printed
logger.warn("logging warning"); // printed
logger.info("logging info"); // not printed
logger.debug("logging debug"); // not printed
```

**When level is `info`**

```js
logger.error("logging error"); // printed
logger.warn("logging warning"); // printed
logger.info("logging info"); // printed
logger.debug("logging debug"); // not printed
```

**When level is `debug`**

```js
logger.error("logging error"); // printed
logger.warn("logging warning"); // printed
logger.info("logging info"); // printed
logger.debug("logging debug"); // printed
```

#### Using `log` method

This method takes at least 2 arguments. The first one is `level` and the rest is for printing.

```js
logger.log(logger.levels.info, "Hello", "World!"); // Hello World!
```

**Disable all logs**

```js
logger.unsetLevel();
```

or

```js
logger.setLevel(logger.levels.none);
```

#### level customization

You can add new, change orders or remove as your wish.
**_Default Levels_**

```js
{
   none:0
   error: 1,
   warn: 2,
   info: 3,
   debug: 4,
}
```

**Remove level**

```js
logger.removeLevel("info");
```

**_levels_**

```js
{
   none:0
   error: 1,
   warn: 2,
   debug: 4,
}
```

**Update level**

```js
logger.updateLevel("info", 5);
```

**_levels_**

```js
{
   none:0
   error: 1,
   warn: 2,
   debug: 4,
   info: 8,
}
```

**Add new level**

```js
logger.updateLevel("critical", 5);
```

**_levels_**

```js
{
   none:0
   error: 1,
   warn: 2,
   debug: 4,
   critical:5,
   info: 8,
}
```

## Output coloring

You can color the foreground and background of primitive types. Methods starting with `bg` are for background colors. You can use `logger.colors` and `logger.bgColors` to see what colors are available.

```js
logger.bgRed("Hello!").info(); //Hello!
logger.bgBlack("Hello", logger.colors.yellow).info("World!"); //Hello World!
logger.red("Hello").bgBlue("JS", logger.colors.whiteBright).info("World!"); //Hello JS World!
```

#### Access to the coloring module

I use [chalk](https://www.npmjs.com/package/chalk) for coloring. You can access it with `logger.colorizer`. For more information please check [this](https://www.npmjs.com/package/chalk).
