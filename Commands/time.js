module.exports = {
    name: 'time',
    aliases: ['gettime'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let date = new Date();
            let milliTime = date.getTime().toString();
            let locale = date.toLocaleTimeString().toString();
            let day = date.getDay().toString();


            switch (day) {
                case "0":
                    break;
            }

            let embed = new Discord.MessageEmbed()
                .setTitle("All times:")
                .setColor("#f5f3f9")
                .addFields(
                    { name: "Milliseconds:", value: milliTime },
                    { name: "Locale Time:", value: locale },
                    { name: "Day:", value: day },
                    { name: "Date", value: date.toString() },

                )

            message.channel.send({ embeds: [embed] });

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}