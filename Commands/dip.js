module.exports = {
    name: 'dip',
    aliases: ['bye'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            message.channel.send("https://tenor.com/view/peace-disappear-vanish-gif-9727828");

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}