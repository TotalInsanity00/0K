module.exports = {
    name: 'f',
    aliases: ['fail'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let person = args.slice(0).toString().replace(/,/g, " ");
            let f = "🇫";

            let msg = await message.channel.send("React with 🇫 to pay respects to " + person);
            msg.react(f);

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}