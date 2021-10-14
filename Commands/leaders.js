const { MessageManager } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'leaders',
    aliases: ['Leaders'],
    description: "This is a leaders command!",
    execute(client, message, args, Discord) {
        try {

            if (message.guildId == "828689284298309642") {

                let leaders = fs.readFileSync("./data/leaders.json");
                let leadersInfo = JSON.parse(leaders);

                let Leaders = new Discord.MessageEmbed()
                    .setTitle("Gym/Elite 4 Leaders")
                    .setColor("#135ac5")
                    .setThumbnail(message.guild.iconURL())
                    .addFields(
                        { name: "Gym leaders:", value: (leadersInfo.Leaders.Main).toString().replace(/,/g, "\n"), inline: true },
                        { name: "Sub leaders:", value: (leadersInfo.Leaders.Sub).toString().replace(/,/g, "\n"), inline: true },
                        { name: '===ELITE 4===', value: '\u200B' },
                        { name: "Elite 4", value: (leadersInfo.Elite.Main).toString().replace(/,/g, "\n"), inline: true },
                        { name: "Elite 4 Subs", value: (leadersInfo.Elite.Sub).toString().replace(/,/g, "\n"), inline: true }
                    )

                message.channel.send({ embeds: [Leaders] });

            } else {
                message.channel.send("You can't use this in this server!");
            }


        } catch (err) {
            client.channels.cache.get('875748868019605514').send('<@!164555929252134912> ' + err);
            message.channel.send("Oh no! An error occured :( my creator has been notified and is fixing it!");
        }
    }
}