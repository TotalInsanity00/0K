module.exports = {
    name: 'flip',
    aliases: ['backflip'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let num = Math.round(Math.random() * 9);
            if (num >= 0 && num <= 4) {
                message.channel.send("https://media.discordapp.net/attachments/875746850341265459/876731777337659412/Bloody_Backflip.gif");
                message.channel.send("You landed on your face, you missed the backflip and have a bloody nose, embarassing yourself.")
            } else if (num >= 5 && num <= 7) {
                message.channel.send("https://cdn.discordapp.com/attachments/875746850341265459/876730530522087424/Ass_Backflip.gif");
                message.channel.send("You landed on your ass, missing the backflip and embarassing yourself.")
            } else if (num >= 8) {
                message.channel.send("https://media.discordapp.net/attachments/875746850341265459/876729028277579786/Succesfull_Backflip.gif");
                message.channel.send("You landed the backflip! You're the coolest person in town now");
            } else {
                message.channel.send("This isn't working");
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}