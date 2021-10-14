const fs = require("fs");

module.exports = {
    name: 'sakurai',
    aliases: ['tys'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            message.delete();

            let id = fs.readFileSync("./data/sakurai.json");
            let info = JSON.parse(id);

            let newNum = info.sakurai + 1;

            let infoid = {
                "sakurai": newNum
            }

            let rng = Math.floor(Math.random() * 5);

            let msg = "";

            switch (rng) {
                case 0:
                    msg = "櫻井さん、どうもありがとうございました！"
                    break;
                case 1:
                    msg = "Thank you Daddy Sakurai!"
                    break;
                case 2:
                    msg = "Take a vacation and see you soon Sakurai!"
                    break;
                case 3:
                    msg = "Thank you for all your hard work Sakurai!"
            }

            message.channel.send(msg)
            client.channels.cache.get('895390548528091198').send("Sakurai has been thanked: " + newNum + " times!");

            fs.writeFileSync("./data/sakurai.json", JSON.stringify(infoid, null, 2), err => {
                if (err) {
                    console.log(err);
                }
            });

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}