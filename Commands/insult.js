const fs = require('fs');
module.exports = {
    name: 'insult',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let num = Math.floor(Math.random() * 7 + 1);
            let id = fs.readFileSync("./data/insult.json");
            let idInfo = JSON.parse(id);
            let msg = "";
            let date = new Date().getTime() + 3000;
            let dateNow = new Date().getTime();
            message.delete();
            if (dateNow >= idInfo.time) {
                if (args[0]) {
                    if (args[0].toString().charAt(0) === "<") {
                        let mentionID = "";
                        let user = message.mentions.users.first();
                        if (user) {
                            mentionID = user.id;
                        }

                        switch (num) {
                            case 1:
                                msg = "<@!" + mentionID + "> " + idInfo.a;
                                break;
                            case 2:
                                msg = "<@!" + mentionID + "> " + idInfo.b;
                                break;
                            case 3:
                                msg = "<@!" + mentionID + "> " + idInfo.c;
                                break;
                            case 4:
                                msg = "<@!" + mentionID + "> " + idInfo.d;
                                break;
                            case 5:
                                msg = idInfo.e.e1 + "<@!" + mentionID + "> " + idInfo.e.e2;
                                break;
                            case 6:
                                msg = idInfo.f.f1 + "<@!" + mentionID + "> " + idInfo.f.f2;
                                break;
                            case 7:
                                msg = idInfo.g.g1 + "<@!" + mentionID + "> " + idInfo.g.g2;
                                break;
                        }

                        message.channel.send(msg);

                        let time = {
                            "a": "You look like Benjamin Button fucked an old catcher's mitt",
                            "b": "You look like four inches of face stretched over twelve inches of skull",
                            "c": "You look like a moldy jackolanter some frat guy barfed in then crushed it against his forehead because he was suuper drunk and thought it was a beer can and immediately regretted every single life choice he ever made!",
                            "d": "You look like Jeff Goldblum in the fly",
                            "e": {
                                "e1": "I am sorry, Tiff. Grand Wizard ",
                                "e2": " here's not what you'd call a people person."
                            },
                            "f": {
                                "f1": "Irony, noun: A state of affairs or an event that seems deliberately contrary to what one expects, and is often amusing as a result. Example: Your name is ",
                                "f2": ", yet you appear to be something of a dullard."
                            },
                            "g": {
                                "g1": "<@!164555929252134912> won't get off your back? Girlfriend won't stop nagging you? Did that fuckstick ",
                                "g2": " sell you a bullshit dagger that broke almost immediately despite the fact that you spent half your goddamn money on it? Have you considered... murder?"
                            },
                            "time": 1631153776410
                        }

                        fs.writeFileSync("./data/insult.json", JSON.stringify(time, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });

                    } else {
                        message.channel.send("You need to mention someone.");
                    }
                } else {
                    message.channel.send("You need to mention someone.");
                }
            } else {
                message.channel.send("Slow down.");
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}