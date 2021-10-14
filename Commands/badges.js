const fs = require("fs");

module.exports = {
    name: 'badges',
    aliases: ['trainer'],
    description: "This is a twitch command!",
    execute(client, message, args, Discord) {
        try {
            if (message.guildId == "828689284298309642") {

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

                let ID = fs.readFileSync("./Badge Ids/" + userID + ".json");
                let idInfo = JSON.parse(ID);

                if (args[0]) {
                    if (fs.existsSync("./Badge Ids/" + userID + ".json")) {
                        let badges = new Discord.MessageEmbed()
                            .setTitle("Player Card: " + idInfo.info.Name)
                            .setColor(idInfo.info.color)
                            .setThumbnail(idInfo.info.image)
                            .addFields(
                                {
                                    name: "Badges:",
                                    value: idInfo.info.Badges,
                                    inline: true
                                },
                                {
                                    name: "Tag:",
                                    value: idInfo.info.Name,
                                    inline: true
                                },
                                {
                                    name: '\u200B',
                                    value: '\u200B'
                                },
                                {
                                    name: "Setcount:",
                                    value: idInfo.info.Set + "(" + idInfo.info.Percentage + ")",
                                    inline: true
                                },
                                {
                                    name: "Next Gym: ",
                                    value: idInfo.info.nextgym,
                                    inline: true
                                }

                            )
                            .setFooter(idInfo.info.ID)
                            .setTimestamp()
                        if ('champion' in idInfo.info) {
                            badges.setImage("https://media.discordapp.net/attachments/866553182829281290/878706918351331348/Belt.png")
                        }
                        message.channel.send({ embeds: [badges] });

                    } else if (!fs.existsSync("./Badge Ids/" + userID + ".json")) {
                        message.channel.send(userID + " doesn't have a profile. Use ~request to get started.");
                    }

                } else if (!args[0]) {
                    userID = message.author.id;
                    if (fs.existsSync("./Badge Ids/" + userID + ".json")) {
                        let id = fs.readFileSync("./Badge Ids/" + userID + ".json");
                        let idInfo = JSON.parse(id);

                        let badges = new Discord.MessageEmbed()
                            .setTitle("Player Card: " + idInfo.info.Name)
                            .setColor(idInfo.info.color)
                            .setThumbnail(idInfo.info.image)
                            .addFields(
                                {
                                    name: "Badges:",
                                    value: idInfo.info.Badges,
                                    inline: true
                                },
                                {
                                    name: "Tag:",
                                    value: idInfo.info.Name,
                                    inline: true
                                },
                                {
                                    name: '\u200B',
                                    value: '\u200B'
                                },
                                {
                                    name: "Setcount:",
                                    value: idInfo.info.Set + "(" + idInfo.info.Percentage + ")",
                                    inline: true
                                },
                                {
                                    name: "Next Gym: ",
                                    value: idInfo.info.nextgym,
                                    inline: true
                                }
                            )
                            .setFooter(idInfo.info.ID)
                            .setTimestamp()
                        if ('champion' in idInfo.info) {
                            badges.setImage("https://media.discordapp.net/attachments/866553182829281290/878706918351331348/Belt.png")
                        }

                        message.channel.send({ embeds: [badges] });

                    } else if (!fs.existsSync("./Badge Ids/" + userID + ".json")) {
                        message.channel.send("You don't have a profile, use ~request to get started.")
                    }
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