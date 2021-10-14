const fs = require("fs");

module.exports = {
    name: 'list',
    aliases: ['listmembers'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            let tr = "";
            let name = ""
            let roleEmbed = new Discord.MessageEmbed()
                .setColor("#135ac5")

            function listRole(lineup) {

                message.guild.members.fetch().then(fetchedMembers => {
                    tr = message.guild.roles.cache.get(lineup).members.map(m => m.user.id);
                    name = message.guild.roles.cache.get(lineup).members.map(m => m.user.username)
                    let interval = (Object.keys(tr).length);

                    let info = {
                        "list": tr,
                        "interval": interval
                    }

                    if (!name == "[]") {
                        roleEmbed.addField("All Members with the Role:", name.toString().replace(/,/g, "\n"));
                    } else {
                        roleEmbed.addField("All Members with the Role:", "No one has this role!");
                    }
                    message.channel.send({ embeds: [roleEmbed] });


                    if (lineup == "875652232392101970") {
                        fs.writeFileSync("./data/main.json", JSON.stringify(info, null, 2), err => {
                            if (err) {
                                let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
                                client.channels.cache.get('875748868019605514').send(`[${err}](${msgLink})`);
                            }
                        });
                    } else if (lineup == "875652278617530450") {
                        fs.writeFileSync("./data/secondary.json", JSON.stringify(info, null, 2), err => {
                            if (err) {
                                let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
                                client.channels.cache.get('875748868019605514').send(`[${err}](${msgLink})`);
                            }
                        });
                    }

                });

            }

            if (args[0]) {

                let roler = args.slice(0).toString();

                let rolenow = roler.replace(/,/g, " ");

                if (Number.isInteger(roler)) {
                    message.channel.send("It needs to be either [Main/Primary, Secondary]");
                } else {

                    let roleinfo = message.guild.roles.cache.find(role => role.name === rolenow);



                    if (roleinfo) {
                        let roleId = roleinfo.id
                        listRole(roleId)
                    } else {
                        message.channel.send("Role not found: Make sure the role is the exact role name, captialization and everything")
                    }

                }
            } else {
                message.channel.send("You need to provide a lineup.");
            }

        } catch (err) {

            console.log(err);

            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`[${err}](${msgLink})`);
        }
    }
}