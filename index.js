const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_PRESENCES]
});
require('dotenv').config();
const fs = require('fs');
const memberCounter = require('./counters/member-counter');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.on('ready', () => {
    memberCounter(client);
});


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);