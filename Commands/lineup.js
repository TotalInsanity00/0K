const fs = require("fs");
module.exports = {
    name: 'lineup',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let id = fs.readFileSync("./data/cb.json");
            let idInfo = JSON.parse(id);

            let time = new Date();
            let date = time.toString().slice(0, 24);

            if (args[0] && !(args[0].toLowerCase() === "remove")) {

                let players = args.slice(0);
                let sorted = players.toString().replace(/,/g, "\n");

                let writeLineup = {
                    Cb: {
                        "Date": date,
                        "Twitch": idInfo.Cb.Twitch,
                        "Room": idInfo.Cb.Room,
                    },
                    Lineup: sorted,
                    info: {
                        "Type": idInfo.info.Type,
                        "Opp": idInfo.info.Opp,
                        "Day": idInfo.info.Day,
                        "EST": idInfo.info.EST,
                        "CST": idInfo.info.CST,
                        "MST": idInfo.info.MST,
                        "PST": idInfo.info.PST,
                        "BST": idInfo.info.BST,
                        "lineup": idInfo.info.lineup
                    }
                }

                fs.writeFileSync("./data/cb.json", JSON.stringify(writeLineup, null, 2), err => {
                    if (err) {
                        console.log(err);
                    }
                });
                message.channel.send("Lineup information has been updated to: " + sorted);

            } else if (args[0] && args[0].toLowerCase() === "remove") {

                if (args[1]) {
                    let list = idInfo.Lineup;
                    if (list.includes(args[1])) {
                        list = list.replace(args[1], "~~" + args[1] + "~~");

                        let writeLineup = {
                            Cb: {
                                "Date": date,
                                "Twitch": idInfo.Cb.Twitch,
                                "Room": idInfo.Cb.Room,
                            },
                            Lineup: list,
                            info: {
                                "Type": idInfo.info.Type,
                                "Opp": idInfo.info.Opp,
                                "Day": idInfo.info.Day,
                                "EST": idInfo.info.EST,
                                "CST": idInfo.info.CST,
                                "MST": idInfo.info.MST,
                                "PST": idInfo.info.PST,
                                "BST": idInfo.info.BST,
                                "lineup": idInfo.info.lineup
                            }
                        }

                        fs.writeFileSync("./data/cb.json", JSON.stringify(writeLineup, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });

                    } else {
                        message.channel.send("No");
                    }

                } else {
                    message.channel.send("Provide a player to remove");
                }

            } else if (!args[0]) {

                let lineup = new Discord.MessageEmbed()
                    .setTitle("Crew Battle vs " + (idInfo.info.Opp).toString().replace(/,/g, " "))
                    .setDescription(idInfo.Cb.Date)
                    .setColor("#135ac5")
                    .setTimestamp()
                    .addFields(
                        {
                            name: "Lineup",
                            value: idInfo.Lineup
                        },
                        {
                            name: "===Information===",
                            value: "\u200B",
                            inline: true
                        },
                        {
                            name: "Twitch",
                            value: idInfo.Cb.Twitch
                        },
                        {
                            name: "Room",
                            value: idInfo.Cb.Room
                        }
                    )

                message.channel.send({ embeds: [lineup] });
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}