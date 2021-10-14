module.exports = {
    name: 'countdown',
    aliases: ['count'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let duration = 8;
            let interval = setInterval(() => {
                message.channel.send("Time: " + Number(--duration));
                if (duration == 0) {
                    clearInterval(interval);
                }
            }, 1000)

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}