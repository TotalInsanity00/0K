const puppeteer = require('puppeteer');
const fs = require('fs');
module.exports = {
    name: 'search',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            let id = fs.readFileSync("./data/timer.json");
            let idInfo = JSON.parse(id);

            let date = new Date();
            let milliTime = (date.getTime() + 10000).toString();
            let timeNow = date.getTime();
            let player = args.slice(0);

            if (timeNow >= idInfo.time) {
                if (args[0]) {
                    player = args.slice(0);
                    async function scrapeQotd(url) {
                        (async () => {
                            let browser = await puppeteer.launch({ headless: true, defaultViewport: null });
                            let page = await browser.newPage();
                            await page.goto(url, { waitUntil: 'networkidle2' });
                            try {
                                let data = await page.evaluate(() => {
                                    let playerName = document.querySelector('div[class="PlayerCard_nameRow__gF-Qc"] > h1').innerText
                                    let character = document.querySelector('div[class="PlayerCard_icon__2cUHt"]').innerHTML
                                    let winRate = document.querySelector('div[class="MetricDisplay_rank__3Tu52"] > h1').innerText
                                    let number = document.querySelector('div[class="FeaturedSection_subtitleBar__1GHNw"]').innerText.charAt(9)
                                    let stats = document.querySelector('div[class="search_playerCardContainer__A_7YJ"] > a').href

                                    return {
                                        playerName,
                                        character,
                                        winRate,
                                        number,
                                        stats
                                    }
                                });
                                await page.goto(data.stats, { waitUntil: 'networkidle0' });
                                let moreData = await page.evaluate(() => {
                                    let commonStater = document.getElementsByClassName("SummaryView_StatRow__2wJWS")[0].innerText;
                                    let preferCounter = document.getElementsByClassName("SummaryView_StatRow__2wJWS")[1].innerText;
                                    let Score = document.getElementsByClassName("css-he2tnk")[1].innerHTML;

                                    //best win variables
                                    let bestWin = document.getElementsByClassName("SummaryView_MatchupCard__1gEoZ")[0].innerText;
                                    let char1bw = document.getElementsByClassName("SummaryView_Icon__3crdW")[0].innerHTML;
                                    let char2bw = document.getElementsByClassName("SummaryView_Icon__3crdW")[1].innerHTML;

                                    //worst win variables
                                    let worstWin = document.getElementsByClassName("SummaryView_MatchupCard__1gEoZ")[1].innerText;
                                    let char1ww = document.getElementsByClassName("SummaryView_Icon__3crdW")[2].innerHTML;
                                    let char2ww = document.getElementsByClassName("SummaryView_Icon__3crdW")[3].innerHTML;

                                    //Get's The most recent tournament placement
                                    let tourneyName = document.getElementsByClassName("css-xt44kj")[0].innerText;
                                    let tourneyWL = document.getElementsByClassName("css-rhv1k5")[0].innerText;
                                    let playerCount = document.getElementsByClassName("css-1hy5y9f")[1].innerText;
                                    let placed = document.getElementsByClassName("css-1qnxkdy")[0].innerText;
                                    let date = document.getElementsByClassName("css-1hy5y9f")[0].innerText;

                                    return {
                                        commonStater,
                                        preferCounter,
                                        bestWin,
                                        char1bw,
                                        char2bw,
                                        worstWin,
                                        char1ww,
                                        char2ww,
                                        Score,
                                        tourneyName,
                                        tourneyWL,
                                        playerCount,
                                        placed,
                                        date
                                    }
                                })
                                await browser.close();
                                let sliced = data.character.slice(40, -6);
                                let first = data.character.charAt(39);
                                let upper = first.toUpperCase();
                                let char = upper + sliced;
                                //Making Stages Variables
                                let starter = moreData.commonStater.slice(21, -17);
                                let counter = moreData.preferCounter.slice(23, -16);

                                //Best Character Variables
                                let bwPer = moreData.bestWin.slice(16);
                                let bwChar = moreData.char1bw.slice(40, -15);
                                let bwChar1 = moreData.char1bw.charAt(39).toUpperCase();
                                let bwCharacter = bwChar1 + bwChar;
                                let bwCharT = moreData.char2bw.slice(40, -15);
                                let bwChar2 = moreData.char2bw.charAt(39).toUpperCase();
                                let bwCharacter2 = bwChar2 + bwCharT;
                                let BestCharWin = bwCharacter + " vs " + bwCharacter2 + " " + bwPer + " ";

                                //Worst Character Variables
                                let wwPer = moreData.worstWin.slice(16);
                                let wwChar = moreData.char1ww.slice(40, -15);
                                let wwChar1 = moreData.char1ww.charAt(39).toUpperCase();
                                let wwCharacter = wwChar1 + wwChar;
                                let wwCharT = moreData.char2ww.slice(40, -15);
                                let wwChar2 = moreData.char2ww.charAt(39).toUpperCase();
                                let wwCharacter2 = wwChar2 + wwCharT;
                                let WorstCharWin = wwCharacter + " vs " + wwCharacter2 + " " + wwPer + " ";


                                //Recent Tourney Result
                                let tournamentName = moreData.tourneyName;
                                let placing = moreData.placed;
                                let placement = placing + "/" + moreData.playerCount;
                                let ratio = moreData.tourneyWL;
                                let date = moreData.date;

                                let game = data.stats.charAt(24)

                                if (game == "u") {
                                    let embed = new Discord.MessageEmbed()
                                        .setColor("#135ac5")
                                        .setTitle("Found Results for " + data.playerName)
                                        .setURL(url)
                                        .addFields(
                                            {
                                                name: "Character",
                                                value: char,
                                                inline: true
                                            },
                                            {
                                                name: "Win Rate",
                                                value: data.winRate + " (" + moreData.Score + ")",
                                                inline: true
                                            },
                                            {
                                                name: "\u200B",
                                                value: "\u200B"
                                            },
                                            {
                                                name: "Common Stater",
                                                value: starter,
                                                inline: true
                                            },
                                            {
                                                name: "Common CounterPick",
                                                value: counter,
                                                inline: true
                                            },
                                            {
                                                name: "\u200B",
                                                value: "\u200B"
                                            },
                                            {
                                                name: "Best Character Win",
                                                value: BestCharWin,
                                                inline: true
                                            },
                                            {
                                                name: "Worst Character Win",
                                                value: WorstCharWin,
                                                inline: true
                                            },
                                            {
                                                name: "Most Recent Tourney: " + tournamentName + " on " + date,
                                                value: placement + "; " + ratio
                                            }
                                        )
                                    message.channel.send({ embeds: [embed] });
                                } else if (game == "m") {
                                    let embed = new Discord.MessageEmbed()
                                        .setTitle("Found Results for " + data.playerName)
                                        .setURL(url)
                                        .addFields(
                                            { name: "This Player is from SSBM (Melee)", value: "Click on the name at the top of the embed to go directly to PGStats." }
                                        )
                                    message.channel.send({ embeds: [embed] });

                                }
                            }
                            catch (err) {
                                console.log(err);
                                let embed = new Discord.MessageEmbed()
                                    .setColor("#135ac5")
                                    .setTitle("No Results found for " + player)
                                    .setURL(url)
                                    .setFooter("This person isn't in the database of PgStats. If they are, then my deepest apologies.")
                                message.channel.send({ embeds: [embed] });
                                browser.close()
                            }
                        })();

                    }


                    scrapeQotd("https://www.pgstats.com/search?terms=" + player);


                } else {
                    message.channel.send("Provide a serach.")
                }
            } else {
                message.channel.send("Slow down! You need to wait 10 seconds before doing that command!");
            }


            let time = {
                time: milliTime
            }

            fs.writeFileSync("./data/timer.json", JSON.stringify(time, null, 2), err => {
                if (err) {
                    console.log(err);
                }
            });

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}
