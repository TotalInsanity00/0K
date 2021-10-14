const { Guild } = require("discord.js");

module.exports = {
    name: 'icon',
    aliases: ['pfp'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            let userID = "";
            if (args[0]) {
                userID = args[0];
                if (userID.charAt(0) === "<") {
                    let user = message.mentions.members.first();
                    if (user) {
                        userID = user.id;
                    }
                }
            } else {
                userID = message.author.id;
            }

            let image = client.users.cache.get(userID).displayAvatarURL({ dynamic: true });

            const embed = new Discord.MessageEmbed()
                .setColor('#135ac5')
                .setImage(image)
                .setFooter("Requested by: " + message.author.username)

            message.channel.send({ embeds: [embed] });

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}