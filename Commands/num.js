const fs = require("fs");

module.exports = {
    name: 'num',
    aliases: ['gtn'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            let id = fs.readFileSync("./data/numbers.json");
            let idInfo = JSON.parse(id);
            let waitid = fs.readFileSync("./data/wait.json");
            let WaitInfo = JSON.parse(waitid);

            let timenow = new Date().getTime();
            let timenext = new Date().getTime() + 2500;

            if (timenow >= Number(WaitInfo.time)) {
                let timeset = {
                    "time": timenext
                }

                fs.writeFileSync("./data/wait.json", JSON.stringify(timeset, null, 2), err => {
                    if (err) {
                        console.log(err);
                    }
                });
                if (args[0]) {
                    if (args[0].toLowerCase() === "help" && !args[1]) {

                        let helpNumEmbed = new Discord.MessageEmbed()
                            .setTitle("How to do this command!")
                            .setColor("#FF7D00")
                            .setTimestamp()
                            .addFields(
                                { name: "The 24 Hour Random Number", value: "~num help 24h" },
                                { name: "Guess the Number", value: "~num help gtn" }
                            )
                        message.channel.send({ embeds: [helpNumEmbed] });

                    } else if (args[0].toLowerCase() === "help" && args[1]) {
                        if (args[1].toLowerCase() === "24h") {
                            let help24hEmbed = new Discord.MessageEmbed()
                                .setTitle("24 Hour Random Number")
                                .setTimestamp()
                                .setColor("#FF7D00")
                                .addFields(
                                    { name: "Generate New Number", value: "~num h (Can only generate after 24 hours (1-1,000,000))" },
                                    { name: "Guess a Number", value: "~num h [value]" },
                                )
                            message.channel.send({ embeds: [help24hEmbed] });

                        } else if (args[1].toLowerCase() === "gtn") {
                            let helpgtnEmbed = new Discord.MessageEmbed()
                                .setTitle("Guess The Number")
                                .setTimestamp()
                                .setColor("#FF7D00")
                                .addFields(
                                    { name: "Guess a Number", value: "~num [number]" },
                                    { name: "Set Number", value: "~num set [range]" }
                                )
                            message.channel.send({ embeds: [helpgtnEmbed] });
                        }
                    } else if (args[0].toLowerCase() === "set") {
                        if (Number.isInteger(Number(args[1]))) {
                            if (args[1] <= 10) {
                                message.channel.send("Number must be above 10");
                            } else if (args[1] >= 11 && args[1] <= 100000) {
                                if (idInfo.num == args[1]) {
                                    message.channel.send("Number is already set to " + args[1]);
                                } else {
                                    let num = {
                                        "num": args[1],
                                        "h": idInfo.h,
                                        date: idInfo.date
                                    }
                                    fs.writeFileSync("./data/numbers.json", JSON.stringify(num, null, 2), err => {
                                        if (err) {
                                            console.log(err);
                                        }
                                    });
                                    message.channel.send("Set number to: " + args[1]);
                                }
                            } else if (args[1] > 100000) {
                                message.channel.send("You can't have a number above 100,000");
                            } else {
                                message.channel.send("It didn't work!");
                            }

                        } else {
                            message.channel.send("Enter a valid Number");
                        }
                    } else if (args[0].toLowerCase() === "h") {
                        let date = new Date()
                        let time = date.getTime()


                        if (time > idInfo.date) {
                            let num = Math.floor(Math.random() * 999999 + 1);
                            let timeNext = date.getTime()
                            let data = {
                                num: idInfo.num,
                                "h": num,
                                date: timeNext
                            }

                            fs.writeFileSync("./data/numbers.json", JSON.stringify(data, null, 2), err => {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else if (time < idInfo.date && !args[1]) {
                            message.channel.send("You need to wait 24 hours for a new number");
                        }

                        if (args[1]) {

                            if (Number.isInteger(Number(args[1]))) {

                                let guess = Number(args[1]);
                                if (guess <= 1000000 && guess > 0) {
                                    if (!fs.existsSync("./time/" + message.author.id + ".json")) {
                                        let nextMsg = time + 3.6e+6
                                        let timeData = {
                                            "nextMsg": nextMsg
                                        }

                                        fs.writeFile("./time/" + message.author.id + ".json", JSON.stringify(timeData, null, 2), err => {
                                            if (err) {
                                                console.log(err);
                                            }
                                        });
                                    } else if (fs.existsSync("./time/" + message.author.id + ".json")) {
                                        let numid = fs.readFileSync("./time/" + message.author.id + ".json");
                                        let numInfo = JSON.parse(numid);

                                        if (numInfo.nextMsg > time) {
                                            message.channel.send("You can't use this yet.")
                                        } else {
                                            if (guess === idInfo.h) {
                                                message.channel.send("There was a 1 in million chance for you to have gotten this correct. You are now... the RNG GOD!");

                                            } else if (guess !== idInfo.h) {
                                                message.channel.send("No dice there! Better luck next time!");
                                            }
                                            let nextMsg = time + 3.6e+6

                                            let timeData = {
                                                "nextMsg": nextMsg
                                            }

                                            fs.writeFile("./time/" + message.author.id + ".json", JSON.stringify(timeData, null, 2), err => {
                                                if (err) {
                                                    console.log(err);
                                                }
                                            });

                                        }


                                    }


                                } else {
                                    message.channel.send("Provide a valid Number");
                                }
                            } else {
                                message.chanel.send("You need to provide a number");
                            }
                        }

                    } else if (Number.isInteger(Number(args[0]))) {
                        let num = Math.floor(Math.random() * Number(idInfo.num) + 1);
                        if (num == Number(args[0])) {
                            message.channel.send("Number: " + num + "\nNumber Guessed: " + Number(args[0]) + "\nCongrats! You had a 1/" + idInfo.num + " and you got the correct number!");
                        } else if (num !== args[0]) {

                            let offBy = 0;
                            if (Number(args[0]) > num) {
                                offBy = "+" + (Number(args[0]) - num);
                            } else if (Number(args[0]) < num) {
                                offBy = "-" + (num - Number(args[0]));
                            }

                            message.channel.send("Number: " + num + "\nNumber Guessed: " + Number(args[0]) + "\nYou were off by " + offBy);
                        }
                    } else if (!Number.isInteger(Number(args[0]))) {
                        message.channel.send("Enter a valid Number");
                    }
                } else {
                    message.channel.send("Enter a number");
                }
            } else {
                message.channel.send("You're going to quickly!")
            }


        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}