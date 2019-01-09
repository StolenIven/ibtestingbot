const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", async () => {
    
  bot.user.setActivity(`testbot`, {type: "WATCHING"});

});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "logs").sendMessage(member.toString() + " has joined the server.");
});

bot.on("guildMemberRemove", function(member) {
  member.guild.channels.find("name", "logs").sendMessage(member.toString() + " has left the server.");
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

bot.login(process.env.BOT_TOKEN);
