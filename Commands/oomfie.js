const fs = require('fs');

module.exports = {
    name: 'oomfie',
    aliases: ['oomfies', 'klee'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            let num = Math.floor(Math.random() * 8 + 1);

            let msg = "";


            switch (num) {
                case 0:
                    msg = "Doesn't work";
                    break;
                case 1:
                    msg = "https://cdn.discordapp.com/attachments/875651413886238730/881687819905552474/oomfie-twitter.gif";
                    break;
                case 2:
                    msg = "https://media.discordapp.net/attachments/875651413886238730/881687142135373844/go-off-oomfie-oomf.gif";
                    break;
                case 3:
                    msg = "https://cdn.discordapp.com/attachments/875651413886238730/881687237924905020/hey-hey-oomfie.gif";
                    break;
                case 4:
                    msg = "https://cdn.discordapp.com/attachments/875651413886238730/881688373943762994/no-oomfie-oomfie.gif"
                    break;
                case 5:
                    msg = "https://cdn.discordapp.com/attachments/875651413886238730/882730812485800037/maxresdefault_1.jpg";
                    break;
                case 6:
                    msg = "https://cdn.discordapp.com/attachments/875651413886238730/882730818303311872/can-i-get-cute-tummy-pics-oomfie-oomfie.gif";
                    break;
                case 7:
                    msg = "https://cdn.discordapp.com/attachments/875651413886238730/882730818475266059/oomfie-klee.gif";
                    break;
                case 8:
                    msg = "https://cdn.discordapp.com/attachments/881972266689265704/882764766748246016/Go_off_oomfie.mp4";
                    break;
            }

            message.channel.send(msg);

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}