const fs = require("fs");

module.exports = {
    name: 'report',
    aliases: ['Report'],
    description: "This is a twitch command!",
    execute(client, message, args, Discord) {
        try {

            if (message.guildId == "828689284298309642") {

                if (args[0]) {
                    let UserID = args[0];
                    if (args[0].charAt(0) === "<") {
                        let user = message.mentions.users.first();
                        if (user) {
                            UserID = user.id;
                        }
                    }
                    if (fs.existsSync("./Badge Ids/" + UserID + ".json")) {
                        if (!args[3]) {
                            if (args[1]) {
                                if (args[2]) {

                                    let id = fs.readFileSync("./Badges Ids/" + UserID + ".json");
                                    let idInfo = JSON.parse(id);
                                    let gym = fs.readFileSync("./data/gym.json");
                                    let gymInfo = JSON.parse(gym);

                                    //Game count and Percentage
                                    let pSetRec = idInfo.info.Set
                                    let pSetRecW = 0;
                                    let pSetRecL = 0;
                                    if (pSetRec.length < 4) {
                                        pSetRecW = pSetRec.charAt(0);
                                        pSetRecL = pSetRec.charAt(2);

                                    } else {
                                        pSetRecW = pSetRec.slice(0, 2);
                                        pSetRecL = pSetRec.slice(3);
                                    }
                                    let setCountW = args[2].charAt(0);
                                    let setCountL = args[2].charAt(2);
                                    let winSetAdd = Number(setCountW) + Number(pSetRecW);
                                    let lossSetAdd = Number(setCountL) + Number(pSetRecL);
                                    let setRecord = winSetAdd + "-" + lossSetAdd;
                                    let totalGame = Number(winSetAdd) + Number(lossSetAdd);
                                    let percentagew = Math.floor((Number(winSetAdd) / Number(totalGame)) * 100);
                                    let percentage = percentagew + "%";

                                    //Badges
                                    let gymName = args[1].toLowerCase();
                                    let badgetest = "";
                                    let nextGym = "";

                                    switch (gymName) {
                                        case "frost":
                                            badgetest = gymInfo.frost.Badge;
                                            nextGym = gymInfo.frost.NextGym;
                                            break;
                                        case "cabbage":
                                            badgetest = gymInfo.cabbage.Badge;
                                            nextGym = gymInfo.cabbage.NextGym;
                                            break;
                                        case "trip":
                                            badgetest = gymInfo.trip.Badge;
                                            nextGym = gymInfo.trip.NextGym;
                                            break;
                                        case "kira":
                                            badgetest = gymInfo.kira.Badge;
                                            nextGym = gymInfo.kira.NextGym;
                                            break;
                                        case "akemister":
                                            badgetest = gymInfo.akemister.Badge;
                                            nextGym = gymInfo.akemister.NextGym;
                                            break;
                                        case "sirlo":
                                            badgetest = gymInfo.sirlo.Badge;
                                            nextGym = gymInfo.sirlo.NextGym;
                                            break;
                                        case "prestodust":
                                            badgetest = gymInfo.prestodust.Badge;
                                            nextGym = gymInfo.prestodust.NextGym;
                                            break;
                                        case "tasty":
                                            badgetest = gymInfo.tasty.Badge;
                                            nextGym = gymInfo.tasty.NextGym;
                                            break;
                                        case "minaho":
                                            badgetest = gymInfo.minaho.Badge;
                                            nextGym = gymInfo.minaho.NextGym;
                                            break;
                                        case "fantasy":
                                            badgetest = gymInfo.fantasy.Badge;
                                            nextGym = gymInfo.fantasy.NextGym;
                                            break;
                                        case "poyo":
                                            badgetest = gymInfo.poyo.Badge;
                                            nextGym = gymInfo.poyo.NextGym;
                                            break;
                                        case "watts":
                                            badgetest = gymInfo.watts.Badge;
                                            nextGym = gymInfo.watts.NextGym;
                                            break;
                                        case "toxic":
                                            badgetest = gymInfo.toxic.Badge;
                                            nextGym = gymInfo.toxic.NextGym;
                                            break;
                                        case "defacaz":
                                            badgetest = gymInfo.defacaz.Badge;
                                            nextGym = gymInfo.defacaz.NextGym;
                                            break;
                                        case "jc":
                                            badgetest = gymInfo.jc.Badge;
                                            nextGym = gymInfo.jc.NextGym;
                                            break;
                                        case "champion":
                                            badgetest = gymInfo.champ.Badge;
                                            nextGym = gymInfo.champ.NextGym;
                                            break;
                                        case "certify":
                                            badgetest = gymInfo.certify.Badge;
                                            nextGym = gymInfo.certify.NextGym;
                                            break;
                                    }

                                    //Writing to the JSON file
                                    if (gymName == "watts" || gymName == "toxic" || gymName == "defacaz" || gymName == "jc" || gymName == "champion") {
                                        let updatedID = {
                                            info: {
                                                ID: UserID,
                                                Name: idInfo.info.Name,
                                                Badges: idInfo.info.Badges,
                                                Set: setRecord,
                                                Percentage: percentage,
                                                image: idInfo.info.image,
                                                color: idInfo.info.color,
                                                nextgym: nextGym

                                            }
                                        }
                                        fs.writeFileSync("./Badge Ids/" + UserID + ".json", JSON.stringify(updatedID, null, 2), err => {
                                            if (err) {
                                                console.log(err);
                                            }
                                        })
                                        message.channel.send("Information Updated");
                                    } else {
                                        let updatedID = {
                                            info: {
                                                ID: UserID,
                                                Name: idInfo.info.Name,
                                                Badges: idInfo.info.Badges + badgetest,
                                                Set: setRecord,
                                                Percentage: percentage,
                                                image: idInfo.info.image,
                                                color: idInfo.info.color,
                                                nextgym: nextGym

                                            }
                                        }
                                        fs.writeFileSync("./Badge Ids/" + UserID + ".json", JSON.stringify(updatedID, null, 2), err => {
                                            if (err) {
                                                console.log(err);
                                            }
                                        })
                                        message.channel.send("Information Updated");
                                    }

                                    //Writing to battle logs
                                    let Logs = new Discord.MessageEmbed()
                                        .setTitle("Battle Logs")
                                        .setColor("#135ac5")
                                        .setThumbnail(message.guild.iconURL())
                                        .addFields(
                                            {
                                                name: "Player:",
                                                value: idInfo.info.Name
                                            },
                                            {
                                                name: "Badge #",
                                                value: badgetest
                                            },
                                            {
                                                name: "Set Count",
                                                value: args[2]
                                            },
                                            {
                                                name: "Next gym:",
                                                value: nextGym
                                            }
                                        )
                                        .setTimestamp()
                                    client.channels.cache.get('866458806775054376').send({ embeds: [Logs] });

                                } else {
                                    message.channel.send("You need to provide a score!");
                                }

                            } else {
                                message.channel.send("You need a badge to give the user!");
                            }
                        } else if (args[3].toLowerCase() === "fail") {
                            let id = fs.readFileSync("./Badge Ids/" + UserID + ".json");
                            let idInfo = JSON.parse(id);
                            let gym = fs.readFileSync("./data/gym.json");
                            let gymInfo = JSON.parse(gym);

                            //Game count and Percentage
                            let pSetRec = idInfo.info.Set
                            let pSetRecW = 0;
                            let pSetRecL = 0;
                            if (pSetRec.length < 4) {
                                pSetRecW = pSetRec.charAt(0);
                                pSetRecL = pSetRec.charAt(2);

                            } else {
                                pSetRecW = pSetRec.slice(0, 2);
                                pSetRecL = pSetRec.slice(3);
                            }
                            let setCountW = args[2].charAt(0);
                            let setCountL = args[2].charAt(2);
                            let winSetAdd = Number(setCountW) + Number(pSetRecW);
                            let lossSetAdd = Number(setCountL) + Number(pSetRecL);
                            let setRecord = winSetAdd + "-" + lossSetAdd;
                            let totalGame = Number(winSetAdd) + Number(lossSetAdd);
                            let percentagew = Math.floor((Number(winSetAdd) / Number(totalGame)) * 100);
                            let percentage = percentagew + "%";

                            //Badges
                            let gymName = args[1].toLowerCase();
                            let badgetest = "";
                            let nextGym = "";
                            let result = args[2];

                            switch (gymName) {
                                case "frost":
                                    badgetest = gymInfo.frost.Badge;
                                    nextGym = gymInfo.frost.NextGym;
                                    break;
                                case "cabbage":
                                    badgetest = gymInfo.cabbage.Badge;
                                    nextGym = gymInfo.cabbage.NextGym;
                                    break;
                                case "trip":
                                    badgetest = gymInfo.trip.Badge;
                                    nextGym = gymInfo.trip.NextGym;
                                    break;
                                case "kira":
                                    badgetest = gymInfo.kira.Badge;
                                    nextGym = gymInfo.kira.NextGym;
                                    break;
                                case "akemister":
                                    badgetest = gymInfo.akemister.Badge;
                                    nextGym = gymInfo.akemister.NextGym;
                                    break;
                                case "sirlo":
                                    badgetest = gymInfo.sirlo.Badge;
                                    nextGym = gymInfo.sirlo.NextGym;
                                    break;
                                case "prestodust":
                                    badgetest = gymInfo.prestodust.Badge;
                                    nextGym = gymInfo.prestodust.NextGym;
                                    break;
                                case "tasty":
                                    badgetest = gymInfo.tasty.Badge;
                                    nextGym = gymInfo.tasty.NextGym;
                                    break;
                                case "minaho":
                                    badgetest = gymInfo.minaho.Badge;
                                    nextGym = gymInfo.minaho.NextGym;
                                    break;
                                case "glades":
                                    badgetest = gymInfo.glades.Badge;
                                    nextGym = gymInfo.glades.NextGym;
                                    break;
                                case "fantasy":
                                    badgetest = gymInfo.fantasy.Badge;
                                    nextGym = gymInfo.fantasy.NextGym;
                                    break;
                                case "poyo":
                                    badgetest = gymInfo.poyo.Badge;
                                    nextGym = gymInfo.poyo.NextGym;
                                    break;
                                case "watts":
                                    badgetest = gymInfo.watts.Badge;
                                    nextGym = gymInfo.watts.NextGym;
                                    break;
                                case "toxic":
                                    badgetest = gymInfo.toxic.Badge;
                                    nextGym = gymInfo.toxic.NextGym;
                                    break;
                                case "defacaz":
                                    badgetest = gymInfo.defacaz.Badge;
                                    nextGym = gymInfo.defacaz.NextGym;
                                    break;
                                case "jc":
                                    badgetest = gymInfo.jc.Badge;
                                    nextGym = gymInfo.jc.NextGym;
                                    break;
                                case "champion":
                                    badgetest = gymInfo.champ.Badge;
                                    nextGym = gymInfo.champ.NextGym;
                                    break;
                                case "certify":
                                    badgetest = gymInfo.certify.Badge;
                                    nextGym = gymInfo.certify.NextGym;
                                    break;
                            }

                            //Writing to the JSON file
                            let updatedID = {
                                info: {
                                    ID: UserID,
                                    Name: idInfo.info.Name,
                                    Badges: idInfo.info.Badges,
                                    Set: setRecord,
                                    Percentage: percentage,
                                    nextgym: nextGym
                                }
                            }
                            fs.writeFileSync("./Badge Ids/" + UserID + ".json", JSON.stringify(updatedID, null, 2), err => {
                                if (err) {
                                    console.log(err);
                                }
                            })
                            message.channel.send("Information Updated");



                            //Writing to battle logs
                            let Logs = new Discord.MessageEmbed()
                                .setTitle("Battle Logs")
                                .setColor("#EEE94A")
                                .setThumbnail(message.guild.iconURL())
                                .addFields(
                                    {
                                        name: "Player:",
                                        value: (idInfo.info.Name)
                                    },
                                    {
                                        name: "Badge #",
                                        value: (badgetest)
                                    },
                                    {
                                        name: "Set Count",
                                        value: (idInfo.info.Name + " has failed: " + result)
                                    },
                                    {
                                        name: "Next gym:",
                                        value: (nextGym)
                                    }
                                )
                                .setTimestamp()
                            client.channels.cache.get('866458806775054376').send({ embeds: [Logs] });

                        } else {
                            message.channel.send("The argument after the score needs to be 'fail'!");
                        }
                    } else {
                        message.channel.send("Invalid userID! Please provide a correct ID or have that user make one!");
                    }
                } else {
                    message.channel.send("You need someone to write too!")
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