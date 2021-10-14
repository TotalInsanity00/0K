module.exports = {
    name: 'mute',
    aliases: ['shutup'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            let block = message.guild.roles.cache.get("879175881246007346");
            if (message.member.roles.cache.has("875651998874214420") || message.member.roles.cache.has("875652093283807243")) {
                if (args[0]) {
                    let name = "";
                    let target = message.mentions.members.first();
                    let targ = message.mentions.users.first();

                    if (targ) {
                        name = targ.username;
                    }
                    function addRole() {
                        target.roles.add(block);
                    }
                    let reason = "No reason Provided";
                    if (args[1]) {
                        reason = args.slice(1).toString().replace(/,/g, " ");
                    }
                    let reasonEmbed = new Discord.MessageEmbed()
                        .setTitle(name + " was muted!")
                        .setColor("#135ac5")
                        .addField("Reason: ", reason)

                    addRole()
                    message.channel.send(name + " was muted!")
                    client.channels.cache.get('879906695671861308').send({ embeds: [reasonEmbed] });

                } else {
                    message.channel.send("You need to mention someone!");
                }
            } else if (message.member.roles.cache.has("879512127814135828") && !message.member.roles.cache.has("875651998874214420") || message.member.roles.cache.has("879512127814135828") && message.member.roles.cache.has("875652093283807243")) {
                if (args[0]) {
                    let name = "";
                    let target = message.mentions.members.first();
                    let targ = message.mentions.users.first();

                    if (targ) {
                        name = targ.username;
                    }
                    function addRole() {
                        target.roles.add(block);
                    }
                    let reason = "No reason provided";
                    if (args[1]) {
                        reason = args.slice(1).toString().replace(/,/g, " ");
                    }
                    let reasonEmbed = new Discord.MessageEmbed()
                        .setTitle(name + " was muted!")
                        .setColor("#135ac5")
                        .addField("Reason: ", reason)

                    addRole()
                    message.channel.send(name + " was muted!")
                    client.channels.cache.get('879906695671861308').send({ embeds: [reasonEmbed] });
                    setTimeout(() => target.roles.remove(block), 10000)
                } else {
                    message.channel.send("You need to mention someone!");
                }
            } else {
                message.channel.send("You can't use this")
            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}