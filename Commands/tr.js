const fs = require("fs");
module.exports = {
    name: 'tr',
    aliases: ['rt'],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

            if (message.guildId == "875644093890441226" || message.member.roles.cache.has('829731287618158613') || message.guildId == "828689284298309642") {

                let userID = "";
                let userName = "";
                if (args[0]) {
                    userID = args[0];
                    if (userID.charAt(0) === "<") {
                        let user = message.mentions.users.first();
                        if (user) {
                            userID = user.id;
                            userName = user.username;
                        }
                    }
                } else {
                    userID = message.author.id;
                }
                if (Number.isInteger(Number(userID))) {

                    if (fs.existsSync("./id/" + userID + ".json") && !args[1]) {

                        let id = fs.readFileSync("./id/" + userID + ".json");
                        let idInfo = JSON.parse(id);

                        let tryoutReport = new Discord.MessageEmbed()
                            .setTitle("Tryout Report")
                            .setColor("#135ac5")
                            .setTimestamp()
                            .addFields(
                                {
                                    name: "Tag",
                                    value: idInfo.tag,
                                    inline: true
                                },
                                {
                                    name: "Main",
                                    value: idInfo.main,
                                    inline: true
                                },
                                {
                                    name: "Tryout Date",
                                    value: idInfo.date,
                                    inline: true
                                },
                                {
                                    name: "Result",
                                    value: idInfo.result,
                                    inline: true
                                },
                                {
                                    name: "Assigned Lineup",
                                    value: idInfo.lineup,
                                    inline: true
                                },
                                {
                                    name: "Score",
                                    value: idInfo.score,
                                    inline: true
                                },
                                {
                                    name: "Tester",
                                    value: idInfo.tester
                                }
                            )

                        message.channel.send({ embeds: [tryoutReport] });

                    } else if (fs.existsSync("./id/" + userID + ".json") && args[1]) {

                        if (args[1]) {
                            let cha = args[1].toString().toLowerCase()
                            let main = "";
                            let chara1 = args[1].toString().charAt(0)
                            if (chara1 !== "<") {
                                function Character(chara) {

                                    let character = "";

                                    switch (chara) {
                                        case "mario":
                                            character = "<:Mario:827417152649953320>";
                                            break;
                                        case "dk":
                                            character = "<:KonkeyDong:827435268290248715>";
                                            break;
                                        case "link":
                                            character = "<:Link:827417215745392670>";
                                            break;
                                        case "samus":
                                            character = "<:Samus:827417325191430216>";
                                            break;
                                        case "dsamus":
                                            character = "<:DarkSamus:827417349001969665>";
                                            break;
                                        case "yoshi":
                                            character = "<:Yoshi:827417572231348265>";
                                            break;
                                        case "kirby":
                                            character = "<:Kirby:827434407806894100>";
                                            break;
                                        case "fox":
                                            character = "<:Fox:827417629257367595>";
                                            break;
                                        case "pikachu":
                                            character = "<:Pikachu:827417662031921163>";
                                            break;
                                        case "luigi":
                                            character = "<:Luigi:831689227942756353>";
                                            break;
                                        case "ness":
                                            character = "<:Ness:827433994047062016>";
                                            break;
                                        case "falcon":
                                            character = "<:Falcon:827417688673615873>";
                                            break;
                                        case "puff":
                                            character = "<:Puff:827418056879112213>";
                                            break;
                                        case "peach":
                                            character = "<:Peach:827418085437997097>";
                                            break;
                                        case "daisy":
                                            character = "<:HIIMDAISY:827418107353366558>";
                                            break;
                                        case "bowser":
                                            character = "<:Bowser:827433749280849920>";
                                            break;
                                        case "iceclimbers":
                                            character = "<:Ice:827418134532849695>";
                                            break;
                                        case "zelda":
                                            character = "<:Zelda:827418206892851210>";
                                            break;
                                        case "sheik":
                                            character = "<:Shiek:827418173661642783>";
                                            break;
                                        case "doc":
                                            character = "<:Doc:827418231904010290>";
                                            break;
                                        case "pichu":
                                            character = "<:Pichu:827418255865282581>";
                                            break;
                                        case "falco":
                                            character = "<:Flaco:827418286303346699>";
                                            break;
                                        case "marth":
                                            character = "<:Marth:827418307538845696>";
                                            break;
                                        case "lucina":
                                            character = "<:Lucina:827418333547724800>";
                                            break;
                                        case "yink":
                                            character = "<:Yink:827418477744357497>";
                                            break;
                                        case "ganon":
                                            character = "<:Ganon:827418512184049665>";
                                            break;
                                        case "mewtwo":
                                            character = "<:MewTwo:827418535999438858>";
                                            break;
                                        case "roy":
                                            character = "<:Roy:827418566440517662>";
                                            break;
                                        case "chrom":
                                            character = "<:Chrome:827418593272397854>";
                                            break;
                                        case "gameandwatch":
                                            character = "<:BeepBoop:827418619288748072>";
                                            break;
                                        case "metaknight":
                                            character = "<:MK:827418652252045363>";
                                            break;
                                        case "pit":
                                            character = "<:Pit:827434534249037835>";
                                            break;
                                        case "dpit":
                                            character = "<:Darkpit:827418718531354634>";
                                            break;
                                        case "zss":
                                            character = "<:ZSS:827418742685827092>";
                                            break;
                                        case "wario":
                                            character = "<:Wario:827418766081261588>";
                                            break;
                                        case "snake":
                                            character = "<:Snake:827418797120028702>";
                                            break;
                                        case "ike":
                                            character = "<:Ike:827418821371232256>";
                                            break;
                                        case "pt":
                                            character = "<:Trainer:827434085507924029>";
                                            break;
                                        case "diddy":
                                            character = "<:Diddy:827434693527863306>";
                                            break;
                                        case "lucas":
                                            character = "<:Lucas:827433886148460555>";
                                            break;
                                        case "sonic":
                                            character = "<:Sanic:874054225955549294>";
                                            break;
                                        case "dedede":
                                            character = "<:D3:868992418932998144>";
                                            break;
                                        case "olimar":
                                            character = "<:Olimain:827434053313101844>";
                                            break;
                                        case "lucario":
                                            character = "<:Cario:827418962883117066>";
                                            break;
                                        case "rob":
                                            character = "<:Rob:827434112565641246>";
                                            break;
                                        case "tink":
                                            character = "<:Tink:827418991084830731>";
                                            break;
                                        case "wolf":
                                            character = "<:Wolf:827430058590601258>";
                                            break;
                                        case "villager":
                                            character = "<:villager:827430237092577330>";
                                            break;
                                        case "megaman":
                                            character = "<:MegaMan:827430273431633942>";
                                            break;
                                        case "wiifit":
                                            character = "<:WiifitTrainer:827430313876652053>";
                                            break;
                                        case "rosalina":
                                            character = "<:Rosalina:827430356197965854>";
                                            break;
                                        case "mac":
                                            character = "<:LittleMac:827430387613040660>";
                                            break;
                                        case "greninja":
                                            character = "<:Greninja:838645191035977738>";
                                            break;
                                        case "palutena":
                                            character = "<:Palutena:827430582971400194>";
                                            break;
                                        case "pacman":
                                            character = "<:Pac:827430630228230154>";
                                            break;
                                        case "robin":
                                            character = "<:Robin:827430661496504381>";
                                            break;
                                        case "shulk":
                                            character = "<:Shulk:827430696926314496>";
                                            break;
                                        case "jr":
                                            character = "<:Jr:827430727125565450>";
                                            break;
                                        case "duckhunt":
                                            character = "<:DuckHunt:827430752878198794>";
                                            break;
                                        case "ryu":
                                            character = "<:Ryu:827430804925054996>";
                                            break;
                                        case "ken":
                                            character = "<:Ken:827430845836689408>";
                                            break;
                                        case "cloud":
                                            character = "<:Cloud:827430878853857341>";
                                            break;
                                        case "corrin":
                                            character = "<:Corrin:827433096034385921>";
                                            break;
                                        case "bayonetta":
                                            character = "<:Bayo:827433735182876713>";
                                            break;
                                        case "inkling":
                                            character = "<:Inkling:827435050974314536>";
                                            break;
                                        case "ridley":
                                            character = "<:Ridley:827433248376094720>";
                                            break;
                                        case "simon":
                                            character = "<:Simon:827433287215480843>";
                                            break;
                                        case "richter":
                                            character = "<:Richter:827433312996950017>";
                                            break;
                                        case "kingkrool":
                                            character = "<:KingKRool:827433339257618462>";
                                            break;
                                        case "isabelle":
                                            character = "<:Dog:827433862836781076>";
                                            break;
                                        case "incineroar":
                                            character = "<:Incin:827433381888917555>";
                                            break;
                                        case "plant":
                                            character = "<:Plant:827433420589760532>";
                                            break;
                                        case "joker":
                                            character = "<:Joker:827433449718808607>";
                                            break;
                                        case "hero":
                                            character = "<:Hero:827433824408305736>";
                                            break;
                                        case "banjo":
                                            character = "<:Banjo:827433473870135296>";
                                            break;
                                        case "terry":
                                            character = "<:Terry:827433496708251659>";
                                            break;
                                        case "byleth":
                                            character = "<:Byleth:827433549207568394>";
                                            break;
                                        case "minmin":
                                            character = "<:MinMin:827433587694633010>";
                                            break;
                                        case "steve":
                                            character = "<:Steve:827433613515423774>";
                                            break;
                                        case "sephiroth":
                                            character = "<:Sephiroth:827433636424056842>";
                                            break;
                                        case "pythra":
                                            character = "<:Pythra:827433662038802442>";
                                            break;
                                        case "kazuya":
                                            character = "<:Kazuya:862094411658690560>";
                                            break;
                                        case "gunner":
                                            character = "<:Gunner:827430507066818601>";
                                            break;
                                        case "swordfighter":
                                            character = "<:SwordFighter:827430493455777803>";
                                            break;
                                        case "brawler":
                                            character = "<:Brawler:827434882066153472>";
                                            break;
                                    }
                                    return character;
                                }

                                main = Character(cha);
                            } else {
                                main = args[1];
                            }


                            if (args[2]) {
                                let decide = true;
                                let standscore = args[2] + "/140";
                                let score = args[2];
                                let lineup = "";
                                let result = "";
                                let time = new Date();
                                let date = time.toString().slice(0, 24);
                                let fail = date + 1.21e+9

                                if (Number(score) >= 90) {
                                    lineup = "Primary";
                                    result = "Pass";
                                } else if (Number(score) >= 40 && Number(score) < 90) {
                                    lineup = "Secondary";
                                    result = "Pass";
                                } else if (Number(score) <= 39 && Number(score) >= 25) {
                                    lineup = "Mock's Only";
                                    result = "Pass";
                                } else {
                                    lineup = "None";
                                    result = "Fail";
                                    decide = false;
                                }

                                let playerData = {
                                    "tag": userName,
                                    "main": main,
                                    "score": standscore,
                                    "result": result,
                                    "lineup": lineup,
                                    "date": date,
                                    "id": userID,
                                    "tester": message.author.username
                                }
                                fs.writeFileSync("./id/" + userID + ".json", JSON.stringify(playerData, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });

                                let tryoutReport = new Discord.MessageEmbed()
                                    .setTitle("Tryout Report")
                                    .setColor("#639099")
                                    .setTimestamp()
                                    .addFields(
                                        {
                                            name: "Tag",
                                            value: userName,
                                            inline: true
                                        },
                                        {
                                            name: "Main",
                                            value: main,
                                            inline: true
                                        },
                                        {
                                            name: "Tryout Date",
                                            value: date,
                                            inline: true
                                        },
                                        {
                                            name: "Result",
                                            value: result,
                                            inline: true
                                        },
                                        {
                                            name: "Assigned Lineup",
                                            value: lineup,
                                            inline: true
                                        },
                                        {
                                            name: "Score",
                                            value: standscore,
                                            inline: true
                                        },
                                        {
                                            name: "Tester",
                                            value: message.author.username,
                                            inline: true
                                        }
                                    )

                                if (decide === true) {
                                    client.channels.cache.get('881676176869961849').send({ embeds: [tryoutReport] });
                                } else {

                                    tryoutReport.addField("Tryout Cooldown", fail);

                                    client.channels.cache.get('834558158793867275').send({ embeds: [tryoutReport] });
                                }


                                message.channel.send(userName + " tryout report file has been updated.");

                            } else {
                                message.channel.send("You need a score for " + userName);
                            }

                        } else {
                            message.channel.send("Who is " + userName + " main?");
                        }

                    } else if (!fs.existsSync("./id/" + userID + ".json")) {

                        let playerData = {
                            "tag": userName,
                            "main": "N/A",
                            "score": "N/A",
                            "result": "N/A",
                            "lineup": "N/A",
                            "date": "N/A",
                            "id": userID,
                            "tester": "N/A"
                        }

                        fs.writeFile("./id/" + userID + ".json", JSON.stringify(playerData, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                            message.channel.send("Your tryout report profile has been created!");
                        });
                    }

                } else {
                    message.channel.send("Mention someone");
                }

            } else {
                message.channel.send("You can't use this in this server!");
            }


        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}