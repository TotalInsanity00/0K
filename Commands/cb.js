const fs = require('fs');
module.exports = {
    name: 'cb',
    aliases: ['crewbattle', 'battle'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            if (message.guildId == "875644093890441226") {

                if (args[0]) {

                    let lineup = args[0].toLowerCase();
                    let id = fs.readFileSync("./data/cb.json");
                    let idInfo = JSON.parse(id);
                    let time = new Date();
                    let dater = time.toString().slice(0, 24);

                    if (args[1]) {

                        let lower = args[1];
                        let char = lower.charAt(0).toUpperCase();
                        let type = char + lower.slice(1);

                        if (args[2]) {

                            let day = args[2];

                            if (args[3]) {

                                let hour = args[3];

                                if (args[4]) {

                                    let min = args[4];

                                    if (args[5]) {

                                        let opp = args.slice(5);
                                        let opponent = opp.toString().replace(/,/g, " ");

                                        const date = new Date();
                                        date.setHours(hour);
                                        date.setMinutes(min);
                                        date.setSeconds(00)
                                        var ESTtime = date.toLocaleTimeString('en-US', { timeZone: "America/New_York" });
                                        var CSTtime = date.toLocaleTimeString('en-US', { timeZone: "America/Chicago" });
                                        var MSTtime = date.toLocaleTimeString('en-US', { timeZone: "America/Denver" });
                                        var PSTtime = date.toLocaleTimeString('en-US', { timeZone: "America/Los_Angeles" });
                                        var BSTtime = date.toLocaleTimeString('en-GB', { timeZone: "Europe/London", hour12: true });

                                        //Time spliting
                                        var EST = ESTtime.slice(0, 4) + ESTtime.slice(7);
                                        var CST = CSTtime.slice(0, 4) + CSTtime.slice(7);
                                        var MST = MSTtime.slice(0, 4) + MSTtime.slice(7);
                                        var PST = PSTtime.slice(0, 4) + PSTtime.slice(7);
                                        var BST = BSTtime.slice(0, 4) + BSTtime.slice(7);

                                        let cbEmbed = new Discord.MessageEmbed()
                                            .setTitle(type + " Crew Battle vs " + opponent)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/875746850341265459/876854172593557504/Smash_Crew_Server_Logo_1.png")
                                            .setColor("#135ac5")
                                            .setTimestamp()
                                            .addFields(
                                                {
                                                    name: "Day: ",
                                                    value: day,
                                                    inline: true
                                                },
                                                {
                                                    name: "Lineup: ",
                                                    value: lineup,
                                                    inline: true
                                                },
                                                {
                                                    name: "\u200B",
                                                    value: "\u200B",
                                                    inline: true
                                                },
                                                {
                                                    name: "EST: ",
                                                    value: EST,
                                                    inline: true
                                                },
                                                {
                                                    name: "CST: ",
                                                    value: CST,
                                                    inline: true
                                                },
                                                {
                                                    name: "MST: ",
                                                    value: MST,
                                                    inline: true
                                                },
                                                {
                                                    name: "PST: ",
                                                    value: PST,
                                                    inline: true
                                                },
                                                {
                                                    name: "BST: ",
                                                    value: BST,
                                                    inline: true
                                                },

                                            )
                                            .setFooter("If this is correct, go to the designated channel and do ~send!")

                                        let writeLineup = {
                                            Cb: {
                                                "Date": dater,
                                                "Twitch": idInfo.Cb.Twitch,
                                                "Room": idInfo.Cb.Room,
                                            },
                                            Lineup: idInfo.Lineup,
                                            info: {
                                                "Type": type,
                                                "Opp": opponent,
                                                "Day": day,
                                                "EST": EST,
                                                "CST": CST,
                                                "MST": MST,
                                                "PST": PST,
                                                "BST": BST,
                                                "lineup": lineup
                                            }
                                        }


                                        fs.writeFileSync("./data/cb.json", JSON.stringify(writeLineup, null, 2), err => {
                                            if (err) {
                                                console.log(err);
                                            }
                                        });
                                        message.channel.send({ embeds: [cbEmbed] });
                                        message.reply("If this is correct, do ~send in the designated channel.");


                                    } else {
                                        message.reply("You need to supply a team!");
                                    }

                                } else {
                                    message.reply("You need to supply a time in minutes");
                                }

                            } else {
                                message.reply("You need to supply a time in hour [24 hour clock; 18 === 6pm EST]");
                            }

                        } else {
                            message.reply("You need to supply a day/date [8/20 / Friday]");
                        }

                    } else {
                        message.reply("You need to supply a type [Ranked, Mock, Inhouse]");
                    }
                } else {
                    message.reply("You need to supply a lineup to right too. [ main , secondary ]")
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