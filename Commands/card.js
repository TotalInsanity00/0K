const fs = require("fs");

module.exports = {
    name: 'card',
    aliases: ['Card'],
    description: "This is a twitch command!",
    execute(client, message, args, Discord) {
        try {
            if (message.guildId == "828689284298309642") {

                let id = message.author.id;
                if (fs.existsSync("./Badge Ids/" + id + ".json")) {
                    if (args[0]) {

                        let cardID = fs.readFileSync("./Badge Ids/" + id + ".json");
                        let cardInfo = JSON.parse(cardID);

                        if (args[0] === "name") {
                            if (args[1]) {

                                let list = args.slice(1);
                                let stringif = JSON.stringify(list)
                                let minuscomm = stringif.replace(/,/g, " ");
                                let minusapp = minuscomm.replace(/"/g, "");
                                let name = minusapp.slice(1, -1);

                                let updatedCard = {
                                    info: {
                                        ID: cardInfo.info.ID,
                                        Name: name,
                                        Badges: cardInfo.info.Badges,
                                        Set: cardInfo.info.Set,
                                        Percentage: cardInfo.info.Percentage,
                                        color: cardInfo.info.color,
                                        image: cardInfo.info.image,
                                        nextgym: cardInfo.info.nextgym
                                    }
                                }
                                if ('champion' in cardInfo.info) {
                                    updatedCard = {
                                        info: {
                                            ID: cardInfo.info.ID,
                                            Name: name,
                                            Badges: cardInfo.info.Badges,
                                            Set: cardInfo.info.Set,
                                            Percentage: cardInfo.info.Percentage,
                                            color: cardInfo.info.color,
                                            image: cardInfo.info.image,
                                            nextgym: cardInfo.info.nextgym,
                                            champion: "true"
                                        }
                                    }
                                }

                                fs.writeFileSync("./Badge Ids/" + id + ".json", JSON.stringify(updatedCard, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                })
                                message.channel.send("Information Updated");

                            } else {
                                message.channel.send("You need to provide an argument for this category.");
                            }
                        } else if (args[0] === "color") {
                            if (args[1]) {

                                let color = args[1];

                                let updatedCard = {
                                    info: {
                                        ID: cardInfo.info.ID,
                                        Name: cardInfo.info.Name,
                                        Badges: cardInfo.info.Badges,
                                        Set: cardInfo.info.Set,
                                        Percentage: cardInfo.info.Percentage,
                                        color: color,
                                        image: cardInfo.info.image,
                                        nextgym: cardInfo.info.nextgym
                                    }
                                }
                                if ('champion' in cardInfo.info) {
                                    updatedCard = {
                                        info: {
                                            ID: cardInfo.info.ID,
                                            Name: cardInfo.info.Name,
                                            Badges: cardInfo.info.Badges,
                                            Set: cardInfo.info.Set,
                                            Percentage: cardInfo.info.Percentage,
                                            color: color,
                                            image: cardInfo.info.image,
                                            nextgym: cardInfo.info.nextgym,
                                            champion: "true"
                                        }
                                    }
                                }

                                fs.writeFileSync("./Badge Ids/" + id + ".json", JSON.stringify(updatedCard, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                })
                                message.channel.send("Information Updated");

                            } else {
                                message.channel.send("You need to provide an argument for this category.");
                            }
                        } else if (args[0] === "image") {
                            if (args[1]) {

                                let image = args[1];

                                let updatedCard = {
                                    info: {
                                        ID: cardInfo.info.ID,
                                        Name: cardInfo.info.Name,
                                        Badges: cardInfo.info.Badges,
                                        Set: cardInfo.info.Set,
                                        Percentage: cardInfo.info.Percentage,
                                        color: cardInfo.info.color,
                                        image: image,
                                        nextgym: cardInfo.info.nextgym,

                                    }
                                }
                                if ('champion' in cardInfo.info) {
                                    updatedCard = {
                                        info: {
                                            ID: cardInfo.info.ID,
                                            Name: cardInfo.info.Name,
                                            Badges: cardInfo.info.Badges,
                                            Set: cardInfo.info.Set,
                                            Percentage: cardInfo.info.Percentage,
                                            color: cardInfo.info.color,
                                            image: image,
                                            nextgym: cardInfo.info.nextgym,
                                            champion: "true"
                                        }
                                    }
                                }
                                fs.writeFileSync("./Badge Ids/" + id + ".json", JSON.stringify(updatedCard, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                })
                                message.channel.send("Information Updated");

                            } else {
                                message.channel.send("You need to provide an argument for this category.");
                            }
                        } else {
                            message.channel.send("Invalid Category. You can only use name, color, and image.")
                        }
                    } else {
                        message.channel.send("You need to have a category to write too!");
                    }
                } else {
                    message.channel.send("You need to create a card to do this action! Do ~request")
                }

            } else {
                message.channel.send("You can't use this in this server!");
            }



        } catch (err) {
            client.channels.cache.get('875748868019605514').send('<@!164555929252134912> ' + err);
            message.channel.send("Oh no! An error occured :( My creator has been notified and is fixing it now.");
        }
    }
}