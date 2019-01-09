const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", async () => {
    
  bot.user.setActivity(`testbot`, {type: "WATCHING"});

});

let sc = message.guild.memberCount

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "logs").sendMessage(member.toString() + ' has joined the server.\nServer Count: ${sc}');
});

let sc = message.guild.memberCount

bot.on("guildMemberRemove", function(member) {
  member.guild.channels.find("name", "logs").sendMessage(member.toString() + ' has left the server.\nServer Count: ${sc}');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

bot.login(process.env.BOT_TOKEN);
