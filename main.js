const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'c!';
const token = 'NzcwNDM2MzI1Mjg3Mzk1NDAx.X5divQ.bi1ee0xPcc09taVNopq2DC6vKO8';
const fs = require('fs');
require('dotenv/config');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const live = 'STREAMING'
const play = 'PLAYING'
const listen = 'LISTENING'
const watch = 'WATCHING'
const comp = 'COMPETING'


client.once('ready', () => {
    console.log('Bot is online and ready to be used. ');
    client.user.setActivity('Try c!help', { type: 'live', url: 'https://twitch.tv/ducciest/'}).catch(console.error); 
    //types available STREAMING, PLAYING, WATCHING, LISTENING
    client.user.setStatus('dnd').catch(console.error);
});
client.on('error', err => {
    console.log(err);
})
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'cursed'){
        client.commands.get('cursed').execute(message, args);
    }

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    if(command === 'insult'){
        client.commands.get('insult').execute(message, args);
    }
    if(command === 'socials'){
        client.commands.get('socials').execute(message, args);
    }
    if(command === 'say'){
    client.commands.get('say').execute(message, args);
    }
    if(command === 'nudes'){
        client.commands.get('nudes').execute(message, args);
    }
    if(command === 'nsfwjoke'){
        client.commands.get('nsfwjoke').execute(message, args);
    }
    if(command === 'sfwjoke'){
        client.commands.get('sfwjoke').execute(message, args);
    }
    if(command === 'rps'){
        client.commands.get('rps').execute(message, args);
    }

});
client.login(token);