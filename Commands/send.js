const fs = require('fs');

module.exports = {
    name: 'send',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            if (message.guildId == "875644093890441226") {
                let id = fs.readFileSync("./data/cb.json");
                let idInfo = JSON.parse(id);
                let second = fs.readFileSync("./data/secondary.json");
                let secdata = JSON.parse(second);
                let main = fs.readFileSync("./data/main.json");
                let maindata = JSON.parse(main);
                let player = "";

                if (idInfo.info.lineup === "main" || idInfo.info.lineup === "primary") {
                    player = maindata.list;
                } else if (idInfo.info.lineup === "secondary") {
                    player = secdata.list;
                }

                let make = "<:PikaHat:876850155607978064>";
                let maybe = "<:Amongus:876850251091283978>";



                let cbEmbed = new Discord.MessageEmbed()
                    .setTitle(idInfo.info.Type + " Crew Battle vs " + idInfo.info.Opp)
                    .setThumbnail("https://cdn.discordapp.com/attachments/875746850341265459/876854172593557504/Smash_Crew_Server_Logo_1.png")
                    .setColor("#4E4747")
                    .setTimestamp()
                    .addFields(
                        { name: "Day: ", value: idInfo.info.Day, inline: true },
                        { name: "Lineup: ", value: idInfo.info.lineup, inline: true },
                        { name: "\u200B", value: "\u200B", inline: true },
                        { name: "EST: ", value: idInfo.info.EST, inline: true },
                        { name: "CST: ", value: idInfo.info.CST, inline: true },
                        { name: "MST: ", value: idInfo.info.MST, inline: true },
                        { name: "PST: ", value: idInfo.info.PST, inline: true },
                        { name: "BST: ", value: idInfo.info.BST, inline: true }
                    )
                    .setFooter("React with PikaHat if you can make it! React with Among Us if you might be able to!")

                function Interval(duration) {
                    let interval = setInterval(() => {
                        --duration
                        client.users.fetch(player[duration], false).then((user) => {
                            user.send({ embeds: [cbEmbed] });
                        });
                        if (duration == 0) {
                            clearInterval(interval);
                        }

                    }, 1000)
                }

                if (idInfo.info.lineup === "main" || idInfo.info.lineup === "primary") {
                    let msg = await message.channel.send({ content: "<@&875652232392101970>", embeds: [cbEmbed] });
                    msg.react(make);
                    msg.react(maybe);

                    Interval(maindata.interval);
                } else if (idInfo.info.lineup === "secondary") {
                    let msg = await message.channel.send({ content: "<@&875652278617530450>", embeds: [cbEmbed] });
                    msg.react(make);
                    msg.react(maybe);

                    Interval(secdata.interval);
                } else {
                    message.channel.send("The Lineup isn't correct. Change the lineu to either: ['main', 'primary', 'secondary']")
                }


            } else {
                message.channel.send("You can't use this in this server!");
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`[${err}](${msgLink})`);
        }
    }
}