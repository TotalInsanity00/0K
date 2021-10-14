module.exports = {
    name: 'coin',
    aliases: ['cointoss'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let num = Math.round(Math.random() * 1);

            message.channel.send("Tossed a coin... <a:Flip:895363918371905589> ")
                .then(msg => {
                    setTimeout(() => msg.delete(), 3000);
                })

            if (num === 0) {
                setTimeout(() => message.channel.send("You got heads! <:0KHeads:895362069145215047>"), 3000);
            } else if (num === 1) {
                setTimeout(() => message.channel.send("You got tails! <:0KTails:895362047028658176>"), 3000);
            } else {
                setTimeout(() => message.channel.send("This isn't working"), 3000);
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}