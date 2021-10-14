const { MessageManager } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'help',
    aliases: ['Help'],
    description: "This is a leaders command!",
    execute(client, message, args, Discord) {
        try {

            if (args[0]) {

                let category = args[0].toString().toLowerCase();

                if (category == "crew") {

                    let CrewEmbed = new Discord.MessageEmbed()
                        .setTitle("List of commands for the Category: Crew")
                        .setColor("#135ac5")
                        .addFields(
                            { name: "Here", value: "Lets the Crew Leaders and Advisors know you are present for a Crew Battle." },
                            { name: "Lineup", value: "Shows the Lineup. Do `~help Crew Lineup` for more information" },
                            { name: "Cb", value: "Writes data for a Crew Battle. Do `~help Crew Cb` for more information" },
                            { name: "Send", value: "Sends the Crew Battle in <#875645851333193738> or <#875646441840836609>, as well as send each person a message." },
                            { name: "Write", value: "Writes the room and twitch for the crew battle. Do `~help Crew Write` for more information" },
                        )

                    message.react("✔️");
                    message.author.send({ embeds: [CrewEmbed] });

                    if (args[1]) {
                        let group = args[1].toString().toLowerCase();
                        if (group == "lineup") {
                            let lineupEmbed = new Discord.MessageEmbed()
                                .setTitle("List of commands for the Category: Crew, with the Group: Lineup")
                                .setColor("#135ac5")
                                .addFields(
                                    { name: "~lineup", value: "Get the lineup of the days Crew Battle" },
                                    { name: "~lineup remove [player]", value: "Removes a player from the lineup" },
                                    { name: "~lineup [players]", value: "Writes the lineup for that days Crew Battle" }
                                )
                            message.react("✔️");

                            message.author.send({ embeds: [lineupEmbed] });

                        }
                        else if (group == "cb") {
                            let cbEmbed = new Discord.MessageEmbed()
                                .setTitle("List of commands for the Category: Crew, with the Group: Cb")
                                .setColor("#135ac5")
                                .addFields(
                                    { name: "~cb [Lineup]", value: "What Lineup: main, primary, secondary " },
                                    { name: "~cb [Lineup] [Type]", value: "What Type: Ranked, Mock, Inhouse" },
                                    { name: "~cb [Lineup] [Type] [Date]", value: "What Date: month/day" },
                                    { name: "~cb [Lineup] [Type] [Date] [Hour]", value: "What hour: 18 == 6pm EST. 24 hour time! " },
                                    { name: "~cb [Lineup] [Type] [Date] [Hour] [Minute]", value: "What Minute: 00 == 7:00, 30 == 7:30" },
                                    { name: "~cb [Lineup] [Type] [Date] [Hour] [Minute] [Opponent]", value: "Who is the Opponent? Team Team Duck" },
                                )
                            message.react("✔️");

                            message.author.send({ embeds: [cbEmbed] });
                        }
                        else if (group == "write") {

                            let writeEmbed = new Discord.MessageEmbed()
                                .setTitle("List of commands for the Category: Crew, with the Group: Write")
                                .setColor("#135ac5")
                                .addFields(
                                    { name: "~write [Twitch] [Room #]", value: "Twitch can be either link or channel name, room # is a single word/number." },
                                )

                            message.react("✔️");

                            message.author.send({ embeds: [writeEmbed] });
                        }
                    }
                } else if (category == "tryouts") {

                    let tryoutEmbed = new Discord.MessageEmbed()
                        .setTitle("List of commands for the Category: Tryouts")
                        .setColor("#135ac5")
                        .addFields(
                            { name: "~tr @person", value: "View Your tryout report. Can be accessed anytime by anyone in the 0K Server." },
                            { name: "~tr @person :character: score", value: "Report a tryout. Can only be used by 0K Testers." },
                        )
                    message.react("✔️");

                    message.author.send({ embeds: [tryoutEmbed] });
                } else if (category == "smash") {
                    let tryoutEmbed = new Discord.MessageEmbed()
                        .setTitle("List of commands for the Category: Smash")
                        .setColor("#135ac5")
                        .addFields(
                            { name: "SP", value: "Allows you to create a smash profile. Do ~sp help for more information." },
                            { name: "Profile @person", value: "View a smash profile." },
                        )
                    message.react("✔️");

                    message.author.send({ embeds: [tryoutEmbed] });
                } else if (category == "fun") {
                    let funEmbed = new Discord.MessageEmbed()
                        .setTitle("List of commands for the Category: Fun")
                        .setColor("#135ac5")
                        .addFields(
                            {
                                name: "Akechi",
                                value: "Gives a random quote from the best boi Akechi"
                            },
                            {
                                name: "Coin",
                                value: "Flips a coin, 50/50 chance"
                            },
                            {
                                name: "Dip",
                                value: "Leaves the room"
                            },
                            {
                                name: "F",
                                value: "Gives an F to someone you mention"
                            },
                            {
                                name: "Flip",
                                value: "Try and land a back flip!"
                            },
                            {
                                name: "Insult",
                                value: "Insult someone you mention!"
                            },
                            {
                                name: "Mystery",
                                value: "What will happen!? WIll you be muted? Or will you gain the power of a god?"
                            },
                            {
                                name: "Num",
                                value: "Guess the number!"
                            },
                            {
                                name: "Oomfie",
                                value: "Go off oomfie!"
                            },
                            {
                                name: "Pog",
                                value: "Give a pog to someone you mention!"
                            },
                            {
                                name: "Roll",
                                value: "Roll a number 1-6"
                            },
                            {
                                name: "QOTD",
                                value: "Get the Question Of The Day"
                            },
                            {
                                name: "W",
                                value: "Give a W to someone you mention!"
                            }
                        )
                    message.react("✔️");

                    message.author.send({ embeds: [funEmbed] });

                } else if (category == "pokemon") {

                    if (!args[1]) {
                        let pokemonEmbed = new Discord.MessageEmbed()
                            .setTitle("List of commands for the Category: Pokemon")
                            .setColor("#135ac5")
                            .addFields(
                                {
                                    name: "Badges",
                                    value: "See your badges for the Pokemon League!"
                                },
                                {
                                    name: "Leaders",
                                    value: "See the leaders of each Gym in the Pokemon League"
                                },
                                {
                                    name: "Card",
                                    value: "Change the look of your trainer card! Use `~help Pokemon Card` to see more!"
                                },
                                {
                                    name: "Report",
                                    value: "For Leaders: report a set of a person! Use ~reporthelp if you aren't sure what to do!"
                                }
                            )
                        message.react("✔️");

                        message.author.send({ embeds: [pokemonEmbed] });
                    }


                    if (args[1]) {
                        let group = args[1].toLowerCase()

                        if (group == "card") {
                            let cardEmbed = new Discord.MessageEmbed()
                                .setTitle("List of commands for the Category: Pokemon, with the Group: Card")
                                .setColor("#135ac5")
                                .addFields(
                                    {
                                        name: "Name",
                                        value: "Change your card's name!"
                                    },
                                    {
                                        name: "Color",
                                        value: "Change your card's color!"
                                    },
                                    {
                                        name: "Image",
                                        value: "Change your card's Image"
                                    },
                                )

                            message.react("✔️");
                            message.author.send({ embeds: [cardEmbed] });
                        }
                    }

                } else if (category == "misc") {

                    let miscEmbed = new Discord.MessageEmbed()
                        .setTitle("List of commands for the Category: Miscellaneous")
                        .setColor("#135ac5")
                        .addFields(
                            {
                                name: "Search",
                                value: "Search for a player on PGStats"
                            },
                            {
                                name: "Stagelist",
                                value: "Get the stagelist for competitive smash"
                            },
                            {
                                name: "Time",
                                value: "Get the current Time"
                            },
                            {
                                name: "Thank",
                                value: "Thank my creator for making this bot!"
                            },
                            {
                                name: "Purge",
                                value: "Purge a number of messages."
                            },
                            {
                                name: "Icon",
                                value: "Get an Icon of a user"
                            },
                            {
                                name: "ServerIcon",
                                value: "Get the Server Icon of a server"
                            }
                        )

                    message.react("✔️");
                    message.author.send({ embeds: [miscEmbed] });
                }
            } else if (!args[0]) {

                let CategoryList = new Discord.MessageEmbed()
                    .addFields(
                        { name: "Command Groups", value: "Crew \n Tryouts \n Fun \n Smash \n Pokemon \n Misc" },
                    )
                    .setColor("#135ac5")
                    .setFooter("A lot of these commands are restricted access and can only be accessed by certain members of 0K or only by 0k themselves.")

                message.react("✔️");
                message.author.send({ embeds: [CategoryList] });
            }


        } catch (err) {
            client.channels.cache.get('884936985381330995').send('<@!164555929252134912> ' + err);
            message.channel.send("Oh no! An error occured :( my creator has been notified and is fixing it!");
        }
    }
}