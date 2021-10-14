const ms = require('ms');
const fs = require("fs");

module.exports = {
	name: 'remind',
	aliases: ['reminder'],
	description: "This is a cb command!",
	async execute(client, message, args, Discord) {
		try {

			let noTime = new Discord.MessageEmbed()
				.setTitle("You didn't supply a time!")
				.setColor("#135ac5")
				.addField("Command: ", "~remind Time Reminder")
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()

			let noReminder = new Discord.MessageEmbed()
				.setTitle("You didn't supply anything to remind you of!")
				.setColor("#135ac5")
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()

			if (!args[0]) return message.channel.send({ embeds: [noTime] });
			if (!args[1]) return message.channel.send({ embeds: [noReminder] });

			let duration = args[0];
			let reminder = args.slice(1).join(' ');
			let date = new Date().toString().slice(0, 24);


			let check = new Discord.MessageEmbed()
				.setTitle("Reminder Successfully Set!")
				.setColor("#135ac5")
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()
				.addFields(
					{
						name: "Reminder:",
						value: reminder
					},
					{
						name: "Duration:",
						value: duration
					}
				)

			let sendReminder = new Discord.MessageEmbed()
				.setTitle(`Reminder for ${message.author.username}`)
				.setColor("#135ac5")
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()
				.addFields(
					{
						name: "Reminder:",
						value: reminder
					},
					{
						name: "Duration:",
						value: duration
					},
					{
						name: "Set Reminder at: ",
						value: date
					}
				)

			message.channel.send({ embeds: [check] });

			setTimeout(async function () {
				message.channel.send({ content: `<@${message.author.id}>`, embeds: [sendReminder] });
			}, ms(duration))


		} catch (err) {
			let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id;
			client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
		}
	}
}