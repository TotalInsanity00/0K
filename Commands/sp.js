const fs = require('fs');
module.exports = {
    name: 'sp',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {

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
                    case "sora":
                        character = "<:Sora:897461767821725696>";
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
                    case "byakuya":
                        character = "<:Byakuya:883145366856417301>";
                        break;
                    case "carmine":
                        character = "<:Carmine:883144978233167973>";
                        break;
                    case "chaos":
                        character = "<:Chaos:883145322078015530>";
                        break;
                    case "enkidu":
                        character = "<:Enkidu:883145468190806017>";
                        break;
                    case "gordeau":
                        character = "<:Gordeau:883145036332695562>";
                        break;
                    case "hilda":
                        character = "<:Hilda:883145294127202304>";
                        break;
                    case "hyde":
                        character = "<:Hyde:883143519248744488>";
                        break;
                    case "merkava":
                        character = "<:Merkava:883145151990616165>";
                        break;
                    case "mika":
                        character = "<:Mika:883145424314196038>";
                        break;
                    case "yuzuriha":
                        character = "<:Yuzuriha:883145252179968110>";
                        break;
                    case "waldstein":
                        character = "<:Waldstein:883144909475954688>";
                        break;
                    case "wagner":
                        character = "<:Wagner:883145500394676224>";
                        break;
                    case "linne":
                        character = "<:Linne:883143802796253264>";
                        break;
                    case "vatista":
                        character = "<:Vatista:883145174870528000>";
                        break;
                    case "seth":
                        character = "<:Seth:883145208395616296>";
                        break;
                    case "phonon":
                        character = "<:Phonon:883145388524179456>";
                        break;
                    case "orie":
                        character = "<:Orie:883145009036136448>";
                        break;
                    case "nanase":
                        character = "<:Nanase:883145347625521202>";
                        break;
                }
                return character;
            }

            let tag = message.author.username

            if (args[0]) {

                if (args[0].toLowerCase() == "help") {

                    let helpEmbed = new Discord.MessageEmbed()
                        .setTitle("Make a Profile for Smash!")
                        .setColor("#D7F344")
                        .setTimestamp()
                        .addFields(
                            {
                                name: "Create a profile!",
                                value: "~sp create",
                                inline: true
                            },
                            {
                                name: "Set Tag",
                                value: "~sp tag [Tag]",
                                inline: true
                            },
                            {
                                name: "Setting Characters",
                                value: "Don't include , after each character.",
                                inline: true
                            },
                            {
                                name: "Set Mains",
                                value: "~sp mains [Characters]",
                                inline: true
                            },
                            {
                                name: "Set Secondaries",
                                value: "~sp secondary [Characters]",
                                inline: true
                            },
                            {
                                name: "Set Pockets",
                                value: "~sp pockets [Characters]",
                                inline: true
                            },
                            {
                                name: "Set Region",
                                value: "~sp region [region]",
                                inline: true
                            },
                            {
                                name: "Set Switch FC",
                                value: "~sp fc [Switch-Fc]",
                                inline: true
                            },
                            {
                                name: "Set Note",
                                value: "~sp note [notes]",
                                inline: true
                            },
                            {
                                name: "Set Color",
                                value: "~sp color [color]",
                                inline: true
                            },
                            {
                                name: "Set Image",
                                value: "~sp img [img url]",
                                inline: true
                            },
                            {
                                name: "Profile",
                                value: "~profile [optional: @person]",
                                inline: true
                            },
                            {
                                name: "Characters",
                                value: "~sp characters",
                                inline: true
                            }
                        )
                    message.channel.send({ embeds: [helpEmbed] });
                } else if (args[0].toLowerCase() == "create") {
                    if (!fs.existsSync("./profiles/" + message.author.id + ".json")) {

                        let data = {
                            "Tag": tag,
                            "Characters": {
                                "Mains": "None",
                                "Secondary": "None",
                                "Pockets": "None"
                            },
                            "Region": "None",
                            "SwFC": "None",
                            "Note": "None",
                            "Color": "#f3f3f3",
                            "Image": "https://media.discordapp.net/attachments/881972266689265704/882903114892599327/1109817.png?width=599&height=473"
                        }


                        fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Your profile has been created!");
                    } else {
                        message.channel.send("You already have a profile.");
                    }
                }
                else if (args[0].toLowerCase() == "mains") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);

                        let mains = "";
                        if (args[1]) {
                            for (let len = args.length - 1; len > 0; --len) {

                                if (args[len]) {
                                    let chara = Character((args[len]).toLowerCase());

                                    mains = mains + " " + chara
                                } else {
                                    message.channel.send("Provide a character");
                                }
                            }
                            if (mains == " ") {
                                message.channel.send("This is not a character. Use ~sp characters to see what the correct input is.");
                            } else {
                                let data = {
                                    "Tag": idInfo.Tag,
                                    "Characters": {
                                        "Mains": mains,
                                        "Secondary": idInfo.Characters.Secondary,
                                        "Pockets": idInfo.Characters.Pockets
                                    },
                                    "Region": idInfo.Region,
                                    "SwFC": idInfo.SwFC,
                                    "Note": idInfo.Note,
                                    "Color": idInfo.Color,
                                    "Image": idInfo.Image
                                }


                                fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                message.channel.send("Updated mains to: " + mains);
                            }

                        } else {
                            message.channel.send("Provide Characters");
                        }
                    } else {
                        message.channel.send("You need to create a profile");
                    }
                } else if (args[0].toLowerCase() == "secondary" || args[0].toLowerCase() == "secondaries") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);

                        let secondary = "";
                        if (args[1]) {
                            for (let len = args.length - 1; len > 0; --len) {

                                if (args[len]) {
                                    let chara = Character((args[len]).toLowerCase());

                                    secondary = secondary + " " + chara
                                } else {
                                    message.channel.send("Provide a character");
                                }
                            }

                            if (secondary == " ") {
                                message.channel.send("This is not a character. Use ~sp characters to see what the correct input is.");
                            } else {
                                let data = {
                                    "Tag": idInfo.Tag,
                                    "Characters": {
                                        "Mains": idInfo.Characters.Mains,
                                        "Secondary": secondary,
                                        "Pockets": idInfo.Characters.Pockets
                                    },
                                    "Region": idInfo.Region,
                                    "SwFC": idInfo.SwFC,
                                    "Note": idInfo.Note,
                                    "Color": idInfo.Color,
                                    "Image": idInfo.Image
                                }


                                fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                message.channel.send("Updated secondaries to: " + secondary);
                            }

                        } else {
                            message.channel.send("Provide Characters");
                        }
                    } else {
                        message.channel.send("You need to create a profile");
                    }
                } else if (args[0].toLowerCase() == "pockets") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);

                        let pockets = "";
                        if (args[1]) {
                            for (let len = args.length - 1; len > 0; --len) {

                                if (args[len]) {
                                    let chara = Character((args[len]).toLowerCase());

                                    pockets = pockets + " " + chara
                                } else {
                                    message.channel.send("Provide a character");
                                }
                            }

                            if (pockets == " ") {
                                message.channel.send("This is not a character. Use ~sp characters to see what the correct input is.");
                            } else {
                                let data = {
                                    "Tag": idInfo.Tag,
                                    "Characters": {
                                        "Mains": idInfo.Characters.Mains,
                                        "Secondary": idInfo.Characters.Secondary,
                                        "Pockets": pockets
                                    },
                                    "Region": idInfo.Region,
                                    "SwFC": idInfo.SwFC,
                                    "Note": idInfo.Note,
                                    "Color": idInfo.Color,
                                    "Image": idInfo.Image
                                }


                                fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                message.channel.send("Updated pockets to: " + pockets);
                            }

                        } else {
                            message.channel.send("Provide Characters");
                        }
                    } else {
                        message.channel.send("You need to create a profile");
                    }
                } else if (args[0].toLowerCase() == "image") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);
                        let link = args[1];

                        if (link.includes(".png") || link.includes(".jpg") || link.includes(".jpeg") || link.includes(".gif")) {
                            let data = {
                                "Tag": idInfo.Tag,
                                "Characters": {
                                    "Mains": idInfo.Characters.Mains,
                                    "Secondary": idInfo.Characters.Secondary,
                                    "Pockets": idInfo.Characters.Pockets
                                },
                                "Region": idInfo.Region,
                                "SwFC": idInfo.SwFC,
                                "Note": idInfo.Note,
                                "Color": idInfo.Color,
                                "Image": link
                            }

                            fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                                if (err) {
                                    console.log(err);
                                }
                            });
                            message.channel.send("Updated the image to: " + link);
                        } else {
                            message.channel.send("Invalid Link");
                        }

                    }
                } else if (args[0].toLowerCase() == "tag") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);
                        let tag = args.slice(1).toString().replace(/,/g, " ");

                        let data = {
                            "Tag": tag,
                            "Characters": {
                                "Mains": idInfo.Characters.Mains,
                                "Secondary": idInfo.Characters.Secondary,
                                "Pockets": idInfo.Characters.Pockets
                            },
                            "Region": idInfo.Region,
                            "SwFC": idInfo.SwFC,
                            "Note": idInfo.Note,
                            "Color": idInfo.Color,
                            "Image": idInfo.Image
                        }
                        fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Updated the tag to: " + tag);
                    }

                } else if (args[0].toLowerCase() == "region") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);
                        let region = args.slice(1).toString().replace(/,/g, " ");

                        let data = {
                            "Tag": idInfo.Tag,
                            "Characters": {
                                "Mains": idInfo.Characters.Mains,
                                "Secondary": idInfo.Characters.Secondary,
                                "Pockets": idInfo.Characters.Pockets
                            },
                            "Region": region,
                            "SwFC": idInfo.SwFC,
                            "Note": idInfo.Note,
                            "Color": idInfo.Color,
                            "Image": idInfo.Image
                        }
                        fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Updated the region to: " + region);
                    }
                } else if (args[0].toLowerCase() == "fc") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);
                        let SwFC = args[1];

                        let data = {
                            "Tag": idInfo.Tag,
                            "Characters": {
                                "Mains": idInfo.Characters.Mains,
                                "Secondary": idInfo.Characters.Secondary,
                                "Pockets": idInfo.Characters.Pockets
                            },
                            "Region": idInfo.Region,
                            "SwFC": SwFC,
                            "Note": idInfo.Note,
                            "Color": idInfo.Color,
                            "Image": idInfo.Image
                        }
                        fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Updated the Switch FC to: " + SwFC);
                    }

                } else if (args[0].toLowerCase() == "note") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);
                        let note = args.slice(1).toString().replace(/,/g, " ");

                        let data = {
                            "Tag": idInfo.Tag,
                            "Characters": {
                                "Mains": idInfo.Characters.Mains,
                                "Secondary": idInfo.Characters.Secondary,
                                "Pockets": idInfo.Characters.Pockets
                            },
                            "Region": idInfo.Region,
                            "SwFC": idInfo.SwFC,
                            "Note": note,
                            "Color": idInfo.Color,
                            "Image": idInfo.Image
                        }
                        fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Updated the note to: " + note);
                    }
                } else if (args[0].toLowerCase() == "color" || args[0].toLowerCase() == "colour") {
                    if (fs.existsSync("./profiles/" + message.author.id + ".json")) {
                        let id = fs.readFileSync("./profiles/" + message.author.id + ".json");
                        let idInfo = JSON.parse(id);
                        let color = args[1].toLowerCase();
                        let colour = "";
                        if (color.charAt(0) == "#") {
                            colour = args[1].toLowerCase();
                        } else {
                            switch (color) {
                                case "red":
                                    colour = "#ff0000";
                                    break;
                                case "blue":
                                    colour = "#0037ff";
                                    break;
                                case "green":
                                    colour = "#028000";
                                    break;
                                case "yellow":
                                    colour = "#fff700";
                                    break;
                                case "orange":
                                    colour = "#ff9100";
                                    break;
                                case "black":
                                    colour = "#050505";
                                    break;
                                case "gray":
                                    colour = "#6b6b6b";
                                    break;
                                case "white":
                                    colour = "#ffffff";
                                    break;
                                case "pink":
                                    colour = "#ff00dd";
                                    break;
                                case "purple":
                                    colour = "#b700ff";
                                    break;
                                case "teal":
                                    colour = "#00fff2";
                                    break;
                            }

                            if (colour == "") {
                                colour = "#f3f3f3";
                            }

                        }

                        let data = {
                            "Tag": idInfo.Tag,
                            "Characters": {
                                "Mains": idInfo.Characters.Mains,
                                "Secondary": idInfo.Characters.Secondary,
                                "Pockets": idInfo.Characters.Pockets
                            },
                            "Region": idInfo.Region,
                            "SwFC": idInfo.SwFC,
                            "Note": idInfo.Note,
                            "Color": colour,
                            "Image": idInfo.Image
                        }
                        fs.writeFileSync("./profiles/" + message.author.id + ".json", JSON.stringify(data, null, 2), err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        message.channel.send("Updated the color to: " + colour);


                    }

                } else if (args[0].toLowerCase() == "characters") {

                    if (!args[1]) {
                        message.channel.send("After characters, put the game you'd like: [ssbu, unist]");
                    }

                    if (args[1]) {
                        if (args[1].toLowerCase() == "ssbu" || args[1].toLowerCase() == "ult" || args[1].toLowerCase() == "ultimate") {
                            message.channel.send("[ 'Mario', 'Dk', 'Link', 'Samus', 'Dsamus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'Falcon', 'Puff', 'Peach', 'Daisy', 'Bowser', 'Iceclimbers', 'Zelda', 'Sheik', 'Doc', 'Pichu', 'Falco', 'Marth', 'Lucina', 'Yink', 'Ganon' 'Mewtwo', 'Roy', 'Chrom', 'Gameandwatch', 'Metaknight', 'Pit', 'Dpit', 'Zss', 'Wario', 'Snake', 'Ike', 'Pt', 'Diddy', 'Lucas', 'Sonic', 'Dedede', 'Olimar', 'Lucario', 'Rob', 'Tink', 'Wolf', 'Villager', 'Megaman', 'Wiifit', 'Rosalina', 'Mac', 'Greninja', 'Palutena', 'Pacman', 'Robin', 'Shulk', 'Jr', 'Duckhunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling', 'Ridley', 'Simon', 'Richter', 'Kingkrool', 'Isabelle', 'Incineroar', 'Plant', 'Joker', 'Hero', 'Banjo', 'Terry', 'Byleth', 'Minmin', 'Steve', 'Sephiroth', 'Pythra', 'Kazuya' , 'Sora', 'Gunner', 'Brawler', 'Swordfighter']")

                        } else if (args[1].toLowerCase() == "unist") {
                            message.channel.send("['byakuya', 'carmine', 'chaos', 'enkidu', 'gordeau', 'hilda', 'hyde', 'merkava', 'mika', 'yuzuriha', 'waldstein', 'wagner', 'linne', 'vatista', 'seth', 'phono', 'orie', 'nanase']")

                        }

                    }
                } else {
                    message.channel.send("Supply one of these categories: [ 'tag', 'mains', 'secondary', 'pockets', 'region', 'fc', 'note', 'color', 'image' ] ")
                }
            }
        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
        }
    }
}
