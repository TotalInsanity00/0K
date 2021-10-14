module.exports = {
    name: 'purge',
    aliases: ['delete', 'clear'],
    description: "This is a purge command!",
    async execute(client, message, args, Discord) {
        try {
            if (args[0]) {
                let num = args[0];
                if (num > 100) {
                    message.reply("Value can't be above 100!");
                } else {
                    message.channel.bulkDelete(num);
                }
            } else {
                message.reply("You need to add a value");
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}