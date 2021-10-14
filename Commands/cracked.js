const fs = require("fs");

module.exports = {
    name: 'cracked',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            if (args[0]) {
                if (Number.isInteger(args[0])) {
                    message.channel.send("Provide a person");
                } else {
                    let person = args[0].toLowerCase();
                    let check = false;

                    if (person.includes('total') || person.includes('insanity') || person.includes('nopause') || person.includes('nick') || person.includes('nicolas')) {
                        check = false;
                    }

                    if (check == true) {
                        message.channel.send("This is incorrect.");
                    } else {
                        person = person.charAt(0).toUpperCase() + person.slice(1);

                        message.channel.send(person + " is so cracked!");
                    }

                }

            } else {
                message.guild.members.fetch().then(fetchedMembers => {
                    let community = "";
                    if (message.guildId == "875644093890441226") {
                        community = "875656529741750302";
                    } else if (message.guildId == "828689284298309642") {
                        community = "828691666591678464";
                    }
                    let name = message.guild.roles.cache.get(community).members.map(m => m.user.username);

                    function getPlayer() {
                        let num = (Object.keys(name).length)
                        let rng = Math.floor(Math.random() * num + 1);
                        let cracked = name[rng];

                        return cracked;
                    }

                    let player = getPlayer()

                    if (player == "NoPause") {
                        player = getPlayer();
                    }
                    message.channel.send(player + " is so cracked!");

                });
            }

            setTimeout(() => { message.delete(), 5000 });

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}