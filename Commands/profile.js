const fs = require('fs');

module.exports = {
    name: 'profile',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let userID = "";
            if (args[0]) {
                userID = args[0];
                if (userID.charAt(0) === "<") {
                    let user = message.mentions.users.first();
                    if (user) {
                        userID = user.id;
                    }
                }
            } else {
                userID = message.author.id;
            }


            if (fs.existsSync("./profiles/" + userID + ".json")) {
                let id = fs.readFileSync("./profiles/" + userID + ".json");
                let idInfo = JSON.parse(id);

                let embed = new Discord.MessageEmbed()
                    .setColor(idInfo.Color)
                    .addFields(
                        {
                            name: "Tag",
                            value: idInfo.Tag,
                            inline: true
                        },
                        {
                            name: "\u200B",
                            value: "\u200B",
                            inline: true
                        },
                        {
                            name: "\u200B",
                            value: "\u200B",
                            inline: true
                        },
                        {
                            name: "Mains",
                            value: idInfo.Characters.Mains,
                            inline: true
                        },
                        {
                            name: "Secondaries",
                            value: idInfo.Characters.Secondary,
                            inline: true
                        },
                        {
                            name: "Pockets",
                            value: idInfo.Characters.Pockets,
                            inline: true
                        },
                        {
                            name: "Games",
                            value: "Ultimate",
                            inline: true
                        },
                        {
                            name: "Region",
                            value: idInfo.Region,
                            inline: true
                        },
                        {
                            name: "Switch FC",
                            value: idInfo.SwFC,
                            inline: true
                        },
                        {
                            name: "Note",
                            value: idInfo.Note,
                            inline: true
                        },
                    )

                if ('Image' in idInfo) {
                    embed.setThumbnail(idInfo.Image);
                }

                message.channel.send({ embeds: [embed] });

            } else {
                message.channel.send("<@!" + userID + "> doesn't have a profile. Use ~sp Create to get started!");
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}