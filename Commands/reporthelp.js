const fs = require("fs");

module.exports = {
    name: 'reporthelp',
    aliases: ['helpreport'],
    description: "This is a leaders command!",
    execute(client, message, args, Discord) {
        try {
            if (message.guildId == "828689284298309642") {

                let help = new Discord.MessageEmbed()
                    .setTitle("Help embed for the ~report command")
                    .setColor("#fe9034")
                    .setTimestamp()
                    .setDescription("If the player failed, add 'fail' to the end")
                    .addFields(
                        {
                            name: "Command",
                            value: "~report @mention badge setcount (fail)"
                        },
                        {
                            name: "Gym 1",
                            value: "~report @mention frost/poyo/ginko setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 2",
                            value: "~report @mention cabbage/trip setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 3",
                            value: "~report @mention kira/ravioli setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 4",
                            value: "~report @mention akemister/khun setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 5",
                            value: "~report @mention sirlo/prestodust setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 6",
                            value: "~report @mention tasty/jayj setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 7",
                            value: "~report @mention minaho/glades setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Gym 8",
                            value: "~report @mention fantasy/snivy setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Elite 4:1",
                            value: "~report @mention watts/tdpmaze setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Elite 4:2",
                            value: "~report @mention toxic/tap setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Elite 4:3",
                            value: "~report @mention defacaz/total setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Elite 4:4",
                            value: "~report @mention jc/gameboy setcount (fail)",
                            inline: true
                        },
                        {
                            name: "Champion",
                            value: "~report @mention champ setcount (fail)",
                            inline: true
                        },
                    )

                message.channel.send({ embeds: [help] });

            } else {
                message.channel.send("You can't use this in this server!");
            }


        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}