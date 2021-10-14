const fs = require("fs");

module.exports = {
    name: 'request',
    aliases: ['Request'],
    description: "This is a leaders command!",
    execute(client, message, args, Discord) {
        try {

            let image = message.author.avatarURL();
            let id = message.author.id;
            let username = message.author.username;

            if (fs.existsSync("./Badge Ids/" + id + ".json")) {
                message.channel.send("You already have a player Card. Use ~badges to see it.")
            } else {
                let playerData = {
                    info: {
                        ID: id,
                        Name: username,
                        Badges: "<:Certified:869713766772789258>",
                        Set: "0-0",
                        Percentage: "0%",
                        color: "#f3f3f3",
                        image: image,
                        nextgym: "Forst/Poyo/Ginko"
                    }
                }

                fs.writeFile("./Badge Ids/" + id + ".json", JSON.stringify(playerData, null, 2), err => {
                    if (err) {
                        console.log(err);
                    }
                    message.channel.send("Your Player Card has been created!");
                });
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}