var dbd = require(`aoi.js`);
var fs = require("fs");
var bot = new aoi.Bot({
  token: process.env.TOKEN,
  prefix: "/"
});
bot.onMessage();
bot.loadCommands(`./komutlar/`);
