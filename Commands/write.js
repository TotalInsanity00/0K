const fs = require("fs");
module.exports = {
    name: 'write',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            if (message.guildId == "875644093890441226") {

                let id = fs.readFileSync("./data/cb.json");
                let idInfo = JSON.parse(id);

                let time = new Date();
                let date = time.toString().slice(0, 24);

                if (args[0]) {
                    let twitch = "";
                    twitch = args[0];
                    if (twitch.charAt(0) === "h") {
                        twitch = args[0];
                    } else {
                        twitch = "https://twitch.tv/" + args[0];
                    }
                    if (args[1]) {

                        let room = args[1];


                        let writeLineup = {
                            Cb: {
                                "Date": date,
                                "Twitch": twitch,
                                "Room": room,
                            },
                            Lineup: idInfo.Lineup,
                            info: {
                                "Type": idInfo.info.Type,
                                "Opp": idInfo.info.Opp,
                                "Day": idInfo.info.Day,
                                "EST": idInfo.info.EST,
                                "CST": idInfo.info.CST,
                                "MST": idInfo.info.MST,
                                "PST": idInfo.info.PST,
                                "BST": idInfo.info.BST
                            }
                        }

                        fs.writeFileSync("./data/cb.json", JSON.stringify(writeLineup, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Crew battle data has been updated");
                    } else {
                        message.channel.send("You need to supply a valid Room Number");
                    }
                } else {
                    message.channel.send("You need to supply a valid twitch; Either a link or a channel name will work ");
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