module.exports = {
    name: 'toss',
    aliases: ['throw'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            if (args[0] && args[0].charAt(0) === "<") {
                let person1Id = message.author.id;
                let person2Info = message.mentions.users.first();
                let person2ID = "";
                if (person2Info) {
                    person2ID = person2Info.id
                }

                let person1 = "<@" + person1Id + ">";
                let person2 = "<@" + person2ID + ">";

                let num = Math.round(Math.random() * 10000);

                message.channel.send(person1 + " tossed " + person2 + " " + num + " miles");
            } else {
                message.channel.send("Mention someone!");
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}