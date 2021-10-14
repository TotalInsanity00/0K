module.exports = {
    name: 'roll',
    aliases: ['dice'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let size = "";

            if (args[0]) {
                size = args[0];
            } else if (!args[0]) {
                size = 6;
            }

            if (args[0] > 1000) {
                message.channel.send("You can't have a value over 1000");
            } else {
                let num = Math.round(Math.random() * size);

                message.channel.send("Rolled a " + num);
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}