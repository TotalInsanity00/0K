module.exports = {
    name: 'here',
    aliases: ['present'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            if (message.guildId == "875644093890441226") {

                let hereEmbed = new Discord.MessageEmbed()
                    .setTitle(message.author.username + " is here!")
                    .setColor("#135ac5")
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

                if (message.member.roles.cache.has('875651998874214420') || message.member.roles.cache.has('875652093283807243')) {
                    //Leader or Advisor

                    message.channel.send({ embeds: [hereEmbed] });

                }
                else if (message.member.roles.cache.has('875652165509742602')) {
                    //Crew member
                    message.channel.send({ embeds: [hereEmbed] });
                    client.channels.cache.get('876879618827771974').send({ content: "<@&875651998874214420> <@&875652093283807243>", embeds: [hereEmbed] });
                } else {
                    //Anyone else
                    message.channel.send("You cannot use this command");
                }


            } else {
                message.channel.send("You can't use this in this server!");
            }


        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}