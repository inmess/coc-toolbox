

export type PlayerInfo = {
    tag: string,
    name: string,
    townHallLevel: number,
    townHallWeaponLevel: number,
    expLevel: number,
    trophies: number,
    bestTrophies: number,
    warStars: number,
    attackWins: number,
    defenseWins: number,
    builderHallLevel: number,
    builderBaseTrophies: number,
    versusTrophies: number,
    bestBuilderBaseTrophies: number,
    bestVersusTrophies: number,
    versusBattleWins: number,
    role: string,
    warPreference: string,
    donations: number,
    donationsReceived: number,
    clanCapitalContributions: number,
    clan: {
        tag: string,
        name: string,
        clanLevel: number,
        badgeUrls: {
            small: string,
            large: string,
            medium: string
        }
    },
    league: {
        id: number,
        name: string,
        iconUrls: {
            small: string,
            tiny: string,
            medium: string
        }
    },
    builderBaseLeague: {
        id: number,
        name: string
    },
    achievements: [
        {
            name: string,
            stars: number,
            value: number,
            target: number,
            info: string,
            completionInfo: string,
            village: "home" | "builderBase"
        }
    ],
    labels: [
        {
            id: number,
            name: string,
            iconUrls: {
                small: string,
                medium: string
            }
        }
    ],
    troops: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home" | "builderBase",
            superTroopIsActive?: boolean
        }
    ],
    heroes: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home" | "builderBase"
        }
    ],
    spells: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home"
        }
    ]
};

// const player_template = {
//     "tag": "#802L88CU9",
//     "name": "大石碎胸口",
//     "townHallLevel": 13,
//     "townHallWeaponLevel": 5,
//     "expLevel": 199,
//     "trophies": 2888,
//     "bestTrophies": 5029,
//     "warStars": 789,
//     "attackWins": 51,
//     "defenseWins": 1,
//     "builderHallLevel": 9,
//     "builderBaseTrophies": 2528,
//     "versusTrophies": 2528,
//     "bestBuilderBaseTrophies": 3193,
//     "bestVersusTrophies": 3193,
//     "versusBattleWins": 0,
//     "role": "coLeader",
//     "warPreference": "in",
//     "donations": 2426,
//     "donationsReceived": 1484,
//     "clanCapitalContributions": 614719,
//     "clan": {
//         "tag": "#2YLYUGP9",
//         "name": "打星部落",
//         "clanLevel": 20,
//         "badgeUrls": {
//             "small": "https://api-assets.clashofclans.com/badges/70/xj8H9rRCCxMBykWaaoeQ31eiakolZcKuhyhMQZsUrXE.png",
//             "large": "https://api-assets.clashofclans.com/badges/512/xj8H9rRCCxMBykWaaoeQ31eiakolZcKuhyhMQZsUrXE.png",
//             "medium": "https://api-assets.clashofclans.com/badges/200/xj8H9rRCCxMBykWaaoeQ31eiakolZcKuhyhMQZsUrXE.png"
//         }
//     },
//     "league": {
//         "id": 29000014,
//         "name": "Master League II",
//         "iconUrls": {
//             "small": "https://api-assets.clashofclans.com/leagues/72/4wtS1stWZQ-1VJ5HaCuDPfdhTWjeZs_jPar_YPzK6Lg.png",
//             "tiny": "https://api-assets.clashofclans.com/leagues/36/4wtS1stWZQ-1VJ5HaCuDPfdhTWjeZs_jPar_YPzK6Lg.png",
//             "medium": "https://api-assets.clashofclans.com/leagues/288/4wtS1stWZQ-1VJ5HaCuDPfdhTWjeZs_jPar_YPzK6Lg.png"
//         }
//     },
//     "builderBaseLeague": {
//         "id": 44000022,
//         "name": "Brass League I"
//     },
//     "achievements": [
//         {
//             "name": "Bigger Coffers",
//             "stars": 3,
//             "value": 14,
//             "target": 10,
//             "info": "Upgrade a Gold Storage to level 10",
//             "completionInfo": "Highest Gold Storage level: 14",
//             "village": "home"
//         },
//         {
//             "name": "Get those Goblins!",
//             "stars": 3,
//             "value": 226,
//             "target": 150,
//             "info": "Win 150 Stars on the Campaign Map",
//             "completionInfo": "Stars in Campaign Map: 226",
//             "village": "home"
//         },
//         {
//             "name": "Bigger & Better",
//             "stars": 3,
//             "value": 13,
//             "target": 8,
//             "info": "Upgrade Town Hall to level 8",
//             "completionInfo": "Current Town Hall level: 13",
//             "village": "home"
//         },
//         {
//             "name": "Nice and Tidy",
//             "stars": 3,
//             "value": 4231,
//             "target": 500,
//             "info": "Remove 500 obstacles (trees, rocks, bushes)",
//             "completionInfo": "Total obstacles removed: 4231",
//             "village": "home"
//         },
//         {
//             "name": "Discover New Troops",
//             "stars": 3,
//             "value": 1,
//             "target": 1,
//             "info": "Unlock Dragon in the Barracks",
//             "completionInfo": null,
//             "village": "home"
//         },
//         {
//             "name": "Gold Grab",
//             "stars": 3,
//             "value": 2000000000,
//             "target": 100000000,
//             "info": "Steal 100000000 gold",
//             "completionInfo": "Total Gold looted: 2000000000",
//             "village": "home"
//         },
//         {
//             "name": "Elixir Escapade",
//             "stars": 3,
//             "value": 2000000000,
//             "target": 100000000,
//             "info": "Steal 100000000 elixir",
//             "completionInfo": "Total Elixir looted: 2000000000",
//             "village": "home"
//         },
//         {
//             "name": "Sweet Victory!",
//             "stars": 3,
//             "value": 5029,
//             "target": 1250,
//             "info": "Achieve a total of 1250 trophies in Multiplayer battles",
//             "completionInfo": "Trophy record: 5029",
//             "village": "home"
//         },
//         {
//             "name": "Empire Builder",
//             "stars": 3,
//             "value": 9,
//             "target": 4,
//             "info": "Upgrade Clan Castle to level 4",
//             "completionInfo": "Current Clan Castle level: 9",
//             "village": "home"
//         },
//         {
//             "name": "Wall Buster",
//             "stars": 3,
//             "value": 80231,
//             "target": 2000,
//             "info": "Destroy 2000 Walls in Multiplayer battles",
//             "completionInfo": "Total walls destroyed: 80231",
//             "village": "home"
//         },
//         {
//             "name": "Humiliator",
//             "stars": 3,
//             "value": 4663,
//             "target": 2000,
//             "info": "Destroy 2000 Town Halls in Multiplayer battles",
//             "completionInfo": "Total Town Halls destroyed: 4663",
//             "village": "home"
//         },
//         {
//             "name": "Union Buster",
//             "stars": 3,
//             "value": 24034,
//             "target": 2500,
//             "info": "Destroy 2500 Builder's Huts in Multiplayer battles",
//             "completionInfo": "Total Builder's Huts destroyed: 24034",
//             "village": "home"
//         },
//         {
//             "name": "Conqueror",
//             "stars": 3,
//             "value": 6326,
//             "target": 5000,
//             "info": "Win 5000 Multiplayer battles",
//             "completionInfo": "Total multiplayer battles won: 6326",
//             "village": "home"
//         },
//         {
//             "name": "Unbreakable",
//             "stars": 2,
//             "value": 1832,
//             "target": 5000,
//             "info": "Successfully defend against 5000 attacks",
//             "completionInfo": "Total defenses won: 1832",
//             "village": "home"
//         },
//         {
//             "name": "Friend in Need",
//             "stars": 3,
//             "value": 40519,
//             "target": 25000,
//             "info": "Donate 25000 capacity worth of reinforcements to Clanmates",
//             "completionInfo": "Total capacity donated: 40519",
//             "village": "home"
//         },
//         {
//             "name": "Mortar Mauler",
//             "stars": 3,
//             "value": 18144,
//             "target": 5000,
//             "info": "Destroy 5000 Mortars in Multiplayer battles",
//             "completionInfo": "Total Mortars destroyed: 18144",
//             "village": "home"
//         },
//         {
//             "name": "Heroic Heist",
//             "stars": 3,
//             "value": 17678401,
//             "target": 1000000,
//             "info": "Steal 1000000 Dark Elixir",
//             "completionInfo": "Total Dark Elixir looted: 17678401",
//             "village": "home"
//         },
//         {
//             "name": "League All-Star",
//             "stars": 3,
//             "value": 22,
//             "target": 1,
//             "info": "Become a Champion!",
//             "completionInfo": null,
//             "village": "home"
//         },
//         {
//             "name": "X-Bow Exterminator",
//             "stars": 3,
//             "value": 10984,
//             "target": 2500,
//             "info": "Destroy 2500 X-Bows in Multiplayer battles",
//             "completionInfo": "Total X-Bows destroyed: 10984",
//             "village": "home"
//         },
//         {
//             "name": "Firefighter",
//             "stars": 3,
//             "value": 5089,
//             "target": 5000,
//             "info": "Destroy 5000 Inferno Towers in Multiplayer battles",
//             "completionInfo": "Total Inferno Towers destroyed: 5089",
//             "village": "home"
//         },
//         {
//             "name": "War Hero",
//             "stars": 2,
//             "value": 789,
//             "target": 1000,
//             "info": "Score 1000 Stars for your clan in Clan War battles",
//             "completionInfo": "Total Stars scored for clan in Clan War battles: 789",
//             "village": "home"
//         },
//         {
//             "name": "Clan War Wealth",
//             "stars": 3,
//             "value": 925506029,
//             "target": 100000000,
//             "info": "Collect 100000000 gold from the Clan Castle",
//             "completionInfo": "Total gold collected in Clan War bonuses: 925506029",
//             "village": "home"
//         },
//         {
//             "name": "Anti-Artillery",
//             "stars": 2,
//             "value": 1901,
//             "target": 2000,
//             "info": "Destroy 2000 Eagle Artilleries in Multiplayer battles",
//             "completionInfo": "Total Eagle Artilleries destroyed: 1901",
//             "village": "home"
//         },
//         {
//             "name": "Sharing is caring",
//             "stars": 1,
//             "value": 684,
//             "target": 2000,
//             "info": "Donate 2000 spell storage capacity worth of spells",
//             "completionInfo": "Total spell capacity donated: 684",
//             "village": "home"
//         },
//         {
//             "name": "Keep Your Account Safe!",
//             "stars": 0,
//             "value": 0,
//             "target": 1,
//             "info": "Protect your village by connecting to a social network",
//             "completionInfo": "Completed!",
//             "village": "home"
//         },
//         {
//             "name": "Master Engineering",
//             "stars": 3,
//             "value": 9,
//             "target": 8,
//             "info": "Upgrade Builder Hall to level 8",
//             "completionInfo": "Current Builder Hall level: 9",
//             "village": "builderBase"
//         },
//         {
//             "name": "Next Generation Model",
//             "stars": 3,
//             "value": 1,
//             "target": 1,
//             "info": "Unlock Power P.E.K.K.A in the Builder Barracks",
//             "completionInfo": null,
//             "village": "builderBase"
//         },
//         {
//             "name": "Un-Build It",
//             "stars": 3,
//             "value": 2232,
//             "target": 2000,
//             "info": "Destroy 2000 Builder Halls in Builder Battles",
//             "completionInfo": "Total Builder Halls destroyed: 2232",
//             "village": "builderBase"
//         },
//         {
//             "name": "Champion Builder",
//             "stars": 3,
//             "value": 3193,
//             "target": 3000,
//             "info": "Achieve a total of 3000 trophies in Builder Battles",
//             "completionInfo": "Builder Trophy record: 3193",
//             "village": "builderBase"
//         },
//         {
//             "name": "High Gear",
//             "stars": 3,
//             "value": 3,
//             "target": 3,
//             "info": "Gear Up 3 buildings using the Master Builder",
//             "completionInfo": "Total buildings geared up: 3",
//             "village": "builderBase"
//         },
//         {
//             "name": "Hidden Treasures",
//             "stars": 3,
//             "value": 1,
//             "target": 1,
//             "info": "Rebuild Battle Machine",
//             "completionInfo": null,
//             "village": "builderBase"
//         },
//         {
//             "name": "Games Champion",
//             "stars": 0,
//             "value": 6650,
//             "target": 10000,
//             "info": "Earn 10000 points in Clan Games",
//             "completionInfo": "Total Clan Games points: 6650",
//             "village": "home"
//         },
//         {
//             "name": "Dragon Slayer",
//             "stars": 1,
//             "value": 4,
//             "target": 1,
//             "info": "Slay the Giant Dragon on the Campaign Map",
//             "completionInfo": null,
//             "village": "home"
//         },
//         {
//             "name": "War League Legend",
//             "stars": 2,
//             "value": 173,
//             "target": 250,
//             "info": "Score 250 Stars for your clan in War League battles",
//             "completionInfo": "Total Stars scored for clan in War League battles: 173",
//             "village": "home"
//         },
//         {
//             "name": "Keep Your Account Safe!",
//             "stars": 0,
//             "value": 0,
//             "target": 1,
//             "info": "Connect your account to Supercell ID for safe keeping.",
//             "completionInfo": "Completed!",
//             "village": "home"
//         },
//         {
//             "name": "Well Seasoned",
//             "stars": 3,
//             "value": 77780,
//             "target": 50000,
//             "info": "Earn 50000 points in Season Challenges",
//             "completionInfo": "Total Season Challenges points: 77780",
//             "village": "home"
//         },
//         {
//             "name": "Shattered and Scattered",
//             "stars": 2,
//             "value": 972,
//             "target": 4000,
//             "info": "Destroy 4000 Scattershots in Multiplayer battles",
//             "completionInfo": "Total Scattershots destroyed: 972",
//             "village": "home"
//         },
//         {
//             "name": "Not So Easy This Time",
//             "stars": 2,
//             "value": 830,
//             "target": 2000,
//             "info": "Destroy 2000 weaponized Town Halls in Multiplayer battles",
//             "completionInfo": "Weaponized Town Halls destroyed: 830",
//             "village": "home"
//         },
//         {
//             "name": "Bust This!",
//             "stars": 1,
//             "value": 199,
//             "target": 250,
//             "info": "Destroy 250 weaponized Builder's Huts in Multiplayer battles",
//             "completionInfo": "Total weaponized Builder's Huts destroyed: 199",
//             "village": "home"
//         },
//         {
//             "name": "Superb Work",
//             "stars": 1,
//             "value": 43,
//             "target": 100,
//             "info": "Boost a Super Troop 100 times",
//             "completionInfo": "Total times Super Troops boosted: 43",
//             "village": "home"
//         },
//         {
//             "name": "Siege Sharer",
//             "stars": 1,
//             "value": 327,
//             "target": 1000,
//             "info": "Donate 1000 Siege Machines",
//             "completionInfo": "Total Siege Machines donated: 327",
//             "village": "home"
//         },
//         {
//             "name": "Aggressive Capitalism",
//             "stars": 2,
//             "value": 408518,
//             "target": 1000000,
//             "info": "Loot 1000000 Capital Gold during Raid attacks",
//             "completionInfo": "Total Capital Gold looted: 408518",
//             "village": "clanCapital"
//         },
//         {
//             "name": "Most Valuable Clanmate",
//             "stars": 2,
//             "value": 614719,
//             "target": 2000000,
//             "info": "Contribute 2000000 Capital Gold to upgrades in the Clan Capital",
//             "completionInfo": "Total Capital Gold contributed: 614719",
//             "village": "clanCapital"
//         },
//         {
//             "name": "Counterspell",
//             "stars": 0,
//             "value": 12,
//             "target": 40,
//             "info": "Destroy 40 Spell Towers in Multiplayer Battles",
//             "completionInfo": "Total Spell Towers Destroyed: 12",
//             "village": "home"
//         },
//         {
//             "name": "Monolith Masher",
//             "stars": 0,
//             "value": 1,
//             "target": 20,
//             "info": "Destroy 20 Monoliths in Multiplayer Battles",
//             "completionInfo": "Total Monoliths Destroyed: 1",
//             "village": "home"
//         },
//         {
//             "name": "Ungrateful Child",
//             "stars": 0,
//             "value": 0,
//             "target": 1,
//             "info": "Defeat M.O.M.M.A on the Campaign Map",
//             "completionInfo": null,
//             "village": "home"
//         }
//     ],
//     "playerHouse": {
//         "elements": [
//             {
//                 "type": "ground",
//                 "id": 82000002
//             },
//             {
//                 "type": "walls",
//                 "id": 82000052
//             },
//             {
//                 "type": "roof",
//                 "id": 82000032
//             },
//             {
//                 "type": "decoration",
//                 "id": 82000063
//             }
//         ]
//     },
//     "labels": [
//         {
//             "id": 57000000,
//             "name": "Clan Wars",
//             "iconUrls": {
//                 "small": "https://api-assets.clashofclans.com/labels/64/ZxJp9606Vl1sa0GHg5JmGp8TdHS4l0jE4WFuil1ENvA.png",
//                 "medium": "https://api-assets.clashofclans.com/labels/128/ZxJp9606Vl1sa0GHg5JmGp8TdHS4l0jE4WFuil1ENvA.png"
//             }
//         },
//         {
//             "id": 57000001,
//             "name": "Clan War League",
//             "iconUrls": {
//                 "small": "https://api-assets.clashofclans.com/labels/64/JOzAO4r91eVaJELAPB-iuAx6f_zBbRPCLM_ag5mpK4s.png",
//                 "medium": "https://api-assets.clashofclans.com/labels/128/JOzAO4r91eVaJELAPB-iuAx6f_zBbRPCLM_ag5mpK4s.png"
//             }
//         },
//         {
//             "id": 57000002,
//             "name": "Trophy Pushing",
//             "iconUrls": {
//                 "small": "https://api-assets.clashofclans.com/labels/64/tINt65InVEc35rFYkxqFQqGDTsBpVRqY9K7BJf5kr4A.png",
//                 "medium": "https://api-assets.clashofclans.com/labels/128/tINt65InVEc35rFYkxqFQqGDTsBpVRqY9K7BJf5kr4A.png"
//             }
//         }
//     ],
//     "troops": [
//         {
//             "name": "Barbarian",
//             "level": 9,
//             "maxLevel": 11,
//             "village": "home"
//         },
//         {
//             "name": "Archer",
//             "level": 9,
//             "maxLevel": 11,
//             "village": "home"
//         },
//         {
//             "name": "Goblin",
//             "level": 7,
//             "maxLevel": 9,
//             "village": "home"
//         },
//         {
//             "name": "Giant",
//             "level": 10,
//             "maxLevel": 11,
//             "village": "home"
//         },
//         {
//             "name": "Wall Breaker",
//             "level": 9,
//             "maxLevel": 11,
//             "village": "home"
//         },
//         {
//             "name": "Balloon",
//             "level": 9,
//             "maxLevel": 10,
//             "village": "home"
//         },
//         {
//             "name": "Wizard",
//             "level": 10,
//             "maxLevel": 11,
//             "village": "home"
//         },
//         {
//             "name": "Healer",
//             "level": 6,
//             "maxLevel": 8,
//             "village": "home"
//         },
//         {
//             "name": "Dragon",
//             "level": 8,
//             "maxLevel": 10,
//             "village": "home"
//         },
//         {
//             "name": "P.E.K.K.A",
//             "level": 9,
//             "maxLevel": 10,
//             "village": "home"
//         },
//         {
//             "name": "Minion",
//             "level": 6,
//             "maxLevel": 11,
//             "village": "home"
//         },
//         {
//             "name": "Hog Rider",
//             "level": 10,
//             "maxLevel": 12,
//             "village": "home"
//         },
//         {
//             "name": "Valkyrie",
//             "level": 8,
//             "maxLevel": 10,
//             "village": "home"
//         },
//         {
//             "name": "Golem",
//             "level": 10,
//             "maxLevel": 12,
//             "village": "home"
//         },
//         {
//             "name": "Witch",
//             "level": 5,
//             "maxLevel": 6,
//             "village": "home"
//         },
//         {
//             "name": "Lava Hound",
//             "level": 5,
//             "maxLevel": 6,
//             "village": "home"
//         },
//         {
//             "name": "Bowler",
//             "level": 5,
//             "maxLevel": 7,
//             "village": "home"
//         },
//         {
//             "name": "Baby Dragon",
//             "level": 5,
//             "maxLevel": 9,
//             "village": "home"
//         },
//         {
//             "name": "Miner",
//             "level": 6,
//             "maxLevel": 9,
//             "village": "home"
//         },
//         {
//             "name": "Super Barbarian",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Super Archer",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Super Wall Breaker",
//             "level": 1,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Super Giant",
//             "level": 1,
//             "maxLevel": 3,
//             "village": "home"
//         },
//         {
//             "name": "Raged Barbarian",
//             "level": 16,
//             "maxLevel": 20,
//             "village": "builderBase"
//         },
//         {
//             "name": "Sneaky Archer",
//             "level": 16,
//             "maxLevel": 20,
//             "village": "builderBase"
//         },
//         {
//             "name": "Beta Minion",
//             "level": 16,
//             "maxLevel": 18,
//             "village": "builderBase"
//         },
//         {
//             "name": "Boxer Giant",
//             "level": 16,
//             "maxLevel": 18,
//             "village": "builderBase"
//         },
//         {
//             "name": "Bomber",
//             "level": 16,
//             "maxLevel": 16,
//             "village": "builderBase"
//         },
//         {
//             "name": "Power P.E.K.K.A",
//             "level": 16,
//             "maxLevel": 8,
//             "village": "builderBase"
//         },
//         {
//             "name": "Cannon Cart",
//             "level": 16,
//             "maxLevel": 14,
//             "village": "builderBase"
//         },
//         {
//             "name": "Drop Ship",
//             "level": 16,
//             "maxLevel": 10,
//             "village": "builderBase"
//         },
//         {
//             "name": "Baby Dragon",
//             "level": 16,
//             "maxLevel": 16,
//             "village": "builderBase"
//         },
//         {
//             "name": "Night Witch",
//             "level": 16,
//             "maxLevel": 12,
//             "village": "builderBase"
//         },
//         {
//             "name": "Wall Wrecker",
//             "level": 4,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Battle Blimp",
//             "level": 4,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Yeti",
//             "level": 1,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Sneaky Goblin",
//             "level": 1,
//             "maxLevel": 3,
//             "village": "home"
//         },
//         {
//             "name": "Super Miner",
//             "level": 1,
//             "maxLevel": 3,
//             "village": "home"
//         },
//         {
//             "name": "Rocket Balloon",
//             "level": 1,
//             "maxLevel": 3,
//             "village": "home"
//         },
//         {
//             "name": "Ice Golem",
//             "level": 1,
//             "maxLevel": 7,
//             "village": "home"
//         },
//         {
//             "name": "Electro Dragon",
//             "level": 4,
//             "maxLevel": 6,
//             "village": "home"
//         },
//         {
//             "name": "Stone Slammer",
//             "level": 4,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Inferno Dragon",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Super Valkyrie",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Dragon Rider",
//             "level": 2,
//             "maxLevel": 3,
//             "village": "home"
//         },
//         {
//             "name": "Super Witch",
//             "level": 1,
//             "maxLevel": 2,
//             "village": "home"
//         },
//         {
//             "name": "Siege Barracks",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Ice Hound",
//             "level": 1,
//             "maxLevel": 2,
//             "village": "home"
//         },
//         {
//             "name": "Super Bowler",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Super Dragon",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Headhunter",
//             "level": 3,
//             "maxLevel": 3,
//             "village": "home"
//         },
//         {
//             "name": "Super Wizard",
//             "level": 1,
//             "maxLevel": 3,
//             "village": "home",
//             "superTroopIsActive": true
//         },
//         {
//             "name": "Super Minion",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Log Launcher",
//             "level": 4,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Apprentice Warden",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Super Hog Rider",
//             "level": 1,
//             "maxLevel": 3,
//             "village": "home"
//         }
//     ],
//     "heroes": [
//         {
//             "name": "Barbarian King",
//             "level": 50,
//             "maxLevel": 90,
//             "village": "home"
//         },
//         {
//             "name": "Archer Queen",
//             "level": 60,
//             "maxLevel": 90,
//             "village": "home"
//         },
//         {
//             "name": "Grand Warden",
//             "level": 30,
//             "maxLevel": 65,
//             "village": "home"
//         },
//         {
//             "name": "Battle Machine",
//             "level": 18,
//             "maxLevel": 35,
//             "village": "builderBase"
//         },
//         {
//             "name": "Royal Champion",
//             "level": 25,
//             "maxLevel": 40,
//             "village": "home"
//         },
//         {
//             "name": "Battle Copter",
//             "level": 17,
//             "maxLevel": 21,
//             "village": "builderBase"
//         }
//     ],
//     "spells": [
//         {
//             "name": "Lightning Spell",
//             "level": 7,
//             "maxLevel": 10,
//             "village": "home"
//         },
//         {
//             "name": "Healing Spell",
//             "level": 8,
//             "maxLevel": 9,
//             "village": "home"
//         },
//         {
//             "name": "Rage Spell",
//             "level": 6,
//             "maxLevel": 6,
//             "village": "home"
//         },
//         {
//             "name": "Jump Spell",
//             "level": 3,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Freeze Spell",
//             "level": 5,
//             "maxLevel": 7,
//             "village": "home"
//         },
//         {
//             "name": "Poison Spell",
//             "level": 3,
//             "maxLevel": 9,
//             "village": "home"
//         },
//         {
//             "name": "Earthquake Spell",
//             "level": 4,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Haste Spell",
//             "level": 5,
//             "maxLevel": 5,
//             "village": "home"
//         },
//         {
//             "name": "Clone Spell",
//             "level": 1,
//             "maxLevel": 8,
//             "village": "home"
//         },
//         {
//             "name": "Skeleton Spell",
//             "level": 1,
//             "maxLevel": 8,
//             "village": "home"
//         },
//         {
//             "name": "Bat Spell",
//             "level": 1,
//             "maxLevel": 6,
//             "village": "home"
//         },
//         {
//             "name": "Invisibility Spell",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         },
//         {
//             "name": "Recall Spell",
//             "level": 1,
//             "maxLevel": 4,
//             "village": "home"
//         }
//     ]
// }
