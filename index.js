
const commando = require('discord.js-commando');
const bot = new commando.CommandoClient({
    commandPrefix: ";"
});

bot.registry.registerGroup('nti', 'NTI_main');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.once('ready', () =>{
    console.log('Bot is online!');
});

bot.login('Your token here');


