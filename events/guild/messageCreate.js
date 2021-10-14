const cooldowns = new Map();
const fs = require("fs");
module.exports = (Discord, client, message) => {
    const prefix = '~';

    if (!message.content.startsWith(prefix) || message.author.bot) return;


    let id = fs.readFileSync("./data/oomfie.json");
    let idInfo = JSON.parse(id);

    let count = Number(idInfo.count) + 1;

    let data = {
        "count": count
    }
    fs.writeFileSync("./data/oomfie.json", JSON.stringify(data, null, 2), err => {
        if (err) {
            console.log(err);
        }
    });


    client.channels.cache.get('883161797241208833').send("Oomfies thank count has reached to: " + count + "!");

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, Discord);

}