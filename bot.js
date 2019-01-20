const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", async () => {
    
  bot.user.setActivity(`testbot`, {type: "WATCHING"});

});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "logs").sendMessage(member.toString() + ' has joined the server.');
});

bot.on("guildMemberRemove", function(member) {
  member.guild.channels.find("name", "logs").sendMessage(member.toString() + ' has left the server.');
});

bot.on('message', message => {
    if (message.content === 'l-ping') {
    	message.reply('pong');
  	}
});

bot.on('message', message => {
    if (message.content === 'l-detail') {
        message.reply('This bot requires a #log channel.\n\nMade by iben#0001. © Logger 2019')

bot.login(process.env.BOT_TOKEN);
