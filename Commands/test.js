const fs = require("fs");

module.exports = {
    name: 'test',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let list = "";

            let lower = args.slice(1);
            console.log(lower);
            if (lower.includes("ssbu")) {
                list = list + "ssbu";
            } if (lower.includes("unist")) {
                list = list + " unist";
            } if (lower.includes("gg")) {
                list = list + " gg";
            }
            console.log(list);

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}
