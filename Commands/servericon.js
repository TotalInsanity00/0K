module.exports = {
    name: 'servericon',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            var serverIcon = message.guild.iconURL();

            const embed = new Discord.MessageEmbed()
                .setColor('#FFD700')
                .setImage(serverIcon)
                .setFooter("Requested by: " + message.author.username)

            message.channel.send({ embeds: [embed] });
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}