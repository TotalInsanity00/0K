const fs = require("fs");

module.exports = {
    name: 'pika',
    aliases: ['pikamu', "pmu"],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            if (message.author.id == "164555929252134912") {

                if (args[0]) {

                    let character = args[0].toLowerCase();

                    if (fs.existsSync("./pikaChar/" + character + ".json")) {

                        let info = fs.readFileSync("./pikaChar/" + character + ".json");
                        let charInfo = JSON.parse(info);

                        //General Information
                        let stock = charInfo.general.character;
                        let notes = charInfo.general.notes;
                        let name = charInfo.general.name;
                        let color = charInfo.general.color;

                        //Pikachu
                        let mu = charInfo.pikachu.mu;
                        let bans = charInfo.pikachu.stages.ban;
                        let keeps = charInfo.pikachu.stages.keep;
                        let neutral = charInfo.pikachu.stages.neutral;
                        let bridges = charInfo.pikachu.upair.works;
                        let percentageBridges = charInfo.pikachu.upair.percent;
                        let killConfirm = charInfo.pikachu.kill.percent;

                        let pikaMu = new Discord.MessageEmbed()
                            .setTitle("Pikachu Matchup for: " + name)
                            .setColor(color)
                            .addFields(
                                {
                                    name: "Character:",
                                    value: stock,
                                    inline: true
                                },
                                {
                                    name: "Matchup:",
                                    value: mu,
                                    inline: true
                                },
                                {
                                    name: "\u200B",
                                    value: "\u200B",
                                    inline: true
                                },
                                {
                                    name: "Ban Stages:",
                                    value: bans,
                                    inline: true
                                },
                                {
                                    name: "Keep Stages:",
                                    value: keeps,
                                    inline: true
                                },
                                {
                                    name: "Neutral Stages:",
                                    value: neutral,
                                    inline: true
                                },
                                {
                                    name: "UpAir Bridges:",
                                    value: bridges,
                                    inline: true,
                                },
                                {
                                    name: "Up air Bridges Percents:",
                                    value: percentageBridges,
                                    inline: true
                                },
                                {
                                    name: "DI in Kill Confirm:",
                                    value: killConfirm,
                                    inline: false
                                }
                            )
                            .setFooter("Notes: " + notes)


                        message.channel.send({ embeds: [pikaMu] });

                    } else {
                        message.channel.send("This Character: " + args[0] + ", doesn't exist in the database.");
                    }

                } else {
                    message.channel.send("You need to provide a character!")
                }

            } else {
                message.channel.send("This is a work in progress.");
            }

        } catch (err) {
            console.log(err);
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}