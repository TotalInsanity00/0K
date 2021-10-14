const fs = require("fs");

module.exports = {
    name: 'mystery',
    aliases: [''],
    description: "This is a cb command!",
    async execute(client, message, args, Discord) {
        try {
            if (!args[0]) {


                let date = new Date().getTime()
                let future = date + 15500
                let time = "";
                let cooldown = "";
                let check = false;

                // Check if the cooldown files exist
                if (fs.existsSync(`./mystery/${message.author.id}.json`)) {
                    time = fs.readFileSync(`./mystery/${message.author.id}.json`);
                    cooldown = JSON.parse(time);
                } else {
                    let info = {
                        time: date,
                        future: future
                    }

                    fs.writeFileSync(`./mystery/${message.author.id}.json`, JSON.stringify(info, null, 2), err => {
                        if (err) {
                            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
                            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
                        }
                    });

                    time = fs.readFileSync(`./mystery/${message.author.id}.json`);
                    cooldown = JSON.parse(time);
                    check = true;
                }
                //If the cooldown is good
                if (cooldown.future <= date || check === true) {

                    let info = {
                        time: date,
                        future: future
                    }

                    fs.writeFileSync(`./mystery/${message.author.id}.json`, JSON.stringify(info, null, 2), err => {
                        if (err) {
                            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
                            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
                        }
                    });

                    let data = fs.readFileSync(`./data/mystery.json`);
                    let scenario = JSON.parse(data);
                    let user = message.member;
                    let block = "";
                    let admin = "";
                    if (message.guildId == "828689284298309642") {
                        //AVL

                        block = message.guild.roles.cache.get("898255637497122886");
                        admin = message.guild.roles.cache.get("829731074262695987");
                    } else if (message.guildId == "875644093890441226") {
                        //0k

                        block = message.guild.roles.cache.get("879175881246007346");
                        admin = message.guild.roles.cache.get("879512127814135828");
                    }

                    function RNG(num) {
                        let opt = Math.floor(Math.random() * num + 1);
                        return opt;
                    }

                    let chance = Math.floor(Math.random() * 100);
                    let result = "";

                    //Percentages

                    if (chance >= 1 && chance <= 11) {
                        result = 1;
                    } else if (chance >= 12 && chance <= 24) {
                        result = 2;
                    } else if (chance >= 25 && chance <= 28) {
                        result = 3;
                    } else if (chance >= 29 && chance <= 39) {
                        result = 4;
                    } else if (chance >= 40 && chance <= 45) {
                        result = 5;
                    } else if (chance >= 46 && chance <= 56) {
                        result = 6;
                    } else if (chance >= 57 && chance <= 65) {
                        result = 7;
                    } else if (chance >= 66 && chance <= 73) {
                        result = 8;
                    } else if (chance >= 74 && chance <= 78) {
                        result = 9;
                    } else if (chance >= 79 && chance <= 86) {
                        result = 10;
                    } else if (chance >= 87 && chance <= 90) {
                        result = 11;
                    } else if (chance >= 91 && chance <= 95) {
                        result = 12;
                    } else if (chance >= 96 && chance <= 100) {
                        result = 13;
                    } else {
                        console.log(chance);
                        let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id;
                        client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [Mystery Error](${msgLink})`);
                    }

                    //Data
                    let mysteryData = fs.readFileSync("./data/chanceData.json");
                    let myUp = JSON.parse(mysteryData);
                    let upData = {
                        "drink": myUp.drink,
                        "eat": myUp.eat,
                        "pills": myUp.pills,
                        "parkour": {
                            "blackout": myUp.parkour.blackout,
                            "nothing": myUp.parkour.nothing
                        },
                        "oomfie": {
                            "blackout": myUp.oomfie.blackout,
                            "nothing": myUp.oomfie.nothing,
                            "kami": myUp.oomfie.kami,
                            "kick": myUp.oomfie.kick
                        },
                        "hostage": {
                            "run": {
                                "nothing": myUp.hostage.run.nothing,
                                "blackout": myUp.hostage.run.blackout
                            },
                            "stay": {
                                "nothing": myUp.hostage.stay.nothing,
                                "blackout": myUp.hostage.stay.blackout
                            }
                        },
                        "slushi": {
                            "nothing": myUp.slushi.nothing,
                            "blackout": myUp.slushi.blackout
                        },
                        "trust": {
                            "fall": {
                                "blackout": myUp.trust.fall.blackout,
                                "nothing": myUp.trust.fall.nothing
                            },
                            "hang": {
                                "blackout": myUp.trust.hang.blackout,
                                "nothing": myUp.trust.hang.nothing
                            }
                        },
                        "beach": {
                            "boyfriend": {
                                "blackout": myUp.beach.boyfriend.blackout,
                                "nothing": myUp.beach.boyfriend.nothing
                            },
                            "kami": myUp.beach.kami,
                            "nothing": myUp.beach.nothing
                        },
                        "sleep": {
                            "blackout": myUp.sleep.blackout,
                            "nothing": myUp.sleep.nothing,
                        },
                        "drive": {
                            "nothing": myUp.drive.nothing,
                            "blackout": myUp.drive.blackout,
                            "revived": myUp.drive.revived
                        },
                        "dog": {
                            "nothing": myUp.dog.nothing,
                            "blackout": myUp.dog.blackout,
                            "flower": myUp.dog.flower
                        },
                        "shroom": {
                            "eat": {
                                "blackout": myUp.shroom.eat.blackout,
                                "nothing": myUp.shroom.eat.nothing,
                                "shroom": myUp.shroom.eat.shroom
                            },
                            "pass": {
                                "blackout": myUp.shroom.pass.blackout,
                                "nothing": myUp.shroom.pass.nothing
                            }
                        },
                        "use": myUp.use + 1
                    };
                    let opt = "";

                    //Resulting Scenarios:
                    if (result == 1) {
                        //Drink
                        message.channel.send(scenario.drink.tangy);

                        setTimeout(() => user.roles.add(block), 2000);
                        setTimeout(() => user.roles.remove(block), 12000);

                        upData = {
                            "drink": myUp.drink + 1,
                            "eat": myUp.eat,
                            "pills": myUp.pills,
                            "parkour": {
                                "blackout": myUp.parkour.blackout,
                                "nothing": myUp.parkour.nothing
                            },
                            "oomfie": {
                                "blackout": myUp.oomfie.blackout,
                                "nothing": myUp.oomfie.nothing,
                                "kami": myUp.oomfie.kami,
                                "kick": myUp.oomfie.kick
                            },
                            "hostage": {
                                "run": {
                                    "nothing": myUp.hostage.run.nothing,
                                    "blackout": myUp.hostage.run.blackout
                                },
                                "stay": {
                                    "nothing": myUp.hostage.stay.nothing,
                                    "blackout": myUp.hostage.stay.blackout
                                }
                            },
                            "slushi": {
                                "nothing": myUp.slushi.nothing,
                                "blackout": myUp.slushi.blackout
                            },
                            "trust": {
                                "fall": {
                                    "blackout": myUp.trust.fall.blackout,
                                    "nothing": myUp.trust.fall.nothing
                                },
                                "hang": {
                                    "blackout": myUp.trust.hang.blackout,
                                    "nothing": myUp.trust.hang.nothing
                                }
                            },
                            "beach": {
                                "boyfriend": {
                                    "blackout": myUp.beach.boyfriend.blackout,
                                    "nothing": myUp.beach.boyfriend.nothing
                                },
                                "kami": myUp.beach.kami,
                                "nothing": myUp.beach.nothing
                            },
                            "sleep": {
                                "blackout": myUp.sleep.blackout,
                                "nothing": myUp.sleep.nothing,
                            },
                            "drive": {
                                "nothing": myUp.drive.nothing,
                                "blackout": myUp.drive.blackout,
                                "revived": myUp.drive.revived
                            },
                            "dog": {
                                "nothing": myUp.dog.nothing,
                                "blackout": myUp.dog.blackout,
                                "flower": myUp.dog.flower
                            },
                            "shroom": {
                                "eat": {
                                    "blackout": myUp.shroom.eat.blackout,
                                    "nothing": myUp.shroom.eat.nothing,
                                    "shroom": myUp.shroom.eat.shroom
                                },
                                "pass": {
                                    "blackout": myUp.shroom.pass.blackout,
                                    "nothing": myUp.shroom.pass.nothing
                                }
                            },
                            "use": myUp.use + 1
                        }

                    } else if (result == 2) {
                        //Eat
                        message.channel.send(scenario.eat.hot);

                        upData = {
                            "drink": myUp.drink,
                            "eat": myUp.eat + 1,
                            "pills": myUp.pills,
                            "parkour": {
                                "blackout": myUp.parkour.blackout,
                                "nothing": myUp.parkour.nothing
                            },
                            "oomfie": {
                                "blackout": myUp.oomfie.blackout,
                                "nothing": myUp.oomfie.nothing,
                                "kami": myUp.oomfie.kami,
                                "kick": myUp.oomfie.kick
                            },
                            "hostage": {
                                "run": {
                                    "nothing": myUp.hostage.run.nothing,
                                    "blackout": myUp.hostage.run.blackout
                                },
                                "stay": {
                                    "nothing": myUp.hostage.stay.nothing,
                                    "blackout": myUp.hostage.stay.blackout
                                }
                            },
                            "slushi": {
                                "nothing": myUp.slushi.nothing,
                                "blackout": myUp.slushi.blackout
                            },
                            "trust": {
                                "fall": {
                                    "blackout": myUp.trust.fall.blackout,
                                    "nothing": myUp.trust.fall.nothing
                                },
                                "hang": {
                                    "blackout": myUp.trust.hang.blackout,
                                    "nothing": myUp.trust.hang.nothing
                                }
                            },
                            "beach": {
                                "boyfriend": {
                                    "blackout": myUp.beach.boyfriend.blackout,
                                    "nothing": myUp.beach.boyfriend.nothing
                                },
                                "kami": myUp.beach.kami,
                                "nothing": myUp.beach.nothing
                            },
                            "sleep": {
                                "blackout": myUp.sleep.blackout,
                                "nothing": myUp.sleep.nothing,
                            },
                            "drive": {
                                "nothing": myUp.drive.nothing,
                                "blackout": myUp.drive.blackout,
                                "revived": myUp.drive.revived
                            },
                            "dog": {
                                "nothing": myUp.dog.nothing,
                                "blackout": myUp.dog.blackout,
                                "flower": myUp.dog.flower
                            },
                            "shroom": {
                                "eat": {
                                    "blackout": myUp.shroom.eat.blackout,
                                    "nothing": myUp.shroom.eat.nothing,
                                    "shroom": myUp.shroom.eat.shroom
                                },
                                "pass": {
                                    "blackout": myUp.shroom.pass.blackout,
                                    "nothing": myUp.shroom.pass.nothing
                                }
                            },
                            "use": myUp.use + 1
                        }
                    } else if (result == 3) {
                        //Pills
                        message.channel.send(scenario.pills.p1);
                        setTimeout(() => message.channel.send(scenario.pills.p2), 2000);

                        setTimeout(() => user.roles.add(admin), 2000);
                        setTimeout(() => user.roles.remove(admin), 12000);

                        upData = {
                            "drink": myUp.drink,
                            "eat": myUp.eat,
                            "pills": myUp.pills + 1,
                            "parkour": {
                                "blackout": myUp.parkour.blackout,
                                "nothing": myUp.parkour.nothing
                            },
                            "oomfie": {
                                "blackout": myUp.oomfie.blackout,
                                "nothing": myUp.oomfie.nothing,
                                "kami": myUp.oomfie.kami,
                                "kick": myUp.oomfie.kick
                            },
                            "hostage": {
                                "run": {
                                    "nothing": myUp.hostage.run.nothing,
                                    "blackout": myUp.hostage.run.blackout
                                },
                                "stay": {
                                    "nothing": myUp.hostage.stay.nothing,
                                    "blackout": myUp.hostage.stay.blackout
                                }
                            },
                            "slushi": {
                                "nothing": myUp.slushi.nothing,
                                "blackout": myUp.slushi.blackout
                            },
                            "trust": {
                                "fall": {
                                    "blackout": myUp.trust.fall.blackout,
                                    "nothing": myUp.trust.fall.nothing
                                },
                                "hang": {
                                    "blackout": myUp.trust.hang.blackout,
                                    "nothing": myUp.trust.hang.nothing
                                }
                            },
                            "beach": {
                                "boyfriend": {
                                    "blackout": myUp.beach.boyfriend.blackout,
                                    "nothing": myUp.beach.boyfriend.nothing
                                },
                                "kami": myUp.beach.kami,
                                "nothing": myUp.beach.nothing
                            },
                            "sleep": {
                                "blackout": myUp.sleep.blackout,
                                "nothing": myUp.sleep.nothing,
                            },
                            "drive": {
                                "nothing": myUp.drive.nothing,
                                "blackout": myUp.drive.blackout,
                                "revived": myUp.drive.revived
                            },
                            "dog": {
                                "nothing": myUp.dog.nothing,
                                "blackout": myUp.dog.blackout,
                                "flower": myUp.dog.flower
                            },
                            "shroom": {
                                "eat": {
                                    "blackout": myUp.shroom.eat.blackout,
                                    "nothing": myUp.shroom.eat.nothing,
                                    "shroom": myUp.shroom.eat.shroom
                                },
                                "pass": {
                                    "blackout": myUp.shroom.pass.blackout,
                                    "nothing": myUp.shroom.pass.nothing
                                }
                            },
                            "use": myUp.use + 1
                        }
                    } else if (result == 4) {
                        //Parkour
                        opt = RNG(99);

                        message.channel.send(scenario.parkour.p1);

                        setTimeout(() => message.channel.send("..."), 3000);

                        if (opt >= 1 && opt <= 35) {
                            setTimeout(() => message.channel.send(scenario.parkour.p2g), 5000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing + 1
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 36) {
                            setTimeout(() => message.channel.send(scenario.parkour.p2b), 5000);
                            setTimeout(() => user.roles.add(block), 5000);
                            setTimeout(() => user.roles.remove(block), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout + 1,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 5) {
                        //Oomfie
                        opt = RNG(99);

                        if (opt == 1) {
                            message.channel.send(scenario.oomfie.bye);
                            message.channel.send(scenario.oomfie.byeImg);

                            message.author.send("Sorry bout that oomfie. Here you go (Please join back I'll give you more oomfies): https://discord.gg/nGsYaqzEgJ"); w

                            let member = message.guild.members.cache.get(message.author.id);
                            setTimeout(() => member.kick(), 5000);

                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick + 1
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 2 && opt <= 6) {

                            message.channel.send(scenario.oomfie.goodjob);
                            message.channel.send(scenario.oomfie.goodjobImg);

                            setTimeout(() => user.roles.add(admin), 2000);
                            setTimeout(() => user.roles.remove(admin), 12000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami + 1,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 7 && opt <= 43) {
                            message.channel.send(scenario.oomfie.hi);
                            message.channel.send(scenario.oomfie.hiImg);

                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing + 1,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 44) {
                            message.channel.send(scenario.oomfie.ohno);
                            message.channel.send(scenario.oomfie.ohnoImg);
                            setTimeout(() => user.roles.add(block), 5000);
                            setTimeout(() => user.roles.remove(block), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout + 1,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 6) {
                        //Hostage situation
                        opt = RNG(99);
                        let option = RNG(2);
                        message.channel.send(scenario.hostage.info);
                        setTimeout(() => message.channel.send("..."), 3000);
                        if (opt >= 1 && opt <= 36) {
                            if (option == 1) {
                                setTimeout(() => message.channel.send(scenario.hostage.safe.stay), 5000);

                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing + 1,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            }

                            if (option == 2) {
                                setTimeout(() => message.channel.send(scenario.hostage.safe.run), 5000);

                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing + 1,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else {
                                console.log(option);
                            }
                        } else if (opt >= 37) {
                            if (option == 1) {
                                setTimeout(() => message.channel.send(scenario.hostage.death.stay), 5000);
                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing + 1,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (option == 2) {
                                setTimeout(() => message.channel.send(scenario.hostage.death.run), 5000);
                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout + 1
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else {
                                console.log(option);
                            }
                        }

                    } else if (result == 7) {
                        //Slushi
                        opt = RNG(99)
                        message.channel.send(scenario.slushi.base);

                        setTimeout(() => message.channel.send("..."), 3000);

                        if (opt >= 1 && opt <= 35) {
                            setTimeout(() => message.channel.send(scenario.slushi.bad), 5000);
                            setTimeout(() => user.roles.add(block), 5000);
                            setTimeout(() => user.roles.remove(block), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout + 1
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 36) {
                            setTimeout(() => message.channel.send(scenario.slushi.safe), 5000);

                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing + 1,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 8) {
                        //Trust Fall
                        opt = RNG(99)
                        let option = RNG(2);

                        message.channel.send(scenario.trust.base);

                        setTimeout(() => message.channel.send("..."), 3000);

                        if (opt >= 1 && opt <= 35) {
                            if (option == 1) {
                                setTimeout(() => message.channel.send(scenario.trust.safe.a1), 5000);

                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing + 1
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (option == 2) {
                                setTimeout(() => message.channel.send(scenario.trust.safe.no), 5000);

                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing + 1
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            }
                        } else if (opt >= 36) {
                            if (option == 1) {
                                setTimeout(() => message.channel.send(scenario.trust.death.a1), 5000);
                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout + 1,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (option == 2) {
                                setTimeout(() => message.channel.send(scenario.trust.death.no), 5000);
                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout + 1,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            }
                        }
                    } else if (result == 9) {
                        //Beach
                        opt = RNG(99);
                        let option = RNG(2);

                        message.channel.send(scenario.beach.base);

                        setTimeout(() => message.channel.send("..."), 3000);

                        if (opt >= 1 && opt <= 58) {
                            if (option == 1) {
                                setTimeout(() => message.channel.send(scenario.beach.boyfriend.bad), 5000);
                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout + 1,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (option == 2) {
                                setTimeout(() => message.channel.send(scenario.beach.boyfriend.neutral), 5000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing + 1
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            }
                        } else if (opt == 59 || opt == 60) {
                            setTimeout(() => message.channel.send(scenario.beach.good), 5000);
                            setTimeout(() => user.roles.add(admin), 5000);
                            setTimeout(() => user.roles.remove(admin), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami + 1,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 61) {
                            setTimeout(() => message.channel.send(scenario.beach.none), 5000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing + 1
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 10) {
                        //Sleep
                        opt = RNG(99);
                        message.channel.send(scenario.sleep.base);
                        setTimeout(() => message.channel.send("..."), 3000);
                        if (opt >= 1 && opt <= 35) {
                            setTimeout(() => message.channel.send(scenario.sleep.dead), 5000);
                            setTimeout(() => user.roles.add(block), 5000);
                            setTimeout(() => user.roles.remove(block), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout + 1,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 36) {
                            setTimeout(() => message.channel.send(scenario.sleep.alive), 5000);

                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing + 1,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 11) {
                        //Limo
                        opt = RNG(99);
                        message.channel.send(scenario.drive.base);
                        setTimeout(() => message.channel.send("..."), 3000);

                        if (opt == 1 || opt == 2) {
                            setTimeout(() => message.channel.send(scenario.drive.revived), 5000);
                            setTimeout(() => user.roles.add(admin), 5000);
                            setTimeout(() => user.roles.remove(admin), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived + 1
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 3 && opt <= 44) {
                            setTimeout(() => message.channel.send(scenario.drive.death), 5000);
                            setTimeout(() => user.roles.add(block), 5000);
                            setTimeout(() => user.roles.remove(block), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout + 1,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        } else if (opt >= 45) {
                            setTimeout(() => message.channel.send(scenario.drive.survived), 5000);

                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing + 1,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 12) {
                        //Dog
                        opt = RNG(99);
                        let option = RNG(2);

                        message.channel.send(scenario.dog.base);

                        setTimeout(() => message.channel.send("..."), 3000);

                        if (opt >= 1 && opt <= 46) {
                            if (option == 1) {
                                setTimeout(() => message.channel.send(scenario.dog.returns), 5000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing + 1,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (option == 2) {
                                setTimeout(() => message.channel.send(scenario.dog.flower), 5000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower + 1
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            }
                        } else if (opt >= 47) {
                            setTimeout(() => message.channel.send(scenario.dog.bird), 5000);
                            setTimeout(() => user.roles.add(block), 5000);
                            setTimeout(() => user.roles.remove(block), 15000);
                            upData = {
                                "drink": myUp.drink,
                                "eat": myUp.eat,
                                "pills": myUp.pills,
                                "parkour": {
                                    "blackout": myUp.parkour.blackout,
                                    "nothing": myUp.parkour.nothing
                                },
                                "oomfie": {
                                    "blackout": myUp.oomfie.blackout,
                                    "nothing": myUp.oomfie.nothing,
                                    "kami": myUp.oomfie.kami,
                                    "kick": myUp.oomfie.kick
                                },
                                "hostage": {
                                    "run": {
                                        "nothing": myUp.hostage.run.nothing,
                                        "blackout": myUp.hostage.run.blackout
                                    },
                                    "stay": {
                                        "nothing": myUp.hostage.stay.nothing,
                                        "blackout": myUp.hostage.stay.blackout
                                    }
                                },
                                "slushi": {
                                    "nothing": myUp.slushi.nothing,
                                    "blackout": myUp.slushi.blackout
                                },
                                "trust": {
                                    "fall": {
                                        "blackout": myUp.trust.fall.blackout,
                                        "nothing": myUp.trust.fall.nothing
                                    },
                                    "hang": {
                                        "blackout": myUp.trust.hang.blackout,
                                        "nothing": myUp.trust.hang.nothing
                                    }
                                },
                                "beach": {
                                    "boyfriend": {
                                        "blackout": myUp.beach.boyfriend.blackout,
                                        "nothing": myUp.beach.boyfriend.nothing
                                    },
                                    "kami": myUp.beach.kami,
                                    "nothing": myUp.beach.nothing
                                },
                                "sleep": {
                                    "blackout": myUp.sleep.blackout,
                                    "nothing": myUp.sleep.nothing,
                                },
                                "drive": {
                                    "nothing": myUp.drive.nothing,
                                    "blackout": myUp.drive.blackout,
                                    "revived": myUp.drive.revived
                                },
                                "dog": {
                                    "nothing": myUp.dog.nothing,
                                    "blackout": myUp.dog.blackout + 1,
                                    "flower": myUp.dog.flower
                                },
                                "shroom": {
                                    "eat": {
                                        "blackout": myUp.shroom.eat.blackout,
                                        "nothing": myUp.shroom.eat.nothing,
                                        "shroom": myUp.shroom.eat.shroom
                                    },
                                    "pass": {
                                        "blackout": myUp.shroom.pass.blackout,
                                        "nothing": myUp.shroom.pass.nothing
                                    }
                                },
                                "use": myUp.use + 1
                            }
                        }
                    } else if (result == 13) {
                        //Shroom
                        let option = RNG(2);
                        let chance = RNG(99);
                        let chancept2 = RNG(2);

                        message.channel.send(scenario.shrooms.base);

                        setTimeout(() => message.channel.send("..."), 3000);

                        if (option == 1) {
                            //Eat
                            if (chance >= 1 && chance <= 40) {
                                //Death

                                setTimeout(() => message.channel.send(scenario.shrooms.eat.poision), 5000);

                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout + 1,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (chance >= 40) {
                                if (chancept2 == 1) {
                                    //Nothing
                                    setTimeout(() => message.channel.send(scenario.shrooms.eat.full), 5000);

                                    upData = {
                                        "drink": myUp.drink,
                                        "eat": myUp.eat,
                                        "pills": myUp.pills,
                                        "parkour": {
                                            "blackout": myUp.parkour.blackout,
                                            "nothing": myUp.parkour.nothing
                                        },
                                        "oomfie": {
                                            "blackout": myUp.oomfie.blackout,
                                            "nothing": myUp.oomfie.nothing,
                                            "kami": myUp.oomfie.kami,
                                            "kick": myUp.oomfie.kick
                                        },
                                        "hostage": {
                                            "run": {
                                                "nothing": myUp.hostage.run.nothing,
                                                "blackout": myUp.hostage.run.blackout
                                            },
                                            "stay": {
                                                "nothing": myUp.hostage.stay.nothing,
                                                "blackout": myUp.hostage.stay.blackout
                                            }
                                        },
                                        "slushi": {
                                            "nothing": myUp.slushi.nothing,
                                            "blackout": myUp.slushi.blackout
                                        },
                                        "trust": {
                                            "fall": {
                                                "blackout": myUp.trust.fall.blackout,
                                                "nothing": myUp.trust.fall.nothing
                                            },
                                            "hang": {
                                                "blackout": myUp.trust.hang.blackout,
                                                "nothing": myUp.trust.hang.nothing
                                            }
                                        },
                                        "beach": {
                                            "boyfriend": {
                                                "blackout": myUp.beach.boyfriend.blackout,
                                                "nothing": myUp.beach.boyfriend.nothing
                                            },
                                            "kami": myUp.beach.kami,
                                            "nothing": myUp.beach.nothing
                                        },
                                        "sleep": {
                                            "blackout": myUp.sleep.blackout,
                                            "nothing": myUp.sleep.nothing,
                                        },
                                        "drive": {
                                            "nothing": myUp.drive.nothing,
                                            "blackout": myUp.drive.blackout,
                                            "revived": myUp.drive.revived
                                        },
                                        "dog": {
                                            "nothing": myUp.dog.nothing,
                                            "blackout": myUp.dog.blackout,
                                            "flower": myUp.dog.flower
                                        },
                                        "shroom": {
                                            "eat": {
                                                "blackout": myUp.shroom.eat.blackout,
                                                "nothing": myUp.shroom.eat.nothing + 1,
                                                "shroom": myUp.shroom.eat.shroom
                                            },
                                            "pass": {
                                                "blackout": myUp.shroom.pass.blackout,
                                                "nothing": myUp.shroom.pass.nothing
                                            }
                                        },
                                        "use": myUp.use + 1
                                    }
                                } else if (chancept2 == 2) {
                                    //Shrooms
                                    setTimeout(() => message.channel.send(scenario.shrooms.eat.shroom), 5000);
                                    setTimeout(() => user.roles.add(admin), 5000);
                                    setTimeout(() => user.roles.remove(admin), 14500);
                                    setTimeout(() => user.roles.add(block), 15000);
                                    setTimeout(() => user.roles.remove(block), 25000);
                                    upData = {
                                        "drink": myUp.drink,
                                        "eat": myUp.eat,
                                        "pills": myUp.pills,
                                        "parkour": {
                                            "blackout": myUp.parkour.blackout,
                                            "nothing": myUp.parkour.nothing
                                        },
                                        "oomfie": {
                                            "blackout": myUp.oomfie.blackout,
                                            "nothing": myUp.oomfie.nothing,
                                            "kami": myUp.oomfie.kami,
                                            "kick": myUp.oomfie.kick
                                        },
                                        "hostage": {
                                            "run": {
                                                "nothing": myUp.hostage.run.nothing,
                                                "blackout": myUp.hostage.run.blackout
                                            },
                                            "stay": {
                                                "nothing": myUp.hostage.stay.nothing,
                                                "blackout": myUp.hostage.stay.blackout
                                            }
                                        },
                                        "slushi": {
                                            "nothing": myUp.slushi.nothing,
                                            "blackout": myUp.slushi.blackout
                                        },
                                        "trust": {
                                            "fall": {
                                                "blackout": myUp.trust.fall.blackout,
                                                "nothing": myUp.trust.fall.nothing
                                            },
                                            "hang": {
                                                "blackout": myUp.trust.hang.blackout,
                                                "nothing": myUp.trust.hang.nothing
                                            }
                                        },
                                        "beach": {
                                            "boyfriend": {
                                                "blackout": myUp.beach.boyfriend.blackout,
                                                "nothing": myUp.beach.boyfriend.nothing
                                            },
                                            "kami": myUp.beach.kami,
                                            "nothing": myUp.beach.nothing
                                        },
                                        "sleep": {
                                            "blackout": myUp.sleep.blackout,
                                            "nothing": myUp.sleep.nothing,
                                        },
                                        "drive": {
                                            "nothing": myUp.drive.nothing,
                                            "blackout": myUp.drive.blackout,
                                            "revived": myUp.drive.revived
                                        },
                                        "dog": {
                                            "nothing": myUp.dog.nothing,
                                            "blackout": myUp.dog.blackout,
                                            "flower": myUp.dog.flower
                                        },
                                        "shroom": {
                                            "eat": {
                                                "blackout": myUp.shroom.eat.blackout,
                                                "nothing": myUp.shroom.eat.nothing,
                                                "shroom": myUp.shroom.eat.shroom + 1
                                            },
                                            "pass": {
                                                "blackout": myUp.shroom.pass.blackout,
                                                "nothing": myUp.shroom.pass.nothing
                                            }
                                        },
                                        "use": myUp.use + 1
                                    }
                                }
                            }

                        } if (option == 2) {
                            //Pass
                            if (chance >= 1 && chance <= 60) {
                                //Die
                                setTimeout(() => message.channel.send(scenario.shrooms.pass.starve), 5000);
                                setTimeout(() => user.roles.add(block), 5000);
                                setTimeout(() => user.roles.remove(block), 15000);
                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout + 1,
                                            "nothing": myUp.shroom.pass.nothing
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            } else if (chance >= 61) {
                                //Survive
                                setTimeout(() => message.channel.send(scenario.shrooms.pass.rtc), 5000);


                                upData = {
                                    "drink": myUp.drink,
                                    "eat": myUp.eat,
                                    "pills": myUp.pills,
                                    "parkour": {
                                        "blackout": myUp.parkour.blackout,
                                        "nothing": myUp.parkour.nothing
                                    },
                                    "oomfie": {
                                        "blackout": myUp.oomfie.blackout,
                                        "nothing": myUp.oomfie.nothing,
                                        "kami": myUp.oomfie.kami,
                                        "kick": myUp.oomfie.kick
                                    },
                                    "hostage": {
                                        "run": {
                                            "nothing": myUp.hostage.run.nothing,
                                            "blackout": myUp.hostage.run.blackout
                                        },
                                        "stay": {
                                            "nothing": myUp.hostage.stay.nothing,
                                            "blackout": myUp.hostage.stay.blackout
                                        }
                                    },
                                    "slushi": {
                                        "nothing": myUp.slushi.nothing,
                                        "blackout": myUp.slushi.blackout
                                    },
                                    "trust": {
                                        "fall": {
                                            "blackout": myUp.trust.fall.blackout,
                                            "nothing": myUp.trust.fall.nothing
                                        },
                                        "hang": {
                                            "blackout": myUp.trust.hang.blackout,
                                            "nothing": myUp.trust.hang.nothing
                                        }
                                    },
                                    "beach": {
                                        "boyfriend": {
                                            "blackout": myUp.beach.boyfriend.blackout,
                                            "nothing": myUp.beach.boyfriend.nothing
                                        },
                                        "kami": myUp.beach.kami,
                                        "nothing": myUp.beach.nothing
                                    },
                                    "sleep": {
                                        "blackout": myUp.sleep.blackout,
                                        "nothing": myUp.sleep.nothing,
                                    },
                                    "drive": {
                                        "nothing": myUp.drive.nothing,
                                        "blackout": myUp.drive.blackout,
                                        "revived": myUp.drive.revived
                                    },
                                    "dog": {
                                        "nothing": myUp.dog.nothing,
                                        "blackout": myUp.dog.blackout,
                                        "flower": myUp.dog.flower
                                    },
                                    "shroom": {
                                        "eat": {
                                            "blackout": myUp.shroom.eat.blackout,
                                            "nothing": myUp.shroom.eat.nothing,
                                            "shroom": myUp.shroom.eat.shroom
                                        },
                                        "pass": {
                                            "blackout": myUp.shroom.pass.blackout,
                                            "nothing": myUp.shroom.pass.nothing + 1
                                        }
                                    },
                                    "use": myUp.use + 1
                                }
                            }

                        }

                    }

                    fs.writeFileSync("./data/chanceData.json", JSON.stringify(upData, null, 2), err => {
                        if (err) {
                            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id
                            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
                        }
                    });

                    if (scenario.use % 1000 == 0) {
                        client.channels.cache.get("876943814688899072").send(message.author.username + " has gotten the 1000th ~mystery command use! GGS!")
                    }
                } else {
                    let wait = Math.round((Number(cooldown.future) - Number(date)) / 1000)

                    message.channel.send(`Slow down please! Please wait: ${wait}s`);
                }

            } else {
                let mysteryData = fs.readFileSync("./data/chanceData.json");
                let myUp = JSON.parse(mysteryData);

                message.channel.send(`Mystery Count is at: ${myUp.use}`);

            }

        } catch (err) {
            let msgLink = "https://discord.com/channels/" + message.guildId + "/" + message.channelId + "/" + message.id;
            client.channels.cache.get('875748868019605514').send(`<@!164555929252134912> [${err}](${msgLink})`);
            console.log(err);
        }
    }
}