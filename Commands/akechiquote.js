const fs = require('fs');
module.exports = {
    name: 'akechiquote',
    aliases: ['akechi', 'pancakes', 'bestboi'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let id = fs.readFileSync("./data/akechi.json");
            let idInfo = JSON.parse(id);
            let num = Math.floor(Math.random() * 9 + 1);
            let msg = "";

            switch (num) {
                case 1:
                    msg = idInfo.q1
                    break;
                case 2:
                    msg = idInfo.q2
                    break;
                case 3:
                    msg = idInfo.q3
                    break;
                case 4:
                    msg = idInfo.q4
                    break;
                case 5:
                    msg = idInfo.q5
                    break;
                case 6:
                    msg = idInfo.q6
                    break;
                case 7:
                    msg = idInfo.q7
                    break;
                case 8:
                    msg = idInfo.q8
                    break;
                case 9:
                    msg = idInfo.q9
                    break;
                case 10:
                    msg = idInfo.q10
                    break;
                case 11:
                    msg = idInfo.q11
                    break;
                case 12:
                    msg = idInfo.q12
                    break;
            }

            message.channel.send("Akechi Quote: " + msg);

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}