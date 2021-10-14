const { MessageManager } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'setchamp',
    aliases: ['champ', 'champset'],
    description: "This is a leaders command!",
    execute(client, message, args, Discord) {
        try {

            let prevChampID = message.author.id
            let champid = fs.readFileSync("./Badge Ids/" + prevChampID + ".json");
            let champdata = JSON.parse(champid);
            if ('champion' in champdata.info) {
                let prevChamp = {
                    "info": {
                        "ID": champdata.info.ID,
                        "Name": champdata.info.Name,
                        "Badges": champdata.info.Badges,
                        "Set": champdata.info.Set,
                        "Percentage": champdata.info.Percentage,
                        "color": champdata.info.color,
                        "image": champdata.info.image,
                    }
                }

                fs.writeFileSync("./Badge Ids/" + prevChampID + ".json", JSON.stringify(prevChamp, null, 2), err => {
                    if (err) {
                        console.log(err);
                    }
                })


                let UserID = "";
                if (args[0]) {
                    if (args[0].charAt(0) === "<") {
                        let user = message.mentions.users.first();
                        let target = message.mentions.members.first();
                        if (user) {
                            UserID = user.id;
                        }
                        let controldata = fs.readFileSync("./Badge Ids/" + UserID + ".json");
                        let control = JSON.parse(controldata);

                        let champ = {
                            "info": {
                                "ID": control.info.ID,
                                "Name": control.info.Name,
                                "Badges": control.info.Badges,
                                "Set": control.info.Set,
                                "Percentage": control.info.Percentage,
                                "color": control.info.color,
                                "image": control.info.image,
                                "img": "https://media.discordapp.net/attachments/866553182829281290/878703070454882354/Belt.png",
                                "champion": "true",
                            }
                        }

                        fs.writeFileSync("./Badge Ids/" + UserID + ".json", JSON.stringify(champ, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        })

                        target.roles.add('866323367777665034');
                        message.channel.send("Information Updated");
                    } else if (args[0] && !args[0].charAt(0) === "<") {
                        message.channel.send("You need to mention a player");
                    }
                } else {
                    message.channel.send("You need to mention someone!");
                }
            } else {
                message.channel.send("You need to be the champion to use this!");
            }
        } catch (err) {
            client.channels.cache.get('875748868019605514').send('<@!164555929252134912> ' + err);
            message.channel.send("Oh no! An error occured :( my creator has been notified and is fixing it!");
        }
    }
}