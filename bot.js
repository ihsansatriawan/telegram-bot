var config = require('./config')
var yahoo = require('./helpers/yahoo.js');    
var Bot = require('node-telegram-bot-api'),
  bot = new Bot(config.telegramToken, { polling: true });

console.log('bot server started...');



bot.onText(/^\/kabarcuaca (.+)$/, function (msg, match) {
  var location = match[1];

  yahoo.getWeather(location, function weatherCallback(weatherMessage) {
    bot.sendMessage(msg.chat.id, weatherMessage);
  });
});

var kabar = "BAIK BOT!"

bot.onText(/^\/BOT/, function (msg, match) {
  bot.sendMessage(msg.chat.id, kabar).then(function () {
    // reply sent!
  });   
});