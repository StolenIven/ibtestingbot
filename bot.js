const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const m = require("moment-duration-format");
const ms = require("ms")
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content == 'uptime') {
        message.channel.send(duration)
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
