const puppeteer = require('puppeteer');
module.exports = {
    name: 'qotd',
    aliases: ['question', 'q'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            async function scrapeQotd(url) {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(url);

                const [el] = await page.$x('//*[@id="question"]');
                const text = await el.getProperty('textContent');
                const rawtext = await text.jsonValue();

                message.channel.send(rawtext);
            }


            scrapeQotd('https://www.brightful.me/blog/random-question-generator/')
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}