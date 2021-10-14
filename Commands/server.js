module.exports = {
    name: 'server',
    aliases: ['servers', 'link', 'links'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let scs = "http://www.smashcrewserver.com/";
            let overflow = "https://discord.gg/jzJwKfBBFA";
            let community = "https://discord.gg/GWvE4A5Gyv";

            let inviteEmbed = new Discord.MessageEmbed()
                .setTitle("Invite List")
                .setColor("#4f5d7f")
                .setTimestamp()
                .addFields(
                    {
                        name: "SCS",
                        value: scs
                    },
                    {
                        name: "SCS Overflow",
                        value: overflow
                    },
                    {
                        name: "Community Server",
                        value: community
                    },
                )
                .setFooter("If you want your server added, ping <@164555929252134912>")

            if (!args[0]) {
                message.channel.send({ embeds: [inviteEmbed] });
            }
            else if (args[0]) {
                if (args[0].toLowerCase() === "scs") {
                    message.channel.send(scs);
                } else if (args[0].toLowerCase() === "overflow") {
                    message.channel.send(overflow);
                } else if (args[0].toLowerCase() === "community") {
                    message.channel.send(community);
                } else {
                    message.channel.send("That server doesn't exist. These are the servers that exist right now: [scs, overflow, community]");
                }
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}