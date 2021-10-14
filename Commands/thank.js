const fs = require('fs');
module.exports = {
    name: 'thank',
    aliases: ['thanks'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            let date = new Date();
            let timenow = date.getTime();
            let id = fs.readFileSync("./data/thank.json");
            let idInfo = JSON.parse(id);

            if (Number((timenow - idInfo.timenow)) > Number(5000)) {

                let newNum = Number(idInfo.thank) + 1;
                let newNumMe = Number(idInfo.me);
                if (message.author.id == Number(164555929252134912)) {
                    newNumMe = newNumMe + 1;
                    message.reply("Stop thanking yourself you cringy bastard! <:SumiAnger:880901984717250640>");
                } else {
                    message.channel.send("My creator has been thanked " + newNum + " times! My creator appreciates your thanks and will continue to work hard on me!");

                }


                let writeTo = {
                    thank: newNum,
                    me: newNumMe,
                    timenow: timenow
                }
                fs.writeFile("./data/thank.json", JSON.stringify(writeTo, null, 2), err => {
                    if (err) {
                        console.log(err);
                    }
                });
            } else {
                let writeTo = {
                    thank: idInfo.thank,
                    me: idInfo.me,
                    timenow: timenow
                }
                fs.writeFile("./data/thank.json", JSON.stringify(writeTo, null, 2), err => {
                    if (err) {
                        console.log(err);
                    }
                });
                message.channel.send("Calm yourself man! You don't want me to break and for Insanity to mute you now dontcha!")
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}