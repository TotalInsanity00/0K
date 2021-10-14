module.exports = async (client) => {
    const guild = client.guilds.cache.get("875644093890441226");

    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('896864467357429840');

        channel.setName(`Members: ${memberCount.toLocaleString()}`);

        client.channels.cache.get("879906695671861308").send("Updated Member Count");
    }, 3.6e+6);
}