module.exports = {
    name: 'stagelist',
    aliases: ['stages', 'stage'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            message.channel.send("https://images-ext-2.discordapp.net/external/L0RoUTN2hbPlGs-9lta4h3FXREVZ62tP9y8Ufu_LNMk/%3Fwidth%3D360%26height%3D198/https/media.discordapp.net/attachments/488919521030307840/744998389418164467/FirstClassStageListNEW.png");

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}