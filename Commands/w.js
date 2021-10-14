module.exports = {
    name: 'w',
    aliases: ['dub'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            if (args[0]) {
                let person = args.slice(0).toString().replace(/,/g, " ");
                let w = "🇼";

                let msg = await message.channel.send("React with 🇼 to give a W to " + person);
                msg.react(w);
            } else {
                message.channel.send("What do you want");
            }


        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}