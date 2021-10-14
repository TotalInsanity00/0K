module.exports = {
    name: 'bot',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            if (message.author.id === "164555929252134912" || message.author.id === "567515209657221120" || message.author.id === "98514286032199680") {
                if (args[0]) {
                    let category = args[0];
                    if (args[1]) {
                        let value = args[1].toString().toLowerCase();

                        if (category === "username") {
                            let c1 = value.charAt(0).toString().toUpperCase();
                            let name = c1 + value.slice(1);
                            client.user.setUsername(name);
                            message.channel.send("Set the Bot Name to: " + name);
                        }
                        else if (category === "avatar") {
                            value = args[1];
                            client.user.setAvatar(value);
                            message.channel.send("Set the Bot Avatar to: " + value);

                        } else {
                            message.channel.send("You need to provide a valid category [username, avatar]");
                        }

                        let logMsg = message.author.username + " has changed the bot " + category

                        client.channels.cache.get("879906695671861308").send(logMsg)

                    } else {
                        message.channel.send("You need to provide a value");
                    }
                } else {
                    message.channel.send("You need to provide a category [username, avatar]");
                }
            } else {
                message.channel.send("You can't use this!");
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}