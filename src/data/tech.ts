import { 
    ResourceType, 
} from "./types";

type UnitLevelData = {
    res_cost: number | null,
    time_cost: number | null,
    level: number,

}

type TechData = {
    [key: string]: {
        res_type: ResourceType,
        level_data: (UnitLevelData & {
            lab_level: number | null,
            [key: string]: any
        })[],
    }
}

type HeroData = {
    [key: string]: {
        res_type: ResourceType,
        level_data: (UnitLevelData & {
            hall_level: number | null,
            [key: string]: any
        })[]
    }
}

const troops_info: TechData = {
    "barbarian": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 8,
                "Damage per Attack": 8,
                "Hitpoints": 45,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 11,
                "Damage per Attack": 11,
                "Hitpoints": 54,
                "level": 2,
                "res_cost": 20000,
                "time_cost": 7200000,
                "lab_level": 1.0
            },
            {
                "Damage per Second": 14,
                "Damage per Attack": 14,
                "Hitpoints": 65,
                "level": 3,
                "res_cost": 60000,
                "time_cost": 18000000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 18,
                "Damage per Attack": 18,
                "Hitpoints": 85,
                "level": 4,
                "res_cost": 200000,
                "time_cost": 43200000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 23,
                "Damage per Attack": 23,
                "Hitpoints": 105,
                "level": 5,
                "res_cost": 650000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 26,
                "Damage per Attack": 26,
                "Hitpoints": 125,
                "level": 6,
                "res_cost": 1400000,
                "time_cost": 129600000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 30,
                "Damage per Attack": 30,
                "Hitpoints": 160,
                "level": 7,
                "res_cost": 2100000,
                "time_cost": 216000000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 34,
                "Damage per Attack": 34,
                "Hitpoints": 205,
                "level": 8,
                "res_cost": 2800000,
                "time_cost": 259200000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 38,
                "Damage per Attack": 38,
                "Hitpoints": 230,
                "level": 9,
                "res_cost": 5000000,
                "time_cost": 518400000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 42,
                "Damage per Attack": 42,
                "Hitpoints": 250,
                "level": 10,
                "res_cost": 14000000,
                "time_cost": 1123200000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 45,
                "Damage per Attack": 45,
                "Hitpoints": 270,
                "level": 11,
                "res_cost": 16000000,
                "time_cost": 1209600000,
                "lab_level": 13.0
            }
        ]
    },
    "electro_dragon": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second(Primary Target)": 240,
                "Damage per Hit(Primary Target)": "840",
                "Damage when destroyed": "65 x6",
                "Hitpoints": "3,200",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second(Primary Target)": 270,
                "Damage per Hit(Primary Target)": "945",
                "Damage when destroyed": "75 x6",
                "Hitpoints": "3,700",
                "level": 2,
                "res_cost": 6300000,
                "time_cost": 475200000,
                "lab_level": 9.0
            },
            {
                "Damage per Second(Primary Target)": 300,
                "Damage per Hit(Primary Target)": "1,050",
                "Damage when destroyed": "85 x6",
                "Hitpoints": "4,200",
                "level": 3,
                "res_cost": 7000000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second(Primary Target)": 330,
                "Damage per Hit(Primary Target)": "1,155",
                "Damage when destroyed": "95 x6",
                "Hitpoints": "4,500",
                "level": 4,
                "res_cost": 9600000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second(Primary Target)": 360,
                "Damage per Hit(Primary Target)": "1,260",
                "Damage when destroyed": "105 x6",
                "Hitpoints": "4,800",
                "level": 5,
                "res_cost": 18000000,
                "time_cost": 1468800000,
                "lab_level": 12.0
            },
            {
                "Damage per Second(Primary Target)": 390,
                "Damage per Hit(Primary Target)": "1,365",
                "Damage when destroyed": "115 x6",
                "Hitpoints": "5,100",
                "level": 6,
                "res_cost": 20000000,
                "time_cost": 1555200000,
                "lab_level": 13.0
            }
        ]
    },
    "dragon": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 140,
                "Damage per Attack": 175.0,
                "Hitpoints": "1,900",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 160,
                "Damage per Attack": 200.0,
                "Hitpoints": "2,100",
                "level": 2,
                "res_cost": 1000000,
                "time_cost": 64800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 180,
                "Damage per Attack": 225.0,
                "Hitpoints": "2,300",
                "level": 3,
                "res_cost": 2000000,
                "time_cost": 129600000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 210,
                "Damage per Attack": 262.5,
                "Hitpoints": "2,700",
                "level": 4,
                "res_cost": 3000000,
                "time_cost": 259200000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 240,
                "Damage per Attack": 300.0,
                "Hitpoints": "3,100",
                "level": 5,
                "res_cost": 3800000,
                "time_cost": 453600000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 270,
                "Damage per Attack": 337.5,
                "Hitpoints": "3,400",
                "level": 6,
                "res_cost": 4900000,
                "time_cost": 475200000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 310,
                "Damage per Attack": 387.5,
                "Hitpoints": "3,900",
                "level": 7,
                "res_cost": 6300000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 330,
                "Damage per Attack": 412.5,
                "Hitpoints": "4,200",
                "level": 8,
                "res_cost": 8800000,
                "time_cost": 820800000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 350,
                "Damage per Attack": 437.5,
                "Hitpoints": "4,500",
                "level": 9,
                "res_cost": 17500000,
                "time_cost": 1468800000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 370,
                "Damage per Attack": 462.5,
                "Hitpoints": "4,900",
                "level": 10,
                "res_cost": 19500000,
                "time_cost": 1555200000,
                "lab_level": 13.0
            }
        ]
    },
    "yeti": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 230,
                "Damage per Attack": 230,
                "Hitpoints": "2,900",
                "Yetimites spawned": 8,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 250,
                "Damage per Attack": 250,
                "Hitpoints": "3,200",
                "Yetimites spawned": 9,
                "level": 2,
                "res_cost": 7000000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 270,
                "Damage per Attack": 270,
                "Hitpoints": "3,500",
                "Yetimites spawned": 10,
                "level": 3,
                "res_cost": 9000000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 290,
                "Damage per Attack": 290,
                "Hitpoints": "3,700",
                "Yetimites spawned": 11,
                "level": 4,
                "res_cost": 17100000,
                "time_cost": 1468800000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 310,
                "Damage per Attack": 310,
                "Hitpoints": "3,900",
                "Yetimites spawned": 12,
                "level": 5,
                "res_cost": 19000000,
                "time_cost": 1555200000,
                "lab_level": 13.0
            }
        ]
    },
    "archer": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 7,
                "Damage per Attack": 7,
                "Hitpoints": 20,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 9,
                "Damage per Attack": 9,
                "Hitpoints": 23,
                "level": 2,
                "res_cost": 30000,
                "time_cost": 10800000,
                "lab_level": 1.0
            },
            {
                "Damage per Second": 12,
                "Damage per Attack": 12,
                "Hitpoints": 28,
                "level": 3,
                "res_cost": 80000,
                "time_cost": 21600000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 16,
                "Damage per Attack": 16,
                "Hitpoints": 33,
                "level": 4,
                "res_cost": 300000,
                "time_cost": 43200000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 20,
                "Damage per Attack": 20,
                "Hitpoints": 40,
                "level": 5,
                "res_cost": 800000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 22,
                "Damage per Attack": 22,
                "Hitpoints": 44,
                "level": 6,
                "res_cost": 2000000,
                "time_cost": 129600000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 25,
                "Damage per Attack": 25,
                "Hitpoints": 48,
                "level": 7,
                "res_cost": 2500000,
                "time_cost": 216000000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 28,
                "Damage per Attack": 28,
                "Hitpoints": 52,
                "level": 8,
                "res_cost": 3200000,
                "time_cost": 302400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 31,
                "Damage per Attack": 31,
                "Hitpoints": 56,
                "level": 9,
                "res_cost": 5600000,
                "time_cost": 518400000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 34,
                "Damage per Attack": 34,
                "Hitpoints": 60,
                "level": 10,
                "res_cost": 14500000,
                "time_cost": 1123200000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 37,
                "Damage per Attack": 37,
                "Hitpoints": 64,
                "level": 11,
                "res_cost": 16000000,
                "time_cost": 1209600000,
                "lab_level": 13.0
            }
        ]
    },
    "wizard": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 50,
                "Damage per Attack": 75.0,
                "Hitpoints": 75,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 70,
                "Damage per Attack": 105.0,
                "Hitpoints": 90,
                "level": 2,
                "res_cost": 120000,
                "time_cost": 28800000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 90,
                "Damage per Attack": 135.0,
                "Hitpoints": 108,
                "level": 3,
                "res_cost": 320000,
                "time_cost": 43200000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 125,
                "Damage per Attack": 187.5,
                "Hitpoints": 135,
                "level": 4,
                "res_cost": 620000,
                "time_cost": 64800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 170,
                "Damage per Attack": 255.0,
                "Hitpoints": 165,
                "level": 5,
                "res_cost": 1200000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 185,
                "Damage per Attack": 277.5,
                "Hitpoints": 180,
                "level": 6,
                "res_cost": 2200000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 200,
                "Damage per Attack": 300.0,
                "Hitpoints": 195,
                "level": 7,
                "res_cost": 3500000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 215,
                "Damage per Attack": 322.5,
                "Hitpoints": 210,
                "level": 8,
                "res_cost": 5000000,
                "time_cost": 453600000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 230,
                "Damage per Attack": 345.0,
                "Hitpoints": 230,
                "level": 9,
                "res_cost": 5800000,
                "time_cost": 691200000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 245,
                "Damage per Attack": 367.5,
                "Hitpoints": 250,
                "level": 10,
                "res_cost": 8500000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 260,
                "Damage per Attack": 390.0,
                "Hitpoints": 270,
                "level": 11,
                "res_cost": 17200000,
                "time_cost": 1382400000,
                "lab_level": 13.0
            }
        ]
    },
    "healer": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Healing per Second": 36,
                "Healing per Pulse": 25.2,
                "HPS on Heroes": 19,
                "Hitpoints": "500",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Healing per Second": 48,
                "Healing per Pulse": 33.6,
                "HPS on Heroes": 26,
                "Hitpoints": "700",
                "level": 2,
                "res_cost": 450000,
                "time_cost": 43200000,
                "lab_level": 5.0
            },
            {
                "Healing per Second": 60,
                "Healing per Pulse": 42.0,
                "HPS on Heroes": 33,
                "Hitpoints": "900",
                "level": 3,
                "res_cost": 900000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Healing per Second": 66,
                "Healing per Pulse": 46.2,
                "HPS on Heroes": 36,
                "Hitpoints": "1,200",
                "level": 4,
                "res_cost": 2700000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Healing per Second": 72,
                "Healing per Pulse": 50.4,
                "HPS on Heroes": 48,
                "Hitpoints": "1,500",
                "level": 5,
                "res_cost": 4200000,
                "time_cost": 604800000,
                "lab_level": 9.0
            },
            {
                "Healing per Second": 72,
                "Healing per Pulse": 50.4,
                "HPS on Heroes": 56,
                "Hitpoints": "1,600",
                "level": 6,
                "res_cost": 8000000,
                "time_cost": 734400000,
                "lab_level": 11.0
            },
            {
                "Healing per Second": 72,
                "Healing per Pulse": 50.4,
                "HPS on Heroes": 62,
                "Hitpoints": "1,700",
                "level": 7,
                "res_cost": 16000000,
                "time_cost": 1382400000,
                "lab_level": 12.0
            },
            {
                "Healing per Second": 76,
                "Healing per Pulse": 53.2,
                "HPS on Heroes": 65,
                "Hitpoints": "1,800",
                "level": 8,
                "res_cost": 18000000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "miner": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 80,
                "Damage per Attack": 136.0,
                "Hitpoints": "550",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 88,
                "Damage per Attack": 149.6,
                "Hitpoints": "610",
                "level": 2,
                "res_cost": 2500000,
                "time_cost": 187200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 96,
                "Damage per Attack": 163.2,
                "Hitpoints": "670",
                "level": 3,
                "res_cost": 3200000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 104,
                "Damage per Attack": 176.8,
                "Hitpoints": "730",
                "level": 4,
                "res_cost": 3800000,
                "time_cost": 345600000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 112,
                "Damage per Attack": 190.4,
                "Hitpoints": "800",
                "level": 5,
                "res_cost": 5000000,
                "time_cost": 604800000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 204.0,
                "Hitpoints": "900",
                "level": 6,
                "res_cost": 5800000,
                "time_cost": 691200000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 128,
                "Damage per Attack": 217.6,
                "Hitpoints": "1,000",
                "level": 7,
                "res_cost": 8000000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 136,
                "Damage per Attack": 231.2,
                "Hitpoints": "1,100",
                "level": 8,
                "res_cost": 16500000,
                "time_cost": 1382400000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 144,
                "Damage per Attack": 244.8,
                "Hitpoints": "1,250",
                "level": 9,
                "res_cost": 18500000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "wall_breaker": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage": 6,
                "Damage when destroyed": 6,
                "Damage vs. Walls": "240",
                "Damage when destroyed vs. Walls": "240",
                "Hitpoints": 20,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage": 10,
                "Damage when destroyed": 9,
                "Damage vs. Walls": "400",
                "Damage when destroyed vs. Walls": "360",
                "Hitpoints": 24,
                "level": 2,
                "res_cost": 100000,
                "time_cost": 21600000,
                "lab_level": 2.0
            },
            {
                "Damage": 15,
                "Damage when destroyed": 13,
                "Damage vs. Walls": "600",
                "Damage when destroyed vs. Walls": "520",
                "Hitpoints": 29,
                "level": 3,
                "res_cost": 250000,
                "time_cost": 43200000,
                "lab_level": 4.0
            },
            {
                "Damage": 20,
                "Damage when destroyed": 16,
                "Damage vs. Walls": "800",
                "Damage when destroyed vs. Walls": "640",
                "Hitpoints": 35,
                "level": 4,
                "res_cost": 600000,
                "time_cost": 64800000,
                "lab_level": 5.0
            },
            {
                "Damage": 43,
                "Damage when destroyed": 23,
                "Damage vs. Walls": "1,720",
                "Damage when destroyed vs. Walls": "920",
                "Hitpoints": 53,
                "level": 5,
                "res_cost": 1200000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage": 55,
                "Damage when destroyed": 30,
                "Damage vs. Walls": "2,200",
                "Damage when destroyed vs. Walls": "1,200",
                "Hitpoints": 72,
                "level": 6,
                "res_cost": 2500000,
                "time_cost": 183600000,
                "lab_level": 8.0
            },
            {
                "Damage": 66,
                "Damage when destroyed": 36,
                "Damage vs. Walls": "2,640",
                "Damage when destroyed vs. Walls": "1,440",
                "Hitpoints": 82,
                "level": 7,
                "res_cost": 4200000,
                "time_cost": 302400000,
                "lab_level": 9.0
            },
            {
                "Damage": 75,
                "Damage when destroyed": 42,
                "Damage vs. Walls": "3,000",
                "Damage when destroyed vs. Walls": "1,680",
                "Hitpoints": 92,
                "level": 8,
                "res_cost": 6500000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage": 86,
                "Damage when destroyed": 48,
                "Damage vs. Walls": "3,440",
                "Damage when destroyed vs. Walls": "1,920",
                "Hitpoints": 112,
                "level": 9,
                "res_cost": 8000000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Damage": 94,
                "Damage when destroyed": 54,
                "Damage vs. Walls": "3,760",
                "Damage when destroyed vs. Walls": "2,160",
                "Hitpoints": 130,
                "level": 10,
                "res_cost": 15200000,
                "time_cost": 1296000000,
                "lab_level": 12.0
            },
            {
                "Damage": 102,
                "Damage when destroyed": 60,
                "Damage vs. Walls": "4,080",
                "Damage when destroyed vs. Walls": "2,400",
                "Hitpoints": 140,
                "level": 11,
                "res_cost": 16500000,
                "time_cost": 1382400000,
                "lab_level": 13.0
            }
        ]
    },
    "pekka": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 260,
                "Damage per Attack": "468",
                "Hitpoints": "3,000",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 290,
                "Damage per Attack": "522",
                "Hitpoints": "3,500",
                "level": 2,
                "res_cost": 1200000,
                "time_cost": 43200000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 320,
                "Damage per Attack": "576",
                "Hitpoints": "4,000",
                "level": 3,
                "res_cost": 1800000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 360,
                "Damage per Attack": "648",
                "Hitpoints": "4,500",
                "level": 4,
                "res_cost": 2800000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 410,
                "Damage per Attack": "738",
                "Hitpoints": "5,000",
                "level": 5,
                "res_cost": 3200000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 470,
                "Damage per Attack": "846",
                "Hitpoints": "5,500",
                "level": 6,
                "res_cost": 4200000,
                "time_cost": 410400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 540,
                "Damage per Attack": "972",
                "Hitpoints": "5,900",
                "level": 7,
                "res_cost": 5200000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 610,
                "Damage per Attack": "1,098",
                "Hitpoints": "6,300",
                "level": 8,
                "res_cost": 7000000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 680,
                "Damage per Attack": "1,224",
                "Hitpoints": "6,700",
                "level": 9,
                "res_cost": 8500000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 750,
                "Damage per Attack": "1,350",
                "Hitpoints": "7,200",
                "level": 10,
                "res_cost": 18000000,
                "time_cost": 1425600000,
                "lab_level": 13.0
            }
        ]
    },
    "dragon_rider": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 340,
                "Damage per Attack": 408,
                "Damage Upon Death": 700,
                "Hitpoints": "4,100",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 370,
                "Damage per Attack": 444,
                "Damage Upon Death": 800,
                "Hitpoints": "4,400",
                "level": 2,
                "res_cost": 9600000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 400,
                "Damage per Attack": 480,
                "Damage Upon Death": 900,
                "Hitpoints": "4,700",
                "level": 3,
                "res_cost": 16500000,
                "time_cost": 1382400000,
                "lab_level": 12.0
            }
        ]
    },
    "electro_titan": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 180,
                "Damage per Hit": 270,
                "Aura Damage per Second": 75,
                "Aura Damage per Hit": 30,
                "Hitpoints": "7,200",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 200,
                "Damage per Hit": 300,
                "Aura Damage per Second": 100,
                "Aura Damage per Hit": 40,
                "Hitpoints": "7,700",
                "level": 2,
                "res_cost": 19500000,
                "time_cost": 1512000000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 220,
                "Damage per Hit": 330,
                "Aura Damage per Second": 125,
                "Aura Damage per Hit": 50,
                "Hitpoints": "8,200",
                "level": 3,
                "res_cost": 20500000,
                "time_cost": 1555200000,
                "lab_level": 13.0
            }
        ]
    },
    "baby_dragon": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 62,
                "Damage per Attack": 62,
                "Hitpoints": "1,331",
                "Tantrum Damage Bonus": "+60%",
                "Fiery Sneeze Damage": "80-100",
                "level": 5,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 62,
                "Damage per Attack": 62,
                "Hitpoints": "1,331",
                "Tantrum Damage Bonus": "+70%",
                "Fiery Sneeze Damage": "80-100",
                "level": 6,
                "res_cost": 360000,
                "time_cost": 57600000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 68,
                "Damage per Attack": 68,
                "Hitpoints": "1,464",
                "Tantrum Damage Bonus": "+70%",
                "Fiery Sneeze Damage": "80-100",
                "level": 7,
                "res_cost": 380000,
                "time_cost": 72000000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 68,
                "Damage per Attack": 68,
                "Hitpoints": "1,464",
                "Tantrum Damage Bonus": "+70%",
                "Fiery Sneeze Damage": "128-160",
                "level": 8,
                "res_cost": 400000,
                "time_cost": 86400000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 75,
                "Damage per Attack": 75,
                "Hitpoints": "1,611",
                "Tantrum Damage Bonus": "+70%",
                "Fiery Sneeze Damage": "128-160",
                "level": 9,
                "res_cost": 1000000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 75,
                "Damage per Attack": 75,
                "Hitpoints": "1,611",
                "Tantrum Damage Bonus": "+80%",
                "Fiery Sneeze Damage": "128-160",
                "level": 10,
                "res_cost": 1200000,
                "time_cost": 172800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 83,
                "Damage per Attack": 83,
                "Hitpoints": "1,772",
                "Tantrum Damage Bonus": "+80%",
                "Fiery Sneeze Damage": "128-160",
                "level": 11,
                "res_cost": 1400000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 83,
                "Damage per Attack": 83,
                "Hitpoints": "1,772",
                "Tantrum Damage Bonus": "+80%",
                "Fiery Sneeze Damage": "220-275",
                "level": 12,
                "res_cost": 1600000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 91,
                "Damage per Attack": 91,
                "Hitpoints": "1,949",
                "Tantrum Damage Bonus": "+80%",
                "Fiery Sneeze Damage": "220-275",
                "level": 13,
                "res_cost": 2400000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 91,
                "Damage per Attack": 91,
                "Hitpoints": "1,949",
                "Tantrum Damage Bonus": "+90%",
                "Fiery Sneeze Damage": "220-275",
                "level": 14,
                "res_cost": 2600000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 100,
                "Damage per Attack": 100,
                "Hitpoints": "2,144",
                "Tantrum Damage Bonus": "+90%",
                "Fiery Sneeze Damage": "220-275",
                "level": 15,
                "res_cost": 3400000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 100,
                "Damage per Attack": 100,
                "Hitpoints": "2,144",
                "Tantrum Damage Bonus": "+90%",
                "Fiery Sneeze Damage": "320-400",
                "level": 16,
                "res_cost": 3600000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 110,
                "Damage per Attack": 110,
                "Hitpoints": "2,358",
                "Tantrum Damage Bonus": "+90%",
                "Fiery Sneeze Damage": "320-400",
                "level": 17,
                "res_cost": 4100000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 110,
                "Damage per Attack": 110,
                "Hitpoints": "2,358",
                "Tantrum Damage Bonus": "+100%",
                "Fiery Sneeze Damage": "320-400",
                "level": 18,
                "res_cost": 4300000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 120,
                "Hitpoints": "2,358",
                "Tantrum Damage Bonus": "+100%",
                "Fiery Sneeze Damage": "320-400",
                "level": 19,
                "res_cost": 5100000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 120,
                "Hitpoints": "2,358",
                "Tantrum Damage Bonus": "+100%",
                "Fiery Sneeze Damage": "440-550",
                "level": 20,
                "res_cost": 5500000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "goblin": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 11,
                "Damage per Attack": 11,
                "DPS on Resource Buildings": 22,
                "Hitpoints": 25,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 14,
                "Damage per Attack": 14,
                "DPS on Resource Buildings": 28,
                "Hitpoints": 30,
                "level": 2,
                "res_cost": 45000,
                "time_cost": 18000000,
                "lab_level": 1.0
            },
            {
                "Damage per Second": 19,
                "Damage per Attack": 19,
                "DPS on Resource Buildings": 38,
                "Hitpoints": 36,
                "level": 3,
                "res_cost": 175000,
                "time_cost": 32400000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 24,
                "Damage per Attack": 24,
                "DPS on Resource Buildings": 48,
                "Hitpoints": 50,
                "level": 4,
                "res_cost": 500000,
                "time_cost": 43200000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 32,
                "Damage per Attack": 32,
                "DPS on Resource Buildings": 64,
                "Hitpoints": 65,
                "level": 5,
                "res_cost": 1200000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 42,
                "Damage per Attack": 42,
                "DPS on Resource Buildings": 84,
                "Hitpoints": 80,
                "level": 6,
                "res_cost": 2000000,
                "time_cost": 129600000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 52,
                "Damage per Attack": 52,
                "DPS on Resource Buildings": 104,
                "Hitpoints": 105,
                "level": 7,
                "res_cost": 3000000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 62,
                "Damage per Attack": 62,
                "DPS on Resource Buildings": 124,
                "Hitpoints": 126,
                "level": 8,
                "res_cost": 5600000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 72,
                "Damage per Attack": 72,
                "DPS on Resource Buildings": 144,
                "Hitpoints": 146,
                "level": 9,
                "res_cost": 16000000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "giant": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 11,
                "Damage per Attack": 22,
                "Hitpoints": "300",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 14,
                "Damage per Attack": 28,
                "Hitpoints": "360",
                "level": 2,
                "res_cost": 40000,
                "time_cost": 14400000,
                "lab_level": 2.0
            },
            {
                "Damage per Second": 19,
                "Damage per Attack": 38,
                "Hitpoints": "450",
                "level": 3,
                "res_cost": 150000,
                "time_cost": 28800000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 24,
                "Damage per Attack": 48,
                "Hitpoints": "600",
                "level": 4,
                "res_cost": 500000,
                "time_cost": 43200000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 31,
                "Damage per Attack": 62,
                "Hitpoints": "800",
                "level": 5,
                "res_cost": 1200000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 43,
                "Damage per Attack": 86,
                "Hitpoints": "1,100",
                "level": 6,
                "res_cost": 2000000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 55,
                "Damage per Attack": 110,
                "Hitpoints": "1,300",
                "level": 7,
                "res_cost": 3000000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 62,
                "Damage per Attack": 124,
                "Hitpoints": "1,500",
                "level": 8,
                "res_cost": 3500000,
                "time_cost": 475200000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 70,
                "Damage per Attack": 140,
                "Hitpoints": "1,850",
                "level": 9,
                "res_cost": 5600000,
                "time_cost": 691200000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 78,
                "Damage per Attack": 156,
                "Hitpoints": "2,000",
                "level": 10,
                "res_cost": 8000000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 86,
                "Damage per Attack": 172,
                "Hitpoints": "2,200",
                "level": 11,
                "res_cost": 16500000,
                "time_cost": 1382400000,
                "lab_level": 13.0
            }
        ]
    },
    "balloon": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 25,
                "Damage per Attack": 75,
                "Damage Upon Death": 25,
                "Hitpoints": "150",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 32,
                "Damage per Attack": 96,
                "Damage Upon Death": 32,
                "Hitpoints": "180",
                "level": 2,
                "res_cost": 125000,
                "time_cost": 28800000,
                "lab_level": 2.0
            },
            {
                "Damage per Second": 48,
                "Damage per Attack": 144,
                "Damage Upon Death": 48,
                "Hitpoints": "216",
                "level": 3,
                "res_cost": 400000,
                "time_cost": 43200000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 72,
                "Damage per Attack": 216,
                "Damage Upon Death": 72,
                "Hitpoints": "280",
                "level": 4,
                "res_cost": 800000,
                "time_cost": 64800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 108,
                "Damage per Attack": 324,
                "Damage Upon Death": 108,
                "Hitpoints": "390",
                "level": 5,
                "res_cost": 1500000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 162,
                "Damage per Attack": 486,
                "Damage Upon Death": 162,
                "Hitpoints": "545",
                "level": 6,
                "res_cost": 2750000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 198,
                "Damage per Attack": 594,
                "Damage Upon Death": 214,
                "Hitpoints": "690",
                "level": 7,
                "res_cost": 4500000,
                "time_cost": 453600000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 236,
                "Damage per Attack": 708,
                "Damage Upon Death": 268,
                "Hitpoints": "840",
                "level": 8,
                "res_cost": 7000000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 256,
                "Damage per Attack": 768,
                "Damage Upon Death": 322,
                "Hitpoints": "940",
                "level": 9,
                "res_cost": 8500000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 276,
                "Damage per Attack": 828,
                "Damage Upon Death": 352,
                "Hitpoints": "1,040",
                "level": 10,
                "res_cost": 17000000,
                "time_cost": 1468800000,
                "lab_level": 12.0
            }
        ]
    },
    "valkyrie": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 94,
                "Damage per Hit": 169.2,
                "Hitpoints": "750",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 106,
                "Damage per Hit": 190.8,
                "Hitpoints": "850",
                "level": 2,
                "res_cost": 8000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 119,
                "Damage per Hit": 214.2,
                "Hitpoints": "950",
                "level": 3,
                "res_cost": 12000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 133,
                "Damage per Hit": 239.4,
                "Hitpoints": "1,050",
                "level": 4,
                "res_cost": 25000,
                "time_cost": 259200000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 148,
                "Damage per Hit": 266.4,
                "Hitpoints": "1,300",
                "level": 5,
                "res_cost": 38000,
                "time_cost": 367200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 163,
                "Damage per Hit": 293.4,
                "Hitpoints": "1,500",
                "level": 6,
                "res_cost": 63000,
                "time_cost": 453600000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 178,
                "Damage per Hit": 320.4,
                "Hitpoints": "1,650",
                "level": 7,
                "res_cost": 110000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 193,
                "Damage per Hit": 347.4,
                "Hitpoints": "1,800",
                "level": 8,
                "res_cost": 155000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 208,
                "Damage per Hit": 374.4,
                "Hitpoints": "2,000",
                "level": 9,
                "res_cost": 295000,
                "time_cost": 1404000000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 223,
                "Damage per Hit": 401.4,
                "Hitpoints": "2,400",
                "level": 10,
                "res_cost": 320000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "headhunter": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 105,
                "Damage per Hit": 63,
                "DPS on Heroes": 420,
                "Speed Decrease": "40%",
                "Attack Rate Decrease": "55%",
                "Hitpoints": 360,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 115,
                "Damage per Hit": 69,
                "DPS on Heroes": 460,
                "Speed Decrease": "42%",
                "Attack Rate Decrease": "60%",
                "Hitpoints": 400,
                "level": 2,
                "res_cost": 115000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 125,
                "Damage per Hit": 75,
                "DPS on Heroes": 500,
                "Speed Decrease": "44%",
                "Attack Rate Decrease": "65%",
                "Hitpoints": 440,
                "level": 3,
                "res_cost": 145000,
                "time_cost": 864000000,
                "lab_level": 11.0
            }
        ]
    },
    "ice_golem": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 24,
                "Damage per Attack": 57.6,
                "Freeze Time After Death On Offense": "4.0s",
                "Freeze Time After Death On Defense": "2.0s",
                "Hitpoints": "2,600",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 28,
                "Damage per Attack": 67.2,
                "Freeze Time After Death On Offense": "4.75s",
                "Freeze Time After Death On Defense": "2.25s",
                "Hitpoints": "2,800",
                "level": 2,
                "res_cost": 55000,
                "time_cost": 244800000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 32,
                "Damage per Attack": 76.8,
                "Freeze Time After Death On Offense": "5.5s",
                "Freeze Time After Death On Defense": "2.5s",
                "Hitpoints": "3,000",
                "level": 3,
                "res_cost": 85000,
                "time_cost": 432000000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 36,
                "Damage per Attack": 86.4,
                "Freeze Time After Death On Offense": "6.25s",
                "Freeze Time After Death On Defense": "2.75s",
                "Hitpoints": "3,200",
                "level": 4,
                "res_cost": 100000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 40,
                "Damage per Attack": 96.0,
                "Freeze Time After Death On Offense": "7.0s",
                "Freeze Time After Death On Defense": "3.0s",
                "Hitpoints": "3,400",
                "level": 5,
                "res_cost": 125000,
                "time_cost": 691200000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 44,
                "Damage per Attack": 105.6,
                "Freeze Time After Death On Offense": "7.5s",
                "Freeze Time After Death On Defense": "3.25s",
                "Hitpoints": "3,600",
                "level": 6,
                "res_cost": 305000,
                "time_cost": 1382400000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 48,
                "Damage per Attack": 115.2,
                "Freeze Time After Death On Offense": "8s",
                "Freeze Time After Death On Defense": "3.5s",
                "Hitpoints": "3,900",
                "level": 7,
                "res_cost": 335000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "bowler": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 60,
                "Damage per Hit": 132.0,
                "Hitpoints": 325,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 70,
                "Damage per Hit": 154.0,
                "Hitpoints": 350,
                "level": 2,
                "res_cost": 65000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 80,
                "Damage per Hit": 176.0,
                "Hitpoints": 385,
                "level": 3,
                "res_cost": 88000,
                "time_cost": 432000000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 90,
                "Damage per Hit": 198.0,
                "Hitpoints": 420,
                "level": 4,
                "res_cost": 125000,
                "time_cost": 648000000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 96,
                "Damage per Hit": 211.2,
                "Hitpoints": 455,
                "level": 5,
                "res_cost": 170000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 102,
                "Damage per Hit": 224.4,
                "Hitpoints": 500,
                "level": 6,
                "res_cost": 305000,
                "time_cost": 1447200000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 114,
                "Damage per Hit": 250.8,
                "Hitpoints": 550,
                "level": 7,
                "res_cost": 335000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "golem": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 35,
                "Damage per Hit": 84,
                "Damage Upon Death": 350,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "5,100",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 40,
                "Damage per Hit": 96,
                "Damage Upon Death": 400,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "5,400",
                "level": 2,
                "res_cost": 10000,
                "time_cost": 108000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 45,
                "Damage per Hit": 108,
                "Damage Upon Death": 450,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "5,700",
                "level": 3,
                "res_cost": 20000,
                "time_cost": 216000000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 50,
                "Damage per Hit": 120,
                "Damage Upon Death": 500,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "6,000",
                "level": 4,
                "res_cost": 30000,
                "time_cost": 324000000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 55,
                "Damage per Hit": 132,
                "Damage Upon Death": 550,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "6,300",
                "level": 5,
                "res_cost": 43000,
                "time_cost": 367200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 60,
                "Damage per Hit": 144,
                "Damage Upon Death": 600,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "6,600",
                "level": 6,
                "res_cost": 53000,
                "time_cost": 432000000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 65,
                "Damage per Hit": 156,
                "Damage Upon Death": 650,
                "Golemites spawned Upon Death": 2,
                "Hitpoints": "6,900",
                "level": 7,
                "res_cost": 77000,
                "time_cost": 475200000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 70,
                "Damage per Hit": 168,
                "Damage Upon Death": 700,
                "Golemites spawned Upon Death": 3,
                "Hitpoints": "7,200",
                "level": 8,
                "res_cost": 100000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 75,
                "Damage per Hit": 180,
                "Damage Upon Death": 750,
                "Golemites spawned Upon Death": 3,
                "Hitpoints": "7,500",
                "level": 9,
                "res_cost": 125000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 80,
                "Damage per Hit": 192,
                "Damage Upon Death": 800,
                "Golemites spawned Upon Death": 3,
                "Hitpoints": "8,000",
                "level": 10,
                "res_cost": 160000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 85,
                "Damage per Hit": 204,
                "Damage Upon Death": 850,
                "Golemites spawned Upon Death": 3,
                "Hitpoints": "8,400",
                "level": 11,
                "res_cost": 300000,
                "time_cost": 1382400000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 90,
                "Damage per Hit": 216,
                "Damage Upon Death": 900,
                "Golemites spawned Upon Death": 3,
                "Hitpoints": "8,800",
                "level": 12,
                "res_cost": 330000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "apprentice_warden": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 170,
                "Damage per Hit": 153.0,
                "Aura HP Increase": "24%",
                "Hitpoints": "1,500",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 185,
                "Damage per Hit": 166.5,
                "Aura HP Increase": "26%",
                "Hitpoints": "1,650",
                "level": 2,
                "res_cost": 180000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 200,
                "Damage per Hit": 180.0,
                "Aura HP Increase": "28%",
                "Hitpoints": "1,800",
                "level": 3,
                "res_cost": 315000,
                "time_cost": 1447200000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 215,
                "Damage per Hit": 193.5,
                "Aura HP Increase": "30%",
                "Hitpoints": "1,950",
                "level": 4,
                "res_cost": 340000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "lava_hound": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 10,
                "Damage per Hit": 20,
                "Damage Upon Death": 100,
                "Lava Pups Spawned (After Death)": 8,
                "Hitpoints": "6,100",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 12,
                "Damage per Hit": 24,
                "Damage Upon Death": 150,
                "Lava Pups Spawned (After Death)": 10,
                "Hitpoints": "6,500",
                "level": 2,
                "res_cost": 35000,
                "time_cost": 216000000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 14,
                "Damage per Hit": 28,
                "Damage Upon Death": 200,
                "Lava Pups Spawned (After Death)": 12,
                "Hitpoints": "6,800",
                "level": 3,
                "res_cost": 50000,
                "time_cost": 367200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 16,
                "Damage per Hit": 32,
                "Damage Upon Death": 250,
                "Lava Pups Spawned (After Death)": 14,
                "Hitpoints": "7,200",
                "level": 4,
                "res_cost": 85000,
                "time_cost": 540000000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 18,
                "Damage per Hit": 36,
                "Damage Upon Death": 300,
                "Lava Pups Spawned (After Death)": 16,
                "Hitpoints": "7,600",
                "level": 5,
                "res_cost": 120000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 20,
                "Damage per Hit": 40,
                "Damage Upon Death": 350,
                "Lava Pups Spawned (After Death)": 18,
                "Hitpoints": "8,000",
                "level": 6,
                "res_cost": 160000,
                "time_cost": 820800000,
                "lab_level": 11.0
            }
        ]
    },
    "witch": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 100,
                "Damage per Hit": 70,
                "Maximum Skeletons Summoned": 6,
                "Hitpoints": 300,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 110,
                "Damage per Hit": 77,
                "Maximum Skeletons Summoned": 8,
                "Hitpoints": 320,
                "level": 2,
                "res_cost": 50000,
                "time_cost": 345600000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 140,
                "Damage per Hit": 98,
                "Maximum Skeletons Summoned": 10,
                "Hitpoints": 400,
                "level": 3,
                "res_cost": 68000,
                "time_cost": 410400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 160,
                "Damage per Hit": 112,
                "Maximum Skeletons Summoned": 12,
                "Hitpoints": 440,
                "level": 4,
                "res_cost": 90000,
                "time_cost": 583200000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 180,
                "Damage per Hit": 126,
                "Maximum Skeletons Summoned": 14,
                "Hitpoints": 480,
                "level": 5,
                "res_cost": 125000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 200,
                "Damage per Hit": 140,
                "Maximum Skeletons Summoned": 15,
                "Hitpoints": 520,
                "level": 6,
                "res_cost": 340000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "hog_rider": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 60,
                "Damage per Hit": 60,
                "Hitpoints": "270",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 70,
                "Damage per Hit": 70,
                "Hitpoints": "312",
                "level": 2,
                "res_cost": 5000,
                "time_cost": 36000000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 80,
                "Damage per Hit": 80,
                "Hitpoints": "370",
                "level": 3,
                "res_cost": 9000,
                "time_cost": 72000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 92,
                "Damage per Hit": 92,
                "Hitpoints": "430",
                "level": 4,
                "res_cost": 16000,
                "time_cost": 108000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 105,
                "Damage per Hit": 105,
                "Hitpoints": "500",
                "level": 5,
                "res_cost": 30000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 118,
                "Damage per Hit": 118,
                "Hitpoints": "590",
                "level": 6,
                "res_cost": 43000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 135,
                "Damage per Hit": 135,
                "Hitpoints": "700",
                "level": 7,
                "res_cost": 70000,
                "time_cost": 453600000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 148,
                "Damage per Hit": 148,
                "Hitpoints": "810",
                "level": 8,
                "res_cost": 95000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 161,
                "Damage per Hit": 161,
                "Hitpoints": "890",
                "level": 9,
                "res_cost": 150000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 174,
                "Damage per Hit": 174,
                "Hitpoints": "970",
                "level": 10,
                "res_cost": 175000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 187,
                "Damage per Hit": 187,
                "Hitpoints": "1,080",
                "level": 11,
                "res_cost": 305000,
                "time_cost": 1404000000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 200,
                "Damage per Hit": 200,
                "Hitpoints": "1,230",
                "level": 12,
                "res_cost": 335000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "minion": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 38,
                "Damage per Hit": 38,
                "Hitpoints": 58,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 41,
                "Damage per Hit": 41,
                "Hitpoints": 63,
                "level": 2,
                "res_cost": 3000,
                "time_cost": 28800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 44,
                "Damage per Hit": 44,
                "Hitpoints": 68,
                "level": 3,
                "res_cost": 7000,
                "time_cost": 57600000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 47,
                "Damage per Hit": 47,
                "Hitpoints": 73,
                "level": 4,
                "res_cost": 15000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 50,
                "Damage per Hit": 50,
                "Hitpoints": 78,
                "level": 5,
                "res_cost": 25000,
                "time_cost": 172800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 54,
                "Damage per Hit": 54,
                "Hitpoints": 84,
                "level": 6,
                "res_cost": 35000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 58,
                "Damage per Hit": 58,
                "Hitpoints": 90,
                "level": 7,
                "res_cost": 63000,
                "time_cost": 432000000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 62,
                "Damage per Hit": 62,
                "Hitpoints": 96,
                "level": 8,
                "res_cost": 95000,
                "time_cost": 777600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 66,
                "Damage per Hit": 66,
                "Hitpoints": 102,
                "level": 9,
                "res_cost": 150000,
                "time_cost": 864000000,
                "lab_level": 11.0
            },
            {
                "Damage per Second": 70,
                "Damage per Hit": 70,
                "Hitpoints": 108,
                "level": 10,
                "res_cost": 285000,
                "time_cost": 1339200000,
                "lab_level": 12.0
            },
            {
                "Damage per Second": 74,
                "Damage per Hit": 74,
                "Hitpoints": 114,
                "level": 11,
                "res_cost": 310000,
                "time_cost": 1425600000,
                "lab_level": 13.0
            }
        ]
    },
    "sneaky_archer": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 60,
                "Damage per Attack": 60,
                "Hitpoints": 196,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": null,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 60,
                "Damage per Attack": 60,
                "Hitpoints": 196,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "3s",
                "level": 2,
                "res_cost": 5000,
                "time_cost": 180000,
                "lab_level": 1.0
            },
            {
                "Damage per Second": 66,
                "Damage per Attack": 66,
                "Hitpoints": 216,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "3s",
                "level": 3,
                "res_cost": 8000,
                "time_cost": 600000,
                "lab_level": 2.0
            },
            {
                "Damage per Second": 66,
                "Damage per Attack": 66,
                "Hitpoints": 216,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "4s",
                "level": 4,
                "res_cost": 12000,
                "time_cost": 1800000,
                "lab_level": 2.0
            },
            {
                "Damage per Second": 72,
                "Damage per Attack": 72,
                "Hitpoints": 237,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "4s",
                "level": 5,
                "res_cost": 100000,
                "time_cost": 21600000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 72,
                "Damage per Attack": 72,
                "Hitpoints": 237,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "5s",
                "level": 6,
                "res_cost": 200000,
                "time_cost": 39600000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 79,
                "Damage per Attack": 79,
                "Hitpoints": 261,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "5s",
                "level": 7,
                "res_cost": 320000,
                "time_cost": 57600000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 79,
                "Damage per Attack": 79,
                "Hitpoints": 261,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "6s",
                "level": 8,
                "res_cost": 350000,
                "time_cost": 75600000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 86,
                "Damage per Attack": 86,
                "Hitpoints": 287,
                "Number of Units per Army Camp": 3,
                "Cloak Duration": "6s",
                "level": 9,
                "res_cost": 800000,
                "time_cost": 86400000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 86,
                "Damage per Attack": 86,
                "Hitpoints": 287,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "6s",
                "level": 10,
                "res_cost": 1000000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 95,
                "Damage per Attack": 95,
                "Hitpoints": 316,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "6s",
                "level": 11,
                "res_cost": 1100000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 95,
                "Damage per Attack": 95,
                "Hitpoints": 316,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "7s",
                "level": 12,
                "res_cost": 1300000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 104,
                "Damage per Attack": 104,
                "Hitpoints": 347,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "7s",
                "level": 13,
                "res_cost": 2100000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 104,
                "Damage per Attack": 104,
                "Hitpoints": 347,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "8s",
                "level": 14,
                "res_cost": 2300000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 112,
                "Damage per Attack": 112,
                "Hitpoints": 382,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "8s",
                "level": 15,
                "res_cost": 3100000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 112,
                "Damage per Attack": 112,
                "Hitpoints": 382,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "9s",
                "level": 16,
                "res_cost": 3300000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 119,
                "Damage per Attack": 119,
                "Hitpoints": 420,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "9s",
                "level": 17,
                "res_cost": 3900000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 119,
                "Damage per Attack": 119,
                "Hitpoints": 420,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "10s",
                "level": 18,
                "res_cost": 4100000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 125,
                "Damage per Attack": 125,
                "Hitpoints": 462,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "10s",
                "level": 19,
                "res_cost": 4700000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 125,
                "Damage per Attack": 125,
                "Hitpoints": 462,
                "Number of Units per Army Camp": 4,
                "Cloak Duration": "11s",
                "level": 20,
                "res_cost": 5300000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "night_witch": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 176,
                "Damage per Attack": 123.2,
                "Hitpoints": "690",
                "Bats Summon Cooldown": "6.0s",
                "Bats Summoned": "3 (Max 4)",
                "Number of Bat Swarm": 6,
                "level": 9,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 176,
                "Damage per Attack": 123.2,
                "Hitpoints": "690",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "3 (Max 4)",
                "Number of Bat Swarm": 6,
                "level": 10,
                "res_cost": 1400000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 193,
                "Damage per Attack": 135.1,
                "Hitpoints": "759",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "3 (Max 4)",
                "Number of Bat Swarm": 6,
                "level": 11,
                "res_cost": 1600000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 193,
                "Damage per Attack": 135.1,
                "Hitpoints": "759",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "3 (Max 4)",
                "Number of Bat Swarm": 7,
                "level": 12,
                "res_cost": 1800000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 216,
                "Damage per Attack": 151.2,
                "Hitpoints": "835",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "3 (Max 4)",
                "Number of Bat Swarm": 7,
                "level": 13,
                "res_cost": 2500000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 216,
                "Damage per Attack": 151.2,
                "Hitpoints": "835",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 7,
                "level": 14,
                "res_cost": 2700000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 234,
                "Damage per Attack": 163.8,
                "Hitpoints": "918",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 7,
                "level": 15,
                "res_cost": 3500000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 234,
                "Damage per Attack": 163.8,
                "Hitpoints": "918",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 8,
                "level": 16,
                "res_cost": 3700000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 257,
                "Damage per Attack": 179.9,
                "Hitpoints": "1,010",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 8,
                "level": 17,
                "res_cost": 4200000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 257,
                "Damage per Attack": 179.9,
                "Hitpoints": "1,010",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 9,
                "level": 18,
                "res_cost": 4400000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 278,
                "Damage per Attack": 194.6,
                "Hitpoints": "1,111",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 9,
                "level": 19,
                "res_cost": 5200000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 278,
                "Damage per Attack": 194.6,
                "Hitpoints": "1,111",
                "Bats Summon Cooldown": "4.8s",
                "Bats Summoned": "4 (Max 5)",
                "Number of Bat Swarm": 10,
                "level": 20,
                "res_cost": 5600000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "cannon_cart": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 115,
                "Damage per Attack": 138,
                "Hitpoints": "666",
                "level": 7,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 115,
                "Damage per Attack": 138,
                "Hitpoints": "666",
                "level": 8,
                "res_cost": 1000000,
                "time_cost": 86400000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 130,
                "Damage per Attack": 256,
                "Hitpoints": "732",
                "level": 9,
                "res_cost": 1100000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 130,
                "Damage per Attack": 156,
                "Hitpoints": "732",
                "level": 10,
                "res_cost": 1200000,
                "time_cost": 172800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 150,
                "Damage per Attack": 180,
                "Hitpoints": "805",
                "level": 11,
                "res_cost": 1400000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 150,
                "Damage per Attack": 180,
                "Hitpoints": "805",
                "level": 12,
                "res_cost": 1600000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 170,
                "Damage per Attack": 204,
                "Hitpoints": "886",
                "level": 13,
                "res_cost": 2400000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 170,
                "Damage per Attack": 204,
                "Hitpoints": "886",
                "level": 14,
                "res_cost": 2600000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 190,
                "Damage per Attack": 228,
                "Hitpoints": "974",
                "level": 15,
                "res_cost": 3400000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 190,
                "Damage per Attack": 228,
                "Hitpoints": "974",
                "level": 16,
                "res_cost": 3600000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 215,
                "Damage per Attack": 258,
                "Hitpoints": "1,072",
                "level": 17,
                "res_cost": 4100000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 215,
                "Damage per Attack": 258,
                "Hitpoints": "1,072",
                "level": 18,
                "res_cost": 4300000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 240,
                "Damage per Attack": 288,
                "Hitpoints": "1,179",
                "level": 19,
                "res_cost": 5300000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 240,
                "Damage per Attack": 288,
                "Hitpoints": "1,179",
                "level": 20,
                "res_cost": 5700000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "hog_glider": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage": 180,
                "Hitpoints": 600,
                "Stun Duration": "5.0s",
                "level": 15,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage": 220,
                "Hitpoints": 650,
                "Stun Duration": "5.0s",
                "level": 16,
                "res_cost": 4000000,
                "time_cost": 475200000,
                "lab_level": 9.0
            },
            {
                "Damage": 220,
                "Hitpoints": 650,
                "Stun Duration": "5.0s",
                "level": 17,
                "res_cost": 4200000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage": 220,
                "Hitpoints": 650,
                "Stun Duration": "6.0s",
                "level": 18,
                "res_cost": 4400000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage": 220,
                "Hitpoints": 650,
                "Stun Duration": "6.0s",
                "level": 19,
                "res_cost": 5400000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage": 260,
                "Hitpoints": 700,
                "Stun Duration": "6.0s",
                "level": 20,
                "res_cost": 5800000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "beta_minion": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 60,
                "Damage per Attack": 60,
                "Hitpoints": 200,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 4,
                "Power Shot Ability Damage per Hit": 60,
                "level": 3,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 60,
                "Damage per Attack": 60,
                "Hitpoints": 200,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 4,
                "Power Shot Ability Damage per Hit": 75,
                "level": 4,
                "res_cost": 50000,
                "time_cost": 14400000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 65,
                "Damage per Attack": 65,
                "Hitpoints": 220,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 4,
                "Power Shot Ability Damage per Hit": 75,
                "level": 5,
                "res_cost": 110000,
                "time_cost": 28800000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 65,
                "Damage per Attack": 65,
                "Hitpoints": 220,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 75,
                "level": 6,
                "res_cost": 220000,
                "time_cost": 43200000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 72,
                "Damage per Attack": 72,
                "Hitpoints": 242,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 75,
                "level": 7,
                "res_cost": 330000,
                "time_cost": 64800000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 72,
                "Damage per Attack": 72,
                "Hitpoints": 242,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 90,
                "level": 8,
                "res_cost": 360000,
                "time_cost": 86400000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 81,
                "Damage per Attack": 81,
                "Hitpoints": 266,
                "Units per Army Camp": 3,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 90,
                "level": 9,
                "res_cost": 900000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 81,
                "Damage per Attack": 81,
                "Hitpoints": 266,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 90,
                "level": 10,
                "res_cost": 1100000,
                "time_cost": 172800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 90,
                "Damage per Attack": 90,
                "Hitpoints": 293,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 90,
                "level": 11,
                "res_cost": 1300000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 90,
                "Damage per Attack": 90,
                "Hitpoints": 293,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 110,
                "level": 12,
                "res_cost": 1500000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 99,
                "Damage per Attack": 99,
                "Hitpoints": 322,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 5,
                "Power Shot Ability Damage per Hit": 110,
                "level": 13,
                "res_cost": 2300000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 99,
                "Damage per Attack": 99,
                "Hitpoints": 322,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 6,
                "Power Shot Ability Damage per Hit": 110,
                "level": 14,
                "res_cost": 2500000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 108,
                "Damage per Attack": 108,
                "Hitpoints": 355,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 6,
                "Power Shot Ability Damage per Hit": 110,
                "level": 15,
                "res_cost": 3300000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 108,
                "Damage per Attack": 108,
                "Hitpoints": 355,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 6,
                "Power Shot Ability Damage per Hit": 130,
                "level": 16,
                "res_cost": 3500000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 117,
                "Damage per Attack": 117,
                "Hitpoints": 390,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 6,
                "Power Shot Ability Damage per Hit": 130,
                "level": 17,
                "res_cost": 4000000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 117,
                "Damage per Attack": 117,
                "Hitpoints": 390,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 7,
                "Power Shot Ability Damage per Hit": 130,
                "level": 18,
                "res_cost": 4200000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 126,
                "Damage per Attack": 126,
                "Hitpoints": 429,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 7,
                "Power Shot Ability Damage per Hit": 130,
                "level": 19,
                "res_cost": 4800000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 126,
                "Damage per Attack": 126,
                "Hitpoints": 429,
                "Units per Army Camp": 4,
                "Power Shot Ability # of Attacks": 7,
                "Power Shot Ability Damage per Hit": 150,
                "level": 20,
                "res_cost": 5400000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "electrofire_wizard": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Initial DPS": 220,
                "DPS after 1.5s": 330,
                "DPS after 3.0s": 440,
                "Hitpoints": "1,100",
                "level": 17,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Initial DPS": 220,
                "DPS after 1.5s": 330,
                "DPS after 3.0s": 440,
                "Hitpoints": "1,100",
                "level": 18,
                "res_cost": 4400000,
                "time_cost": 518400000,
                "lab_level": 10.0
            },
            {
                "Initial DPS": 252,
                "DPS after 1.5s": 380,
                "DPS after 3.0s": 505,
                "Hitpoints": "1,210",
                "level": 19,
                "res_cost": 5400000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Initial DPS": 252,
                "DPS after 1.5s": 380,
                "DPS after 3.0s": 505,
                "Hitpoints": "1,210",
                "level": 20,
                "res_cost": 5800000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "raged_barbarian": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 45,
                "Damage per Attack": 36.0,
                "Hitpoints": "500",
                "Number of Units per Army Camp": 3,
                "Rage Duration": null,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 45,
                "Damage per Attack": 36.0,
                "Hitpoints": "500",
                "Number of Units per Army Camp": 3,
                "Rage Duration": "6s",
                "level": 2,
                "res_cost": 3500,
                "time_cost": 30000,
                "lab_level": 1.0
            },
            {
                "Damage per Second": 58,
                "Damage per Attack": 46.4,
                "Hitpoints": "550",
                "Number of Units per Army Camp": 3,
                "Rage Duration": "6s",
                "level": 3,
                "res_cost": 7000,
                "time_cost": 300000,
                "lab_level": 2.0
            },
            {
                "Damage per Second": 58,
                "Damage per Attack": 46.4,
                "Hitpoints": "550",
                "Number of Units per Army Camp": 3,
                "Rage Duration": "8s",
                "level": 4,
                "res_cost": 10000,
                "time_cost": 900000,
                "lab_level": 2.0
            },
            {
                "Damage per Second": 70,
                "Damage per Attack": 56.0,
                "Hitpoints": "605",
                "Number of Units per Army Camp": 3,
                "Rage Duration": "8s",
                "level": 5,
                "res_cost": 90000,
                "time_cost": 18000000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 70,
                "Damage per Attack": 56.0,
                "Hitpoints": "605",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "8s",
                "level": 6,
                "res_cost": 180000,
                "time_cost": 36000000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 83,
                "Damage per Attack": 66.4,
                "Hitpoints": "666",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "8s",
                "level": 7,
                "res_cost": 300000,
                "time_cost": 54000000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 83,
                "Damage per Attack": 66.4,
                "Hitpoints": "666",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "10s",
                "level": 8,
                "res_cost": 330000,
                "time_cost": 72000000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 93,
                "Damage per Attack": 74.4,
                "Hitpoints": "732",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "10s",
                "level": 9,
                "res_cost": 700000,
                "time_cost": 86400000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 93,
                "Damage per Attack": 74.4,
                "Hitpoints": "732",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "12s",
                "level": 10,
                "res_cost": 900000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 103,
                "Damage per Attack": 82.4,
                "Hitpoints": "805",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "12s",
                "level": 11,
                "res_cost": 1000000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 103,
                "Damage per Attack": 82.4,
                "Hitpoints": "805",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "14s",
                "level": 12,
                "res_cost": 1200000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 112,
                "Damage per Attack": 89.6,
                "Hitpoints": "886",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "14s",
                "level": 13,
                "res_cost": 2000000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 112,
                "Damage per Attack": 89.6,
                "Hitpoints": "886",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "16s",
                "level": 14,
                "res_cost": 2200000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 96.0,
                "Hitpoints": "974",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "16s",
                "level": 15,
                "res_cost": 3000000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 96.0,
                "Hitpoints": "974",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "18s",
                "level": 16,
                "res_cost": 3200000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 128,
                "Damage per Attack": 102.4,
                "Hitpoints": "1,072",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "18s",
                "level": 17,
                "res_cost": 3800000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 128,
                "Damage per Attack": 102.4,
                "Hitpoints": "1,072",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "20s",
                "level": 18,
                "res_cost": 4000000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 136,
                "Damage per Attack": 108.8,
                "Hitpoints": "1,179",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "20s",
                "level": 19,
                "res_cost": 4600000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 136,
                "Damage per Attack": 108.8,
                "Hitpoints": "1,179",
                "Number of Units per Army Camp": 4,
                "Rage Duration": "22s",
                "level": 20,
                "res_cost": 5200000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "power_pekka": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 420,
                "Damage per Attack": "756",
                "Hitpoints": "3,900",
                "Overcharge Damage": "920",
                "level": 13,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 420,
                "Damage per Attack": "756",
                "Hitpoints": "3,900",
                "Overcharge Damage": "1,060",
                "level": 14,
                "res_cost": 3600000,
                "time_cost": 388800000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 460,
                "Damage per Attack": "828",
                "Hitpoints": "4,290",
                "Overcharge Damage": "1,060",
                "level": 15,
                "res_cost": 3800000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 460,
                "Damage per Attack": "828",
                "Hitpoints": "4,290",
                "Overcharge Damage": "1,200",
                "level": 16,
                "res_cost": 4000000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 500,
                "Damage per Attack": "900",
                "Hitpoints": "4,719",
                "Overcharge Damage": "1,200",
                "level": 17,
                "res_cost": 4600000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 500,
                "Damage per Attack": "900",
                "Hitpoints": "4,719",
                "Overcharge Damage": "1,350",
                "level": 18,
                "res_cost": 4800000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 560,
                "Damage per Attack": "1,008",
                "Hitpoints": "5,191",
                "Overcharge Damage": "1,350",
                "level": 19,
                "res_cost": 5600000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 560,
                "Damage per Attack": "1,008",
                "Hitpoints": "5,191",
                "Overcharge Damage": "1,500",
                "level": 20,
                "res_cost": 5800000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "boxer_giant": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 65,
                "Damage per Attack": 130,
                "Hitpoints": "2,530",
                "Boxer Block Duration": null,
                "Power Punch Damage": "550",
                "level": 3,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 65,
                "Damage per Attack": 130,
                "Hitpoints": "2,530",
                "Boxer Block Duration": "5.0s",
                "Power Punch Damage": "550",
                "level": 4,
                "res_cost": 60000,
                "time_cost": 18000000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 70,
                "Damage per Attack": 140,
                "Hitpoints": "2,783",
                "Boxer Block Duration": "5.0s",
                "Power Punch Damage": "550",
                "level": 5,
                "res_cost": 120000,
                "time_cost": 36000000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 70,
                "Damage per Attack": 140,
                "Hitpoints": "2,783",
                "Boxer Block Duration": "5.0s",
                "Power Punch Damage": "700",
                "level": 6,
                "res_cost": 240000,
                "time_cost": 57600000,
                "lab_level": 3.0
            },
            {
                "Damage per Second": 76,
                "Damage per Attack": 152,
                "Hitpoints": "3,061",
                "Boxer Block Duration": "5.0s",
                "Power Punch Damage": "700",
                "level": 7,
                "res_cost": 350000,
                "time_cost": 72000000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 76,
                "Damage per Attack": 152,
                "Hitpoints": "3,061",
                "Boxer Block Duration": "6.0s",
                "Power Punch Damage": "700",
                "level": 8,
                "res_cost": 380000,
                "time_cost": 86400000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 83,
                "Damage per Attack": 166,
                "Hitpoints": "3,367",
                "Boxer Block Duration": "6.0s",
                "Power Punch Damage": "700",
                "level": 9,
                "res_cost": 1000000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 83,
                "Damage per Attack": 166,
                "Hitpoints": "3,367",
                "Boxer Block Duration": "6.0s",
                "Power Punch Damage": "950",
                "level": 10,
                "res_cost": 1200000,
                "time_cost": 172800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 91,
                "Damage per Attack": 182,
                "Hitpoints": "3,704",
                "Boxer Block Duration": "6.0s",
                "Power Punch Damage": "950",
                "level": 11,
                "res_cost": 1300000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 91,
                "Damage per Attack": 182,
                "Hitpoints": "3,704",
                "Boxer Block Duration": "7.0s",
                "Power Punch Damage": "950",
                "level": 12,
                "res_cost": 1500000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 100,
                "Damage per Attack": 200,
                "Hitpoints": "4,075",
                "Boxer Block Duration": "7.0s",
                "Power Punch Damage": "950",
                "level": 13,
                "res_cost": 2300000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 100,
                "Damage per Attack": 200,
                "Hitpoints": "4,075",
                "Boxer Block Duration": "7.0s",
                "Power Punch Damage": "1,150",
                "level": 14,
                "res_cost": 2500000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 109,
                "Damage per Attack": 218,
                "Hitpoints": "4,482",
                "Boxer Block Duration": "7.0s",
                "Power Punch Damage": "1,150",
                "level": 15,
                "res_cost": 3300000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 109,
                "Damage per Attack": 218,
                "Hitpoints": "4,482",
                "Boxer Block Duration": "7.5s",
                "Power Punch Damage": "1,150",
                "level": 16,
                "res_cost": 3500000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 119,
                "Damage per Attack": 238,
                "Hitpoints": "4,930",
                "Boxer Block Duration": "7.5s",
                "Power Punch Damage": "1,150",
                "level": 17,
                "res_cost": 4000000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 119,
                "Damage per Attack": 238,
                "Hitpoints": "4,930",
                "Boxer Block Duration": "7.5s",
                "Power Punch Damage": "1,400",
                "level": 18,
                "res_cost": 4200000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 129,
                "Damage per Attack": 258,
                "Hitpoints": "5,423",
                "Boxer Block Duration": "7.5s",
                "Power Punch Damage": "1,400",
                "level": 19,
                "res_cost": 4800000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 129,
                "Damage per Attack": 258,
                "Hitpoints": "5,423",
                "Boxer Block Duration": "8.0s",
                "Power Punch Damage": "1,400",
                "level": 20,
                "res_cost": 5400000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "bomber": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 80,
                "Damage per Attack": 160,
                "Damage vs. Walls": "2,400",
                "Hitpoints": "605",
                "Bouncing Bomb Damage Normal": 80,
                "Bouncing Bomb Damage vs. Walls": "1,200",
                "level": 5,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage per Second": 80,
                "Damage per Attack": 160,
                "Damage vs. Walls": "2,400",
                "Hitpoints": "605",
                "Bouncing Bomb Damage Normal": 100,
                "Bouncing Bomb Damage vs. Walls": "1,500",
                "level": 6,
                "res_cost": 320000,
                "time_cost": 57600000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 90,
                "Damage per Attack": 180,
                "Damage vs. Walls": "2,700",
                "Hitpoints": "666",
                "Bouncing Bomb Damage Normal": 100,
                "Bouncing Bomb Damage vs. Walls": "1,500",
                "level": 7,
                "res_cost": 340000,
                "time_cost": 72000000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 90,
                "Damage per Attack": 180,
                "Damage vs. Walls": "2,700",
                "Hitpoints": "666",
                "Bouncing Bomb Damage Normal": 120,
                "Bouncing Bomb Damage vs. Walls": "1,800",
                "level": 8,
                "res_cost": 360000,
                "time_cost": 86400000,
                "lab_level": 4.0
            },
            {
                "Damage per Second": 100,
                "Damage per Attack": 200,
                "Damage vs. Walls": "3,000",
                "Hitpoints": "732",
                "Bouncing Bomb Damage Normal": 120,
                "Bouncing Bomb Damage vs. Walls": "1,800",
                "level": 9,
                "res_cost": 900000,
                "time_cost": 129600000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 100,
                "Damage per Attack": 200,
                "Damage vs. Walls": "3,000",
                "Hitpoints": "732",
                "Bouncing Bomb Damage Normal": 140,
                "Bouncing Bomb Damage vs. Walls": "2,100",
                "level": 10,
                "res_cost": 1000000,
                "time_cost": 172800000,
                "lab_level": 5.0
            },
            {
                "Damage per Second": 110,
                "Damage per Attack": 220,
                "Damage vs. Walls": "3,300",
                "Hitpoints": "805",
                "Bouncing Bomb Damage Normal": 140,
                "Bouncing Bomb Damage vs. Walls": "2,100",
                "level": 11,
                "res_cost": 1200000,
                "time_cost": 172800000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 110,
                "Damage per Attack": 220,
                "Damage vs. Walls": "3,300",
                "Hitpoints": "805",
                "Bouncing Bomb Damage Normal": 160,
                "Bouncing Bomb Damage vs. Walls": "2,400",
                "level": 12,
                "res_cost": 1400000,
                "time_cost": 216000000,
                "lab_level": 6.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 240,
                "Damage vs. Walls": "3,600",
                "Hitpoints": "886",
                "Bouncing Bomb Damage Normal": 160,
                "Bouncing Bomb Damage vs. Walls": "2,400",
                "level": 13,
                "res_cost": 2200000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 120,
                "Damage per Attack": 240,
                "Damage vs. Walls": "3,600",
                "Hitpoints": "886",
                "Bouncing Bomb Damage Normal": 180,
                "Bouncing Bomb Damage vs. Walls": "2,700",
                "level": 14,
                "res_cost": 2400000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Damage per Second": 130,
                "Damage per Attack": 260,
                "Damage vs. Walls": "3,900",
                "Hitpoints": "974",
                "Bouncing Bomb Damage Normal": 180,
                "Bouncing Bomb Damage vs. Walls": "2,700",
                "level": 15,
                "res_cost": 3200000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 130,
                "Damage per Attack": 260,
                "Damage vs. Walls": "3,900",
                "Hitpoints": "974",
                "Bouncing Bomb Damage Normal": 200,
                "Bouncing Bomb Damage vs. Walls": "3,000",
                "level": 16,
                "res_cost": 3400000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Damage per Second": 140,
                "Damage per Attack": 280,
                "Damage vs. Walls": "4,200",
                "Hitpoints": "1,072",
                "Bouncing Bomb Damage Normal": 200,
                "Bouncing Bomb Damage vs. Walls": "3,000",
                "level": 17,
                "res_cost": 3900000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 140,
                "Damage per Attack": 280,
                "Damage vs. Walls": "4,200",
                "Hitpoints": "1,072",
                "Bouncing Bomb Damage Normal": 220,
                "Bouncing Bomb Damage vs. Walls": "3,300",
                "level": 18,
                "res_cost": 4100000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Damage per Second": 150,
                "Damage per Attack": 300,
                "Damage vs. Walls": "4,500",
                "Hitpoints": "1,179",
                "Bouncing Bomb Damage Normal": 220,
                "Bouncing Bomb Damage vs. Walls": "3,300",
                "level": 19,
                "res_cost": 4700000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Damage per Second": 150,
                "Damage per Attack": 300,
                "Damage vs. Walls": "4,500",
                "Hitpoints": "1,179",
                "Bouncing Bomb Damage Normal": 240,
                "Bouncing Bomb Damage vs. Walls": "3,600",
                "level": 20,
                "res_cost": 5300000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    },
    "drop_ship": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Hitpoints": "3,400",
                "Damage when Destroyed": 300,
                "Skeleton Bomb Damage": 600,
                "Skeleton Bomb Spawned Skeletons": 5,
                "level": 11,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Hitpoints": "3,400",
                "Damage when Destroyed": 300,
                "Skeleton Bomb Damage": 700,
                "Skeleton Bomb Spawned Skeletons": 6,
                "level": 12,
                "res_cost": 2400000,
                "time_cost": 216000000,
                "lab_level": 7.0
            },
            {
                "Hitpoints": "3,740",
                "Damage when Destroyed": 300,
                "Skeleton Bomb Damage": 700,
                "Skeleton Bomb Spawned Skeletons": 6,
                "level": 13,
                "res_cost": 2600000,
                "time_cost": 302400000,
                "lab_level": 7.0
            },
            {
                "Hitpoints": "3,740",
                "Damage when Destroyed": 400,
                "Skeleton Bomb Damage": 700,
                "Skeleton Bomb Spawned Skeletons": 6,
                "level": 14,
                "res_cost": 2800000,
                "time_cost": 388800000,
                "lab_level": 7.0
            },
            {
                "Hitpoints": "4,114",
                "Damage when Destroyed": 400,
                "Skeleton Bomb Damage": 700,
                "Skeleton Bomb Spawned Skeletons": 6,
                "level": 15,
                "res_cost": 3600000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Hitpoints": "4,114",
                "Damage when Destroyed": 400,
                "Skeleton Bomb Damage": 800,
                "Skeleton Bomb Spawned Skeletons": 7,
                "level": 16,
                "res_cost": 3800000,
                "time_cost": 475200000,
                "lab_level": 8.0
            },
            {
                "Hitpoints": "4,525",
                "Damage when Destroyed": 400,
                "Skeleton Bomb Damage": 800,
                "Skeleton Bomb Spawned Skeletons": 7,
                "level": 17,
                "res_cost": 4300000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Hitpoints": "4,525",
                "Damage when Destroyed": 500,
                "Skeleton Bomb Damage": 800,
                "Skeleton Bomb Spawned Skeletons": 7,
                "level": 18,
                "res_cost": 4500000,
                "time_cost": 518400000,
                "lab_level": 9.0
            },
            {
                "Hitpoints": "4,978",
                "Damage when Destroyed": 500,
                "Skeleton Bomb Damage": 800,
                "Skeleton Bomb Spawned Skeletons": 7,
                "level": 19,
                "res_cost": 5500000,
                "time_cost": 561600000,
                "lab_level": 10.0
            },
            {
                "Hitpoints": "4,978",
                "Damage when Destroyed": 500,
                "Skeleton Bomb Damage": 900,
                "Skeleton Bomb Spawned Skeletons": 8,
                "level": 20,
                "res_cost": 5700000,
                "time_cost": 561600000,
                "lab_level": 10.0
            }
        ]
    }
};

const spells_info: TechData = {
    "rage_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage Increase": "130%",
                "Speed Increase": 20,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage Increase": "140%",
                "Speed Increase": 22,
                "level": 2,
                "res_cost": 400000,
                "time_cost": 43200000,
                "lab_level": 3.0
            },
            {
                "Damage Increase": "150%",
                "Speed Increase": 24,
                "level": 3,
                "res_cost": 800000,
                "time_cost": 86400000,
                "lab_level": 4.0
            },
            {
                "Damage Increase": "160%",
                "Speed Increase": 26,
                "level": 4,
                "res_cost": 1600000,
                "time_cost": 172800000,
                "lab_level": 5.0
            },
            {
                "Damage Increase": "170%",
                "Speed Increase": 28,
                "level": 5,
                "res_cost": 2400000,
                "time_cost": 345600000,
                "lab_level": 6.0
            },
            {
                "Damage Increase": "180%",
                "Speed Increase": 30,
                "level": 6,
                "res_cost": 7000000,
                "time_cost": 604800000,
                "lab_level": 10.0
            }
        ]
    },
    "recall_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Recalled Capacity": 83,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Recalled Capacity": 89,
                "level": 2,
                "res_cost": 7500000,
                "time_cost": 993600000,
                "lab_level": 11.0
            },
            {
                "Recalled Capacity": 95,
                "level": 3,
                "res_cost": 14000000,
                "time_cost": 1339200000,
                "lab_level": 12.0
            },
            {
                "Recalled Capacity": 101,
                "level": 4,
                "res_cost": 17500000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "freeze_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Freeze Time": "2.5 seconds",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Freeze Time": "3.0 seconds",
                "level": 2,
                "res_cost": 1200000,
                "time_cost": 129600000,
                "lab_level": 7.0
            },
            {
                "Freeze Time": "3.5 seconds",
                "level": 3,
                "res_cost": 1700000,
                "time_cost": 223200000,
                "lab_level": 8.0
            },
            {
                "Freeze Time": "4.0 seconds",
                "level": 4,
                "res_cost": 3000000,
                "time_cost": 367200000,
                "lab_level": 8.0
            },
            {
                "Freeze Time": "4.5 seconds",
                "level": 5,
                "res_cost": 4200000,
                "time_cost": 518400000,
                "lab_level": 8.0
            },
            {
                "Freeze Time": "5.0 seconds",
                "level": 6,
                "res_cost": 6000000,
                "time_cost": 669600000,
                "lab_level": 9.0
            },
            {
                "Freeze Time": "5.5 seconds",
                "level": 7,
                "res_cost": 7000000,
                "time_cost": 691200000,
                "lab_level": 10.0
            }
        ]
    },
    "lightning_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage": 150,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage": 180,
                "level": 2,
                "res_cost": 50000,
                "time_cost": 14400000,
                "lab_level": 1.0
            },
            {
                "Damage": 210,
                "level": 3,
                "res_cost": 100000,
                "time_cost": 28800000,
                "lab_level": 2.0
            },
            {
                "Damage": 240,
                "level": 4,
                "res_cost": 200000,
                "time_cost": 43200000,
                "lab_level": 3.0
            },
            {
                "Damage": 270,
                "level": 5,
                "res_cost": 600000,
                "time_cost": 86400000,
                "lab_level": 6.0
            },
            {
                "Damage": 320,
                "level": 6,
                "res_cost": 1500000,
                "time_cost": 345600000,
                "lab_level": 7.0
            },
            {
                "Damage": 400,
                "level": 7,
                "res_cost": 2500000,
                "time_cost": 518400000,
                "lab_level": 8.0
            },
            {
                "Damage": 480,
                "level": 8,
                "res_cost": 4200000,
                "time_cost": 626400000,
                "lab_level": 9.0
            },
            {
                "Damage": 560,
                "level": 9,
                "res_cost": 6300000,
                "time_cost": 691200000,
                "lab_level": 10.0
            },
            {
                "Damage": 600,
                "level": 10,
                "res_cost": 16000000,
                "time_cost": 1382400000,
                "lab_level": 13.0
            }
        ]
    },
    "healing_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Total Healing": "600",
                "Healing per Pulse": 15,
                "Total Healing on Heroes": "330",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Total Healing": "800",
                "Healing per Pulse": 20,
                "Total Healing on Heroes": "440",
                "level": 2,
                "res_cost": 75000,
                "time_cost": 18000000,
                "lab_level": 2.0
            },
            {
                "Total Healing": "1,000",
                "Healing per Pulse": 25,
                "Total Healing on Heroes": "550",
                "level": 3,
                "res_cost": 150000,
                "time_cost": 36000000,
                "lab_level": 4.0
            },
            {
                "Total Healing": "1,200",
                "Healing per Pulse": 30,
                "Total Healing on Heroes": "660",
                "level": 4,
                "res_cost": 300000,
                "time_cost": 72000000,
                "lab_level": 5.0
            },
            {
                "Total Healing": "1,400",
                "Healing per Pulse": 35,
                "Total Healing on Heroes": "770",
                "level": 5,
                "res_cost": 900000,
                "time_cost": 129600000,
                "lab_level": 6.0
            },
            {
                "Total Healing": "1,600",
                "Healing per Pulse": 40,
                "Total Healing on Heroes": "880",
                "level": 6,
                "res_cost": 1800000,
                "time_cost": 345600000,
                "lab_level": 7.0
            },
            {
                "Total Healing": "1,800",
                "Healing per Pulse": 45,
                "Total Healing on Heroes": "990",
                "level": 7,
                "res_cost": 3000000,
                "time_cost": 518400000,
                "lab_level": 8.0
            },
            {
                "Total Healing": "2,000",
                "Healing per Pulse": 50,
                "Total Healing on Heroes": "1,100",
                "level": 8,
                "res_cost": 8500000,
                "time_cost": 820800000,
                "lab_level": 11.0
            },
            {
                "Total Healing": "2,200",
                "Healing per Pulse": 55,
                "Total Healing on Heroes": "1,210",
                "level": 9,
                "res_cost": 17000000,
                "time_cost": 1468800000,
                "lab_level": 13.0
            }
        ]
    },
    "jump_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Spell Duration": "20 seconds",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Spell Duration": "40 seconds",
                "level": 2,
                "res_cost": 2000000,
                "time_cost": 345600000,
                "lab_level": 5.0
            },
            {
                "Spell Duration": "60 seconds",
                "level": 3,
                "res_cost": 3400000,
                "time_cost": 518400000,
                "lab_level": 8.0
            },
            {
                "Spell Duration": "80 seconds",
                "level": 4,
                "res_cost": 7200000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Spell Duration": "100 seconds",
                "level": 5,
                "res_cost": 16500000,
                "time_cost": 1425600000,
                "lab_level": 13.0
            }
        ]
    },
    "invisibility_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Duration": "3.75s",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Duration": "4s",
                "level": 2,
                "res_cost": 5600000,
                "time_cost": 475200000,
                "lab_level": 9.0
            },
            {
                "Duration": "4.25s",
                "level": 3,
                "res_cost": 7500000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Duration": "4.5s",
                "level": 4,
                "res_cost": 9000000,
                "time_cost": 820800000,
                "lab_level": 11.0
            }
        ]
    },
    "clone_spell": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Cloned Capacity": 22,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Cloned Capacity": 24,
                "level": 2,
                "res_cost": 2100000,
                "time_cost": 151200000,
                "lab_level": 8.0
            },
            {
                "Cloned Capacity": 26,
                "level": 3,
                "res_cost": 3400000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Cloned Capacity": 28,
                "level": 4,
                "res_cost": 4200000,
                "time_cost": 345600000,
                "lab_level": 9.0
            },
            {
                "Cloned Capacity": 30,
                "level": 5,
                "res_cost": 5600000,
                "time_cost": 604800000,
                "lab_level": 9.0
            },
            {
                "Cloned Capacity": 34,
                "level": 6,
                "res_cost": 7200000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Cloned Capacity": 38,
                "level": 7,
                "res_cost": 15500000,
                "time_cost": 1360800000,
                "lab_level": 12.0
            },
            {
                "Cloned Capacity": 42,
                "level": 8,
                "res_cost": 18000000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "skeleton_spell": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Skeletons generated": 12,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Skeletons generated": 13,
                "level": 2,
                "res_cost": 22000,
                "time_cost": 115200000,
                "lab_level": 8.0
            },
            {
                "Skeletons generated": 14,
                "level": 3,
                "res_cost": 34000,
                "time_cost": 223200000,
                "lab_level": 8.0
            },
            {
                "Skeletons generated": 15,
                "level": 4,
                "res_cost": 50000,
                "time_cost": 367200000,
                "lab_level": 9.0
            },
            {
                "Skeletons generated": 16,
                "level": 5,
                "res_cost": 80000,
                "time_cost": 475200000,
                "lab_level": 10.0
            },
            {
                "Skeletons generated": 17,
                "level": 6,
                "res_cost": 100000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Skeletons generated": 18,
                "level": 7,
                "res_cost": 150000,
                "time_cost": 777600000,
                "lab_level": 11.0
            },
            {
                "Skeletons generated": 19,
                "level": 8,
                "res_cost": 320000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "earthquake_spell": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage": "14.5%*",
                "Radius": "3.5 tiles",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Damage": "17%",
                "Radius": "3.8 tiles",
                "level": 2,
                "res_cost": 15000,
                "time_cost": 64800000,
                "lab_level": 6.0
            },
            {
                "Damage": "21%",
                "Radius": "4.1 tiles",
                "level": 3,
                "res_cost": 30000,
                "time_cost": 129600000,
                "lab_level": 7.0
            },
            {
                "Damage": "25%",
                "Radius": "4.4 tiles",
                "level": 4,
                "res_cost": 51000,
                "time_cost": 367200000,
                "lab_level": 8.0
            },
            {
                "Damage": "29%",
                "Radius": "4.7 tiles",
                "level": 5,
                "res_cost": 84000,
                "time_cost": 669600000,
                "lab_level": 9.0
            }
        ]
    },
    "bat_spell": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Bats generated": 7,
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Bats generated": 9,
                "level": 2,
                "res_cost": 26000,
                "time_cost": 151200000,
                "lab_level": 8.0
            },
            {
                "Bats generated": 11,
                "level": 3,
                "res_cost": 51000,
                "time_cost": 302400000,
                "lab_level": 8.0
            },
            {
                "Bats generated": 16,
                "level": 4,
                "res_cost": 70000,
                "time_cost": 453600000,
                "lab_level": 9.0
            },
            {
                "Bats generated": 21,
                "level": 5,
                "res_cost": 95000,
                "time_cost": 518400000,
                "lab_level": 10.0
            },
            {
                "Bats generated": 22,
                "level": 6,
                "res_cost": 330000,
                "time_cost": 1555200000,
                "lab_level": 13.0
            }
        ]
    },
    "poison_spell": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Max damage per second": 90,
                "Speed Decrease": "26%",
                "Attack Rate Decrease": "35%",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Max damage per second": 115,
                "Speed Decrease": "30%",
                "Attack Rate Decrease": "40%",
                "level": 2,
                "res_cost": 12000,
                "time_cost": 28800000,
                "lab_level": 6.0
            },
            {
                "Max damage per second": 145,
                "Speed Decrease": "34%",
                "Attack Rate Decrease": "45%",
                "level": 3,
                "res_cost": 25000,
                "time_cost": 86400000,
                "lab_level": 7.0
            },
            {
                "Max damage per second": 180,
                "Speed Decrease": "38%",
                "Attack Rate Decrease": "50%",
                "level": 4,
                "res_cost": 43000,
                "time_cost": 223200000,
                "lab_level": 8.0
            },
            {
                "Max damage per second": 220,
                "Speed Decrease": "40%",
                "Attack Rate Decrease": "55%",
                "level": 5,
                "res_cost": 70000,
                "time_cost": 540000000,
                "lab_level": 9.0
            },
            {
                "Max damage per second": 260,
                "Speed Decrease": "42%",
                "Attack Rate Decrease": "60%",
                "level": 6,
                "res_cost": 110000,
                "time_cost": 604800000,
                "lab_level": 10.0
            },
            {
                "Max damage per second": 280,
                "Speed Decrease": "44%",
                "Attack Rate Decrease": "65%",
                "level": 7,
                "res_cost": 155000,
                "time_cost": 820800000,
                "lab_level": 11.0
            },
            {
                "Max damage per second": 300,
                "Speed Decrease": "46%",
                "Attack Rate Decrease": "68%",
                "level": 8,
                "res_cost": 285000,
                "time_cost": 1447200000,
                "lab_level": 12.0
            },
            {
                "Max damage per second": 320,
                "Speed Decrease": "48%",
                "Attack Rate Decrease": "70%",
                "level": 9,
                "res_cost": 320000,
                "time_cost": 1512000000,
                "lab_level": 13.0
            }
        ]
    },
    "haste_spell": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Speed Increase": 28,
                "Spell Duration": "10 seconds",
                "level": 1,
                "res_cost": null,
                "time_cost": null,
                "lab_level": null
            },
            {
                "Speed Increase": 34,
                "Spell Duration": "15 seconds",
                "level": 2,
                "res_cost": 20000,
                "time_cost": 129600000,
                "lab_level": 7.0
            },
            {
                "Speed Increase": 40,
                "Spell Duration": "20 seconds",
                "level": 3,
                "res_cost": 34000,
                "time_cost": 223200000,
                "lab_level": 8.0
            },
            {
                "Speed Increase": 46,
                "Spell Duration": "25 seconds",
                "level": 4,
                "res_cost": 60000,
                "time_cost": 432000000,
                "lab_level": 8.0
            },
            {
                "Speed Increase": 52,
                "Spell Duration": "30 seconds",
                "level": 5,
                "res_cost": 77000,
                "time_cost": 669600000,
                "lab_level": 9.0
            }
        ]
    }
};

const heroes_info: HeroData = {
    "battle_machine": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 125,
                "Damage per Hit": 150.0,
                "Hitpoints": "3,000",
                "Ability Level": null,
                "level": 1,
                "res_cost": 900000,
                "time_cost": 43200000,
                "hall_level": 5
            },
            {
                "Damage per Second": 127,
                "Damage per Hit": 152.4,
                "Hitpoints": "3,070",
                "Ability Level": null,
                "level": 2,
                "res_cost": 1000000,
                "time_cost": 43200000,
                "hall_level": 5
            },
            {
                "Damage per Second": 130,
                "Damage per Hit": 156.0,
                "Hitpoints": "3,140",
                "Ability Level": null,
                "level": 3,
                "res_cost": 1100000,
                "time_cost": 43200000,
                "hall_level": 5
            },
            {
                "Damage per Second": 132,
                "Damage per Hit": 158.4,
                "Hitpoints": "3,210",
                "Ability Level": null,
                "level": 4,
                "res_cost": 1200000,
                "time_cost": 86400000,
                "hall_level": 5
            },
            {
                "Damage per Second": 135,
                "Damage per Hit": 162.0,
                "Hitpoints": "3,280",
                "Ability Level": 1.0,
                "level": 5,
                "res_cost": 1300000,
                "time_cost": 86400000,
                "hall_level": 5
            },
            {
                "Damage per Second": 137,
                "Damage per Hit": 164.4,
                "Hitpoints": "3,350",
                "Ability Level": 1.0,
                "level": 6,
                "res_cost": 1500000,
                "time_cost": 129600000,
                "hall_level": 6
            },
            {
                "Damage per Second": 140,
                "Damage per Hit": 168.0,
                "Hitpoints": "3,420",
                "Ability Level": 1.0,
                "level": 7,
                "res_cost": 1600000,
                "time_cost": 129600000,
                "hall_level": 6
            },
            {
                "Damage per Second": 142,
                "Damage per Hit": 170.4,
                "Hitpoints": "3,490",
                "Ability Level": 1.0,
                "level": 8,
                "res_cost": 1700000,
                "time_cost": 172800000,
                "hall_level": 6
            },
            {
                "Damage per Second": 145,
                "Damage per Hit": 174.0,
                "Hitpoints": "3,560",
                "Ability Level": 1.0,
                "level": 9,
                "res_cost": 1800000,
                "time_cost": 172800000,
                "hall_level": 6
            },
            {
                "Damage per Second": 147,
                "Damage per Hit": 176.4,
                "Hitpoints": "3,630",
                "Ability Level": 2.0,
                "level": 10,
                "res_cost": 1900000,
                "time_cost": 216000000,
                "hall_level": 6
            },
            {
                "Damage per Second": 150,
                "Damage per Hit": 180.0,
                "Hitpoints": "3,700",
                "Ability Level": 2.0,
                "level": 11,
                "res_cost": 2100000,
                "time_cost": 216000000,
                "hall_level": 7
            },
            {
                "Damage per Second": 154,
                "Damage per Hit": 184.8,
                "Hitpoints": "3,770",
                "Ability Level": 2.0,
                "level": 12,
                "res_cost": 2200000,
                "time_cost": 259200000,
                "hall_level": 7
            },
            {
                "Damage per Second": 157,
                "Damage per Hit": 188.4,
                "Hitpoints": "3,840",
                "Ability Level": 2.0,
                "level": 13,
                "res_cost": 2300000,
                "time_cost": 259200000,
                "hall_level": 7
            },
            {
                "Damage per Second": 160,
                "Damage per Hit": 192.0,
                "Hitpoints": "3,910",
                "Ability Level": 2.0,
                "level": 14,
                "res_cost": 2400000,
                "time_cost": 302400000,
                "hall_level": 7
            },
            {
                "Damage per Second": 164,
                "Damage per Hit": 196.8,
                "Hitpoints": "3,980",
                "Ability Level": 3.0,
                "level": 15,
                "res_cost": 2500000,
                "time_cost": 302400000,
                "hall_level": 7
            },
            {
                "Damage per Second": 167,
                "Damage per Hit": 200.4,
                "Hitpoints": "4,050",
                "Ability Level": 3.0,
                "level": 16,
                "res_cost": 2600000,
                "time_cost": 345600000,
                "hall_level": 7
            },
            {
                "Damage per Second": 170,
                "Damage per Hit": 204.0,
                "Hitpoints": "4,120",
                "Ability Level": 3.0,
                "level": 17,
                "res_cost": 2700000,
                "time_cost": 345600000,
                "hall_level": 7
            },
            {
                "Damage per Second": 174,
                "Damage per Hit": 208.8,
                "Hitpoints": "4,190",
                "Ability Level": 3.0,
                "level": 18,
                "res_cost": 2800000,
                "time_cost": 345600000,
                "hall_level": 7
            },
            {
                "Damage per Second": 177,
                "Damage per Hit": 212.4,
                "Hitpoints": "4,260",
                "Ability Level": 3.0,
                "level": 19,
                "res_cost": 2900000,
                "time_cost": 345600000,
                "hall_level": 7
            },
            {
                "Damage per Second": 180,
                "Damage per Hit": 216.0,
                "Hitpoints": "4,330",
                "Ability Level": 4.0,
                "level": 20,
                "res_cost": 3000000,
                "time_cost": 345600000,
                "hall_level": 7
            },
            {
                "Damage per Second": 186,
                "Damage per Hit": 223.2,
                "Hitpoints": "4,400",
                "Ability Level": 4.0,
                "level": 21,
                "res_cost": 3100000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 192,
                "Damage per Hit": 230.4,
                "Hitpoints": "4,470",
                "Ability Level": 4.0,
                "level": 22,
                "res_cost": 3200000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 198,
                "Damage per Hit": 237.6,
                "Hitpoints": "4,540",
                "Ability Level": 4.0,
                "level": 23,
                "res_cost": 3300000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 204,
                "Damage per Hit": 244.8,
                "Hitpoints": "4,610",
                "Ability Level": 4.0,
                "level": 24,
                "res_cost": 3400000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 210,
                "Damage per Hit": 252.0,
                "Hitpoints": "4,680",
                "Ability Level": 5.0,
                "level": 25,
                "res_cost": 3500000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 218,
                "Damage per Hit": 261.6,
                "Hitpoints": "4,750",
                "Ability Level": 5.0,
                "level": 26,
                "res_cost": 3600000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 226,
                "Damage per Hit": 271.2,
                "Hitpoints": "4,820",
                "Ability Level": 5.0,
                "level": 27,
                "res_cost": 3700000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 234,
                "Damage per Hit": 280.8,
                "Hitpoints": "4,890",
                "Ability Level": 5.0,
                "level": 28,
                "res_cost": 3800000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 242,
                "Damage per Hit": 290.4,
                "Hitpoints": "4,960",
                "Ability Level": 5.0,
                "level": 29,
                "res_cost": 3900000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 250,
                "Damage per Hit": 300.0,
                "Hitpoints": "5,030",
                "Ability Level": 6.0,
                "level": 30,
                "res_cost": 4000000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 258,
                "Damage per Hit": 309.6,
                "Hitpoints": "5,100",
                "Ability Level": 6.0,
                "level": 31,
                "res_cost": 4100000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 266,
                "Damage per Hit": 319.2,
                "Hitpoints": "5,170",
                "Ability Level": 6.0,
                "level": 32,
                "res_cost": 4200000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 274,
                "Damage per Hit": 328.8,
                "Hitpoints": "5,240",
                "Ability Level": 6.0,
                "level": 33,
                "res_cost": 4300000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 282,
                "Damage per Hit": 338.4,
                "Hitpoints": "5,310",
                "Ability Level": 6.0,
                "level": 34,
                "res_cost": 4400000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 290,
                "Damage per Hit": 348.0,
                "Hitpoints": "5,380",
                "Ability Level": 7.0,
                "level": 35,
                "res_cost": 4500000,
                "time_cost": 604800000,
                "hall_level": 10
            }
        ]
    },
    "royal_champion": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 374,
                "Damage per Hit": 448.8,
                "Hitpoints": "2,950",
                "Regen Time": "30m",
                "Ability Level": null,
                "level": 1,
                "res_cost": 60000,
                "time_cost": null,
                "hall_level": 13
            },
            {
                "Damage per Second": 383,
                "Damage per Hit": 459.6,
                "Hitpoints": "3,000",
                "Regen Time": "30m",
                "Ability Level": null,
                "level": 2,
                "res_cost": 73000,
                "time_cost": 28800000,
                "hall_level": 13
            },
            {
                "Damage per Second": 392,
                "Damage per Hit": 470.4,
                "Hitpoints": "3,050",
                "Regen Time": "30m",
                "Ability Level": null,
                "level": 3,
                "res_cost": 89000,
                "time_cost": 57600000,
                "hall_level": 13
            },
            {
                "Damage per Second": 401,
                "Damage per Hit": 481.2,
                "Hitpoints": "3,100",
                "Regen Time": "30m",
                "Ability Level": null,
                "level": 4,
                "res_cost": 105000,
                "time_cost": 79200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 410,
                "Damage per Hit": 492.0,
                "Hitpoints": "3,150",
                "Regen Time": "32m",
                "Ability Level": 1.0,
                "level": 5,
                "res_cost": 122000,
                "time_cost": 158400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 418,
                "Damage per Hit": 501.6,
                "Hitpoints": "3,200",
                "Regen Time": "32m",
                "Ability Level": 1.0,
                "level": 6,
                "res_cost": 140000,
                "time_cost": 237600000,
                "hall_level": 13
            },
            {
                "Damage per Second": 426,
                "Damage per Hit": 511.2,
                "Hitpoints": "3,250",
                "Regen Time": "32m",
                "Ability Level": 1.0,
                "level": 7,
                "res_cost": 158000,
                "time_cost": 280800000,
                "hall_level": 13
            },
            {
                "Damage per Second": 434,
                "Damage per Hit": 520.8,
                "Hitpoints": "3,300",
                "Regen Time": "32m",
                "Ability Level": 1.0,
                "level": 8,
                "res_cost": 170000,
                "time_cost": 324000000,
                "hall_level": 13
            },
            {
                "Damage per Second": 442,
                "Damage per Hit": 530.4,
                "Hitpoints": "3,350",
                "Regen Time": "32m",
                "Ability Level": 1.0,
                "level": 9,
                "res_cost": 182000,
                "time_cost": 367200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 450,
                "Damage per Hit": 540.0,
                "Hitpoints": "3,400",
                "Regen Time": "34m",
                "Ability Level": 2.0,
                "level": 10,
                "res_cost": 192000,
                "time_cost": 388800000,
                "hall_level": 13
            },
            {
                "Damage per Second": 458,
                "Damage per Hit": 549.6,
                "Hitpoints": "3,450",
                "Regen Time": "34m",
                "Ability Level": 2.0,
                "level": 11,
                "res_cost": 202000,
                "time_cost": 432000000,
                "hall_level": 13
            },
            {
                "Damage per Second": 466,
                "Damage per Hit": 559.2,
                "Hitpoints": "3,500",
                "Regen Time": "34m",
                "Ability Level": 2.0,
                "level": 12,
                "res_cost": 211000,
                "time_cost": 475200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 474,
                "Damage per Hit": 568.8,
                "Hitpoints": "3,550",
                "Regen Time": "34m",
                "Ability Level": 2.0,
                "level": 13,
                "res_cost": 216000,
                "time_cost": 518400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 482,
                "Damage per Hit": 578.4,
                "Hitpoints": "3,600",
                "Regen Time": "34m",
                "Ability Level": 2.0,
                "level": 14,
                "res_cost": 222000,
                "time_cost": 561600000,
                "hall_level": 13
            },
            {
                "Damage per Second": 490,
                "Damage per Hit": 588.0,
                "Hitpoints": "3,650",
                "Regen Time": "36m",
                "Ability Level": 3.0,
                "level": 15,
                "res_cost": 228000,
                "time_cost": 561600000,
                "hall_level": 13
            },
            {
                "Damage per Second": 498,
                "Damage per Hit": 597.6,
                "Hitpoints": "3,700",
                "Regen Time": "36m",
                "Ability Level": 3.0,
                "level": 16,
                "res_cost": 234000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 506,
                "Damage per Hit": 607.2,
                "Hitpoints": "3,750",
                "Regen Time": "36m",
                "Ability Level": 3.0,
                "level": 17,
                "res_cost": 239000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 514,
                "Damage per Hit": 616.8,
                "Hitpoints": "3,800",
                "Regen Time": "36m",
                "Ability Level": 3.0,
                "level": 18,
                "res_cost": 245000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 522,
                "Damage per Hit": 626.4,
                "Hitpoints": "3,850",
                "Regen Time": "36m",
                "Ability Level": 3.0,
                "level": 19,
                "res_cost": 251000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 530,
                "Damage per Hit": 636.0,
                "Hitpoints": "3,900",
                "Regen Time": "38m",
                "Ability Level": 4.0,
                "level": 20,
                "res_cost": 257000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 535,
                "Damage per Hit": 642.0,
                "Hitpoints": "3,940",
                "Regen Time": "38m",
                "Ability Level": 4.0,
                "level": 21,
                "res_cost": 262000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 540,
                "Damage per Hit": 648.0,
                "Hitpoints": "3,980",
                "Regen Time": "38m",
                "Ability Level": 4.0,
                "level": 22,
                "res_cost": 267000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 545,
                "Damage per Hit": 654.0,
                "Hitpoints": "4,020",
                "Regen Time": "38m",
                "Ability Level": 4.0,
                "level": 23,
                "res_cost": 272000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 550,
                "Damage per Hit": 660.0,
                "Hitpoints": "4,060",
                "Regen Time": "38m",
                "Ability Level": 4.0,
                "level": 24,
                "res_cost": 277000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 555,
                "Damage per Hit": 666.0,
                "Hitpoints": "4,100",
                "Regen Time": "40m",
                "Ability Level": 5.0,
                "level": 25,
                "res_cost": 282000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 560,
                "Damage per Hit": 672.0,
                "Hitpoints": "4,140",
                "Regen Time": "40m",
                "Ability Level": 5.0,
                "level": 26,
                "res_cost": 295000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 565,
                "Damage per Hit": 678.0,
                "Hitpoints": "4,180",
                "Regen Time": "40m",
                "Ability Level": 5.0,
                "level": 27,
                "res_cost": 300000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 570,
                "Damage per Hit": 684.0,
                "Hitpoints": "4,220",
                "Regen Time": "40m",
                "Ability Level": 5.0,
                "level": 28,
                "res_cost": 305000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 575,
                "Damage per Hit": 690.0,
                "Hitpoints": "4,260",
                "Regen Time": "40m",
                "Ability Level": 5.0,
                "level": 29,
                "res_cost": 310000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 580,
                "Damage per Hit": 696.0,
                "Hitpoints": "4,300",
                "Regen Time": "42m",
                "Ability Level": 6.0,
                "level": 30,
                "res_cost": 315000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 584,
                "Damage per Hit": 700.8,
                "Hitpoints": "4,330",
                "Regen Time": "42m",
                "Ability Level": 6.0,
                "level": 31,
                "res_cost": 325000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 588,
                "Damage per Hit": 705.6,
                "Hitpoints": "4,360",
                "Regen Time": "42m",
                "Ability Level": 6.0,
                "level": 32,
                "res_cost": 330000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 592,
                "Damage per Hit": 710.4,
                "Hitpoints": "4,390",
                "Regen Time": "42m",
                "Ability Level": 6.0,
                "level": 33,
                "res_cost": 335000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 596,
                "Damage per Hit": 715.2,
                "Hitpoints": "4,420",
                "Regen Time": "42m",
                "Ability Level": 6.0,
                "level": 34,
                "res_cost": 340000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 600,
                "Damage per Hit": 720.0,
                "Hitpoints": "4,450",
                "Regen Time": "44m",
                "Ability Level": 7.0,
                "level": 35,
                "res_cost": 345000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 604,
                "Damage per Hit": 724.8,
                "Hitpoints": "4,480",
                "Regen Time": "44m",
                "Ability Level": 7.0,
                "level": 36,
                "res_cost": 347000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 608,
                "Damage per Hit": 729.6,
                "Hitpoints": "4,510",
                "Regen Time": "44m",
                "Ability Level": 7.0,
                "level": 37,
                "res_cost": 349000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 612,
                "Damage per Hit": 734.4,
                "Hitpoints": "4,540",
                "Regen Time": "44m",
                "Ability Level": 7.0,
                "level": 38,
                "res_cost": 351000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 616,
                "Damage per Hit": 739.2,
                "Hitpoints": "4,570",
                "Regen Time": "44m",
                "Ability Level": 7.0,
                "level": 39,
                "res_cost": 353000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 620,
                "Damage per Hit": 744.0,
                "Hitpoints": "4,600",
                "Regen Time": "46m",
                "Ability Level": 8.0,
                "level": 40,
                "res_cost": 355000,
                "time_cost": 691200000,
                "hall_level": 15
            }
        ]
    },
    "barbarian_king": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 120,
                "Damage per Hit": 144.0,
                "Hitpoints": "1,700",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 1,
                "res_cost": 5000,
                "time_cost": null,
                "hall_level": 7
            },
            {
                "Damage per Second": 122,
                "Damage per Hit": 146.4,
                "Hitpoints": "1,742",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 2,
                "res_cost": 6000,
                "time_cost": 14400000,
                "hall_level": 7
            },
            {
                "Damage per Second": 124,
                "Damage per Hit": 148.8,
                "Hitpoints": "1,786",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 3,
                "res_cost": 7000,
                "time_cost": 21600000,
                "hall_level": 7
            },
            {
                "Damage per Second": 127,
                "Damage per Hit": 152.4,
                "Hitpoints": "1,830",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 4,
                "res_cost": 8000,
                "time_cost": 28800000,
                "hall_level": 7
            },
            {
                "Damage per Second": 129,
                "Damage per Hit": 154.8,
                "Hitpoints": "1,876",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 5,
                "res_cost": 10000,
                "time_cost": 36000000,
                "hall_level": 7
            },
            {
                "Damage per Second": 132,
                "Damage per Hit": 158.4,
                "Hitpoints": "1,923",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 6,
                "res_cost": 11000,
                "time_cost": 43200000,
                "hall_level": 8
            },
            {
                "Damage per Second": 135,
                "Damage per Hit": 162.0,
                "Hitpoints": "1,971",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 7,
                "res_cost": 12000,
                "time_cost": 50400000,
                "hall_level": 8
            },
            {
                "Damage per Second": 137,
                "Damage per Hit": 164.4,
                "Hitpoints": "2,020",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 8,
                "res_cost": 13000,
                "time_cost": 57600000,
                "hall_level": 8
            },
            {
                "Damage per Second": 140,
                "Damage per Hit": 168.0,
                "Hitpoints": "2,071",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 9,
                "res_cost": 14000,
                "time_cost": 64800000,
                "hall_level": 8
            },
            {
                "Damage per Second": 143,
                "Damage per Hit": 171.6,
                "Hitpoints": "2,123",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 10,
                "res_cost": 15000,
                "time_cost": 72000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 146,
                "Damage per Hit": 175.2,
                "Hitpoints": "2,176",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 11,
                "res_cost": 17000,
                "time_cost": 79200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 149,
                "Damage per Hit": 178.8,
                "Hitpoints": "2,230",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 12,
                "res_cost": 19000,
                "time_cost": 86400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 152,
                "Damage per Hit": 182.4,
                "Hitpoints": "2,286",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 13,
                "res_cost": 21000,
                "time_cost": 115200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 155,
                "Damage per Hit": 186.0,
                "Hitpoints": "2,343",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 14,
                "res_cost": 23000,
                "time_cost": 144000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 158,
                "Damage per Hit": 189.6,
                "Hitpoints": "2,402",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 15,
                "res_cost": 25000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 161,
                "Damage per Hit": 193.2,
                "Hitpoints": "2,462",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 16,
                "res_cost": 27000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 164,
                "Damage per Hit": 196.8,
                "Hitpoints": "2,523",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 17,
                "res_cost": 29000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 168,
                "Damage per Hit": 201.6,
                "Hitpoints": "2,586",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 18,
                "res_cost": 31000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 171,
                "Damage per Hit": 205.2,
                "Hitpoints": "2,651",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 19,
                "res_cost": 33000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 174,
                "Damage per Hit": 208.8,
                "Hitpoints": "2,717",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 20,
                "res_cost": 35000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 178,
                "Damage per Hit": 213.6,
                "Hitpoints": "2,785",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 21,
                "res_cost": 37000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 181,
                "Damage per Hit": 217.2,
                "Hitpoints": "2,855",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 22,
                "res_cost": 39000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 185,
                "Damage per Hit": 222.0,
                "Hitpoints": "2,926",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 23,
                "res_cost": 41000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 189,
                "Damage per Hit": 226.8,
                "Hitpoints": "2,999",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 24,
                "res_cost": 43000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 193,
                "Damage per Hit": 231.6,
                "Hitpoints": "3,074",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 25,
                "res_cost": 45000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 196,
                "Damage per Hit": 235.2,
                "Hitpoints": "3,151",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 26,
                "res_cost": 47000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 200,
                "Damage per Hit": 240.0,
                "Hitpoints": "3,230",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 27,
                "res_cost": 49000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 204,
                "Damage per Hit": 244.8,
                "Hitpoints": "3,311",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 28,
                "res_cost": 51000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 208,
                "Damage per Hit": 249.6,
                "Hitpoints": "3,394",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 29,
                "res_cost": 53000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 213,
                "Damage per Hit": 255.6,
                "Hitpoints": "3,478",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 30,
                "res_cost": 55000,
                "time_cost": 345600000,
                "hall_level": 9
            },
            {
                "Damage per Second": 217,
                "Damage per Hit": 260.4,
                "Hitpoints": "3,565",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 31,
                "res_cost": 57000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 221,
                "Damage per Hit": 265.2,
                "Hitpoints": "3,655",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 32,
                "res_cost": 59000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 226,
                "Damage per Hit": 271.2,
                "Hitpoints": "3,746",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 33,
                "res_cost": 60000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 230,
                "Damage per Hit": 276.0,
                "Hitpoints": "3,840",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 34,
                "res_cost": 62000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 235,
                "Damage per Hit": 282.0,
                "Hitpoints": "3,936",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 35,
                "res_cost": 64000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 239,
                "Damage per Hit": 286.8,
                "Hitpoints": "4,034",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 36,
                "res_cost": 66000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 244,
                "Damage per Hit": 292.8,
                "Hitpoints": "4,135",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 37,
                "res_cost": 68000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 249,
                "Damage per Hit": 298.8,
                "Hitpoints": "4,238",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 38,
                "res_cost": 70000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 254,
                "Damage per Hit": 304.8,
                "Hitpoints": "4,344",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 39,
                "res_cost": 73000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 259,
                "Damage per Hit": 310.8,
                "Hitpoints": "4,453",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 40,
                "res_cost": 76000,
                "time_cost": 475200000,
                "hall_level": 10
            },
            {
                "Damage per Second": 275,
                "Damage per Hit": 330.0,
                "Hitpoints": "4,564",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 41,
                "res_cost": 80000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 281,
                "Damage per Hit": 337.2,
                "Hitpoints": "4,678",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 42,
                "res_cost": 85000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 287,
                "Damage per Hit": 344.4,
                "Hitpoints": "4,795",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 43,
                "res_cost": 89000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 293,
                "Damage per Hit": 351.6,
                "Hitpoints": "4,915",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 44,
                "res_cost": 94000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 299,
                "Damage per Hit": 358.8,
                "Hitpoints": "5,038",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 45,
                "res_cost": 98000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 305,
                "Damage per Hit": 366.0,
                "Hitpoints": "5,164",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 46,
                "res_cost": 103000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 312,
                "Damage per Hit": 374.4,
                "Hitpoints": "5,293",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 47,
                "res_cost": 109000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 318,
                "Damage per Hit": 381.6,
                "Hitpoints": "5,425",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 48,
                "res_cost": 114000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 325,
                "Damage per Hit": 390.0,
                "Hitpoints": "5,561",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 49,
                "res_cost": 119000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 332,
                "Damage per Hit": 398.4,
                "Hitpoints": "5,700",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 50,
                "res_cost": 125000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 339,
                "Damage per Hit": 406.8,
                "Hitpoints": "5,843",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 51,
                "res_cost": 130000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 346,
                "Damage per Hit": 415.2,
                "Hitpoints": "5,990",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 52,
                "res_cost": 135000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 353,
                "Damage per Hit": 423.6,
                "Hitpoints": "6,140",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 53,
                "res_cost": 140000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 361,
                "Damage per Hit": 433.2,
                "Hitpoints": "6,294",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 54,
                "res_cost": 146000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 369,
                "Damage per Hit": 442.8,
                "Hitpoints": "6,452",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 55,
                "res_cost": 151000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 377,
                "Damage per Hit": 452.4,
                "Hitpoints": "6,614",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 56,
                "res_cost": 158000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 385,
                "Damage per Hit": 462.0,
                "Hitpoints": "6,780",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 57,
                "res_cost": 165000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 393,
                "Damage per Hit": 471.6,
                "Hitpoints": "6,950",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 58,
                "res_cost": 172000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 401,
                "Damage per Hit": 481.2,
                "Hitpoints": "7,124",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 59,
                "res_cost": 180000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 410,
                "Damage per Hit": 492.0,
                "Hitpoints": "7,303",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 60,
                "res_cost": 187000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 418,
                "Damage per Hit": 501.6,
                "Hitpoints": "7,486",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 61,
                "res_cost": 193000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 426,
                "Damage per Hit": 511.2,
                "Hitpoints": "7,673",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 62,
                "res_cost": 200000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 435,
                "Damage per Hit": 522.0,
                "Hitpoints": "7,865",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 63,
                "res_cost": 206000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 444,
                "Damage per Hit": 532.8,
                "Hitpoints": "8,062",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 64,
                "res_cost": 211000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 453,
                "Damage per Hit": 543.6,
                "Hitpoints": "8,264",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 65,
                "res_cost": 216000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 462,
                "Damage per Hit": 554.4,
                "Hitpoints": "8,470",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 66,
                "res_cost": 225000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 471,
                "Damage per Hit": 565.2,
                "Hitpoints": "8,680",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 67,
                "res_cost": 234000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 480,
                "Damage per Hit": 576.0,
                "Hitpoints": "8,890",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 68,
                "res_cost": 243000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 490,
                "Damage per Hit": 588.0,
                "Hitpoints": "9,100",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 69,
                "res_cost": 252000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 500,
                "Damage per Hit": 600.0,
                "Hitpoints": "9,300",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 70,
                "res_cost": 261000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 510,
                "Damage per Hit": 612.0,
                "Hitpoints": "9,500",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 71,
                "res_cost": 267000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 520,
                "Damage per Hit": 624.0,
                "Hitpoints": "9,700",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 72,
                "res_cost": 270000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 530,
                "Damage per Hit": 636.0,
                "Hitpoints": "9,900",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 73,
                "res_cost": 279000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 540,
                "Damage per Hit": 648.0,
                "Hitpoints": "10,100",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 74,
                "res_cost": 284000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 550,
                "Damage per Hit": 660.0,
                "Hitpoints": "10,300",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 75,
                "res_cost": 289000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 559,
                "Damage per Hit": 670.8,
                "Hitpoints": "10,490",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 76,
                "res_cost": 300000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 568,
                "Damage per Hit": 681.6,
                "Hitpoints": "10,680",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 77,
                "res_cost": 305000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 577,
                "Damage per Hit": 692.4,
                "Hitpoints": "10,870",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 78,
                "res_cost": 310000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 586,
                "Damage per Hit": 703.2,
                "Hitpoints": "11,060",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 79,
                "res_cost": 315000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 595,
                "Damage per Hit": 714.0,
                "Hitpoints": "11,250",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 80,
                "res_cost": 320000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 603,
                "Damage per Hit": 723.6,
                "Hitpoints": "11,400",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 81,
                "res_cost": 330000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 611,
                "Damage per Hit": 733.2,
                "Hitpoints": "11,550",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 82,
                "res_cost": 335000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 619,
                "Damage per Hit": 742.8,
                "Hitpoints": "11,700",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 83,
                "res_cost": 340000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 627,
                "Damage per Hit": 752.4,
                "Hitpoints": "11,850",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 84,
                "res_cost": 345000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 635,
                "Damage per Hit": 762.0,
                "Hitpoints": "12,000",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 85,
                "res_cost": 350000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 643,
                "Damage per Hit": 771.6,
                "Hitpoints": "12,150",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 86,
                "res_cost": 352000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 651,
                "Damage per Hit": 781.2,
                "Hitpoints": "12,300",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 87,
                "res_cost": 354000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 659,
                "Damage per Hit": 790.8,
                "Hitpoints": "12,450",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 88,
                "res_cost": 356000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 667,
                "Damage per Hit": 800.4,
                "Hitpoints": "12,600",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 89,
                "res_cost": 358000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 675,
                "Damage per Hit": 810.0,
                "Hitpoints": "12,750",
                "Regen Time": "46m",
                "Ability Level": 18.0,
                "level": 90,
                "res_cost": 360000,
                "time_cost": 691200000,
                "hall_level": 15
            }
        ]
    },
    "battle_copter": {
        "res_type": ResourceType.BuilderBaseElixir,
        "level_data": [
            {
                "Damage per Second": 112,
                "Damage per Hit": 72.8,
                "Hitpoints": "2,857",
                "Ability Level": 1,
                "level": 15,
                "res_cost": 2500000,
                "time_cost": null,
                "hall_level": 8
            },
            {
                "Damage per Second": 116,
                "Damage per Hit": 75.4,
                "Hitpoints": "2,885",
                "Ability Level": 1,
                "level": 16,
                "res_cost": 2600000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 119,
                "Damage per Hit": 77.35,
                "Hitpoints": "2,915",
                "Ability Level": 1,
                "level": 17,
                "res_cost": 2700000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 123,
                "Damage per Hit": 79.95,
                "Hitpoints": "2,943",
                "Ability Level": 1,
                "level": 18,
                "res_cost": 2800000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 126,
                "Damage per Hit": 81.9,
                "Hitpoints": "2,972",
                "Ability Level": 1,
                "level": 19,
                "res_cost": 2900000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 130,
                "Damage per Hit": 84.5,
                "Hitpoints": "3,003",
                "Ability Level": 2,
                "level": 20,
                "res_cost": 3000000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 134,
                "Damage per Hit": 87.1,
                "Hitpoints": "3,032",
                "Ability Level": 2,
                "level": 21,
                "res_cost": 3100000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 137,
                "Damage per Hit": 89.05,
                "Hitpoints": "3,062",
                "Ability Level": 2,
                "level": 22,
                "res_cost": 3200000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 141,
                "Damage per Hit": 91.65,
                "Hitpoints": "3,094",
                "Ability Level": 2,
                "level": 23,
                "res_cost": 3300000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 144,
                "Damage per Hit": 93.6,
                "Hitpoints": "3,124",
                "Ability Level": 2,
                "level": 24,
                "res_cost": 3400000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 148,
                "Damage per Hit": 96.2,
                "Hitpoints": "3,155",
                "Ability Level": 3,
                "level": 25,
                "res_cost": 3500000,
                "time_cost": 432000000,
                "hall_level": 8
            },
            {
                "Damage per Second": 153,
                "Damage per Hit": 99.45,
                "Hitpoints": "3,187",
                "Ability Level": 3,
                "level": 26,
                "res_cost": 3600000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 157,
                "Damage per Hit": 102.05,
                "Hitpoints": "3,220",
                "Ability Level": 3,
                "level": 27,
                "res_cost": 3700000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 162,
                "Damage per Hit": 105.3,
                "Hitpoints": "3,252",
                "Ability Level": 3,
                "level": 28,
                "res_cost": 3800000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 166,
                "Damage per Hit": 107.9,
                "Hitpoints": "3,285",
                "Ability Level": 3,
                "level": 29,
                "res_cost": 3900000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 171,
                "Damage per Hit": 111.15,
                "Hitpoints": "3,318",
                "Ability Level": 4,
                "level": 30,
                "res_cost": 4000000,
                "time_cost": 518400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 175,
                "Damage per Hit": 113.75,
                "Hitpoints": "3,348",
                "Ability Level": 4,
                "level": 31,
                "res_cost": 4100000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 180,
                "Damage per Hit": 117.0,
                "Hitpoints": "3,375",
                "Ability Level": 4,
                "level": 32,
                "res_cost": 4200000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 184,
                "Damage per Hit": 119.6,
                "Hitpoints": "3,402",
                "Ability Level": 4,
                "level": 33,
                "res_cost": 4300000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 189,
                "Damage per Hit": 122.85,
                "Hitpoints": "3,429",
                "Ability Level": 4,
                "level": 34,
                "res_cost": 4400000,
                "time_cost": 604800000,
                "hall_level": 10
            },
            {
                "Damage per Second": 193,
                "Damage per Hit": 125.45,
                "Hitpoints": "3,456",
                "Ability Level": 5,
                "level": 35,
                "res_cost": 4500000,
                "time_cost": 604800000,
                "hall_level": 10
            }
        ]
    },
    "archer_queen": {
        "res_type": ResourceType.DarkElixir,
        "level_data": [
            {
                "Damage per Second": 160,
                "Damage per Hit": 120.0,
                "Hitpoints": "725",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 1,
                "res_cost": 10000,
                "time_cost": null,
                "hall_level": 9
            },
            {
                "Damage per Second": 164,
                "Damage per Hit": 123.0,
                "Hitpoints": "740",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 2,
                "res_cost": 11000,
                "time_cost": 14400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 168,
                "Damage per Hit": 126.0,
                "Hitpoints": "755",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 3,
                "res_cost": 12000,
                "time_cost": 21600000,
                "hall_level": 9
            },
            {
                "Damage per Second": 172,
                "Damage per Hit": 129.0,
                "Hitpoints": "771",
                "Regen Time": "10m",
                "Ability Level": null,
                "level": 4,
                "res_cost": 13000,
                "time_cost": 28800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 176,
                "Damage per Hit": 132.0,
                "Hitpoints": "787",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 5,
                "res_cost": 15000,
                "time_cost": 36000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 181,
                "Damage per Hit": 135.75,
                "Hitpoints": "804",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 6,
                "res_cost": 16000,
                "time_cost": 43200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 185,
                "Damage per Hit": 138.75,
                "Hitpoints": "821",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 7,
                "res_cost": 17000,
                "time_cost": 50400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 190,
                "Damage per Hit": 142.5,
                "Hitpoints": "838",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 8,
                "res_cost": 18000,
                "time_cost": 57600000,
                "hall_level": 9
            },
            {
                "Damage per Second": 194,
                "Damage per Hit": 145.5,
                "Hitpoints": "856",
                "Regen Time": "12m",
                "Ability Level": 1.0,
                "level": 9,
                "res_cost": 19000,
                "time_cost": 64800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 199,
                "Damage per Hit": 149.25,
                "Hitpoints": "874",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 10,
                "res_cost": 20000,
                "time_cost": 72000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 204,
                "Damage per Hit": 153.0,
                "Hitpoints": "892",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 11,
                "res_cost": 22000,
                "time_cost": 79200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 209,
                "Damage per Hit": 156.75,
                "Hitpoints": "911",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 12,
                "res_cost": 24000,
                "time_cost": 86400000,
                "hall_level": 9
            },
            {
                "Damage per Second": 215,
                "Damage per Hit": 161.25,
                "Hitpoints": "930",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 13,
                "res_cost": 26000,
                "time_cost": 115200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 220,
                "Damage per Hit": 165.0,
                "Hitpoints": "949",
                "Regen Time": "14m",
                "Ability Level": 2.0,
                "level": 14,
                "res_cost": 28000,
                "time_cost": 144000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 226,
                "Damage per Hit": 169.5,
                "Hitpoints": "969",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 15,
                "res_cost": 30000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 231,
                "Damage per Hit": 173.25,
                "Hitpoints": "990",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 16,
                "res_cost": 32000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 237,
                "Damage per Hit": 177.75,
                "Hitpoints": "1,010",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 17,
                "res_cost": 34000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 243,
                "Damage per Hit": 182.25,
                "Hitpoints": "1,032",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 18,
                "res_cost": 36000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 249,
                "Damage per Hit": 186.75,
                "Hitpoints": "1,053",
                "Regen Time": "16m",
                "Ability Level": 3.0,
                "level": 19,
                "res_cost": 38000,
                "time_cost": 172800000,
                "hall_level": 9
            },
            {
                "Damage per Second": 255,
                "Damage per Hit": 191.25,
                "Hitpoints": "1,076",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 20,
                "res_cost": 40000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 262,
                "Damage per Hit": 196.5,
                "Hitpoints": "1,098",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 21,
                "res_cost": 42000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 268,
                "Damage per Hit": 201.0,
                "Hitpoints": "1,121",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 22,
                "res_cost": 44000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 275,
                "Damage per Hit": 206.25,
                "Hitpoints": "1,145",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 23,
                "res_cost": 46000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 282,
                "Damage per Hit": 211.5,
                "Hitpoints": "1,169",
                "Regen Time": "18m",
                "Ability Level": 4.0,
                "level": 24,
                "res_cost": 48000,
                "time_cost": 216000000,
                "hall_level": 9
            },
            {
                "Damage per Second": 289,
                "Damage per Hit": 216.75,
                "Hitpoints": "1,193",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 25,
                "res_cost": 50000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 296,
                "Damage per Hit": 222.0,
                "Hitpoints": "1,218",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 26,
                "res_cost": 52000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 304,
                "Damage per Hit": 228.0,
                "Hitpoints": "1,244",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 27,
                "res_cost": 54000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 311,
                "Damage per Hit": 233.25,
                "Hitpoints": "1,270",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 28,
                "res_cost": 56000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 319,
                "Damage per Hit": 239.25,
                "Hitpoints": "1,297",
                "Regen Time": "20m",
                "Ability Level": 5.0,
                "level": 29,
                "res_cost": 58000,
                "time_cost": 259200000,
                "hall_level": 9
            },
            {
                "Damage per Second": 327,
                "Damage per Hit": 245.25,
                "Hitpoints": "1,324",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 30,
                "res_cost": 60000,
                "time_cost": 345600000,
                "hall_level": 9
            },
            {
                "Damage per Second": 335,
                "Damage per Hit": 251.25,
                "Hitpoints": "1,352",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 31,
                "res_cost": 63000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 344,
                "Damage per Hit": 258.0,
                "Hitpoints": "1,380",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 32,
                "res_cost": 65000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 352,
                "Damage per Hit": 264.0,
                "Hitpoints": "1,409",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 33,
                "res_cost": 67000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 361,
                "Damage per Hit": 270.75,
                "Hitpoints": "1,439",
                "Regen Time": "22m",
                "Ability Level": 6.0,
                "level": 34,
                "res_cost": 69000,
                "time_cost": 345600000,
                "hall_level": 10
            },
            {
                "Damage per Second": 370,
                "Damage per Hit": 277.5,
                "Hitpoints": "1,469",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 35,
                "res_cost": 72000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 379,
                "Damage per Hit": 284.25,
                "Hitpoints": "1,500",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 36,
                "res_cost": 74000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 389,
                "Damage per Hit": 291.75,
                "Hitpoints": "1,532",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 37,
                "res_cost": 77000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 398,
                "Damage per Hit": 298.5,
                "Hitpoints": "1,564",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 38,
                "res_cost": 79000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 408,
                "Damage per Hit": 306.0,
                "Hitpoints": "1,597",
                "Regen Time": "24m",
                "Ability Level": 7.0,
                "level": 39,
                "res_cost": 82000,
                "time_cost": 410400000,
                "hall_level": 10
            },
            {
                "Damage per Second": 419,
                "Damage per Hit": 314.25,
                "Hitpoints": "1,630",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 40,
                "res_cost": 84000,
                "time_cost": 475200000,
                "hall_level": 10
            },
            {
                "Damage per Second": 429,
                "Damage per Hit": 321.75,
                "Hitpoints": "1,664",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 41,
                "res_cost": 89000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 440,
                "Damage per Hit": 330.0,
                "Hitpoints": "1,699",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 42,
                "res_cost": 93000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 451,
                "Damage per Hit": 338.25,
                "Hitpoints": "1,735",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 43,
                "res_cost": 97000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 462,
                "Damage per Hit": 346.5,
                "Hitpoints": "1,771",
                "Regen Time": "26m",
                "Ability Level": 8.0,
                "level": 44,
                "res_cost": 101000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 474,
                "Damage per Hit": 355.5,
                "Hitpoints": "1,809",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 45,
                "res_cost": 106000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 486,
                "Damage per Hit": 364.5,
                "Hitpoints": "1,847",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 46,
                "res_cost": 111000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 498,
                "Damage per Hit": 373.5,
                "Hitpoints": "1,885",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 47,
                "res_cost": 116000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 510,
                "Damage per Hit": 382.5,
                "Hitpoints": "1,925",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 48,
                "res_cost": 122000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 523,
                "Damage per Hit": 392.25,
                "Hitpoints": "1,965",
                "Regen Time": "28m",
                "Ability Level": 9.0,
                "level": 49,
                "res_cost": 127000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 536,
                "Damage per Hit": 402.0,
                "Hitpoints": "2,007",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 50,
                "res_cost": 132000,
                "time_cost": 496800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 547,
                "Damage per Hit": 410.25,
                "Hitpoints": "2,058",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 51,
                "res_cost": 138000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 558,
                "Damage per Hit": 418.5,
                "Hitpoints": "2,110",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 52,
                "res_cost": 143000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 570,
                "Damage per Hit": 427.5,
                "Hitpoints": "2,163",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 53,
                "res_cost": 148000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 582,
                "Damage per Hit": 436.5,
                "Hitpoints": "2,218",
                "Regen Time": "30m",
                "Ability Level": 10.0,
                "level": 54,
                "res_cost": 154000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 594,
                "Damage per Hit": 445.5,
                "Hitpoints": "2,274",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 55,
                "res_cost": 159000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 606,
                "Damage per Hit": 454.5,
                "Hitpoints": "2,331",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 56,
                "res_cost": 166000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 619,
                "Damage per Hit": 464.25,
                "Hitpoints": "2,390",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 57,
                "res_cost": 172000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 632,
                "Damage per Hit": 474.0,
                "Hitpoints": "2,450",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 58,
                "res_cost": 179000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 645,
                "Damage per Hit": 483.75,
                "Hitpoints": "2,512",
                "Regen Time": "32m",
                "Ability Level": 11.0,
                "level": 59,
                "res_cost": 186000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 658,
                "Damage per Hit": 493.5,
                "Hitpoints": "2,575",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 60,
                "res_cost": 192000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 671,
                "Damage per Hit": 503.25,
                "Hitpoints": "2,639",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 61,
                "res_cost": 198000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 684,
                "Damage per Hit": 513.0,
                "Hitpoints": "2,705",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 62,
                "res_cost": 203000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 698,
                "Damage per Hit": 523.5,
                "Hitpoints": "2,773",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 63,
                "res_cost": 208000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 712,
                "Damage per Hit": 534.0,
                "Hitpoints": "2,842",
                "Regen Time": "34m",
                "Ability Level": 12.0,
                "level": 64,
                "res_cost": 213000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 726,
                "Damage per Hit": 544.5,
                "Hitpoints": "2,913",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 65,
                "res_cost": 219000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 739,
                "Damage per Hit": 554.25,
                "Hitpoints": "2,980",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 66,
                "res_cost": 228000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 751,
                "Damage per Hit": 563.25,
                "Hitpoints": "3,040",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 67,
                "res_cost": 237000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 762,
                "Damage per Hit": 571.5,
                "Hitpoints": "3,095",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 68,
                "res_cost": 246000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 772,
                "Damage per Hit": 579.0,
                "Hitpoints": "3,145",
                "Regen Time": "36m",
                "Ability Level": 13.0,
                "level": 69,
                "res_cost": 255000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 781,
                "Damage per Hit": 585.75,
                "Hitpoints": "3,190",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 70,
                "res_cost": 266000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 789,
                "Damage per Hit": 591.75,
                "Hitpoints": "3,230",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 71,
                "res_cost": 269000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 796,
                "Damage per Hit": 597.0,
                "Hitpoints": "3,270",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 72,
                "res_cost": 278000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 802,
                "Damage per Hit": 601.5,
                "Hitpoints": "3,310",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 73,
                "res_cost": 283000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 808,
                "Damage per Hit": 606.0,
                "Hitpoints": "3,350",
                "Regen Time": "38m",
                "Ability Level": 14.0,
                "level": 74,
                "res_cost": 288000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 814,
                "Damage per Hit": 610.5,
                "Hitpoints": "3,390",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 75,
                "res_cost": 297000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 820,
                "Damage per Hit": 615.0,
                "Hitpoints": "3,425",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 76,
                "res_cost": 302000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 825,
                "Damage per Hit": 618.75,
                "Hitpoints": "3,460",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 77,
                "res_cost": 308000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 830,
                "Damage per Hit": 622.5,
                "Hitpoints": "3,495",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 78,
                "res_cost": 314000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 835,
                "Damage per Hit": 626.25,
                "Hitpoints": "3,530",
                "Regen Time": "40m",
                "Ability Level": 15.0,
                "level": 79,
                "res_cost": 319000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 840,
                "Damage per Hit": 630.0,
                "Hitpoints": "3,565",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 80,
                "res_cost": 325000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 844,
                "Damage per Hit": 633.0,
                "Hitpoints": "3,600",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 81,
                "res_cost": 334000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 848,
                "Damage per Hit": 636.0,
                "Hitpoints": "3,630",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 82,
                "res_cost": 338000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 852,
                "Damage per Hit": 639.0,
                "Hitpoints": "3,660",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 83,
                "res_cost": 342000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 856,
                "Damage per Hit": 642.0,
                "Hitpoints": "3,690",
                "Regen Time": "42m",
                "Ability Level": 16.0,
                "level": 84,
                "res_cost": 346000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 860,
                "Damage per Hit": 645.0,
                "Hitpoints": "3,720",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 85,
                "res_cost": 350000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 864,
                "Damage per Hit": 648.0,
                "Hitpoints": "3,750",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 86,
                "res_cost": 352000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 868,
                "Damage per Hit": 651.0,
                "Hitpoints": "3,780",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 87,
                "res_cost": 354000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 872,
                "Damage per Hit": 654.0,
                "Hitpoints": "3,810",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 88,
                "res_cost": 356000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 876,
                "Damage per Hit": 657.0,
                "Hitpoints": "3,840",
                "Regen Time": "44m",
                "Ability Level": 17.0,
                "level": 89,
                "res_cost": 358000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 880,
                "Damage per Hit": 660.0,
                "Hitpoints": "3,870",
                "Regen Time": "46m",
                "Ability Level": 18.0,
                "level": 90,
                "res_cost": 360000,
                "time_cost": 691200000,
                "hall_level": 15
            }
        ]
    },
    "grand_warden": {
        "res_type": ResourceType.Elixir,
        "level_data": [
            {
                "Damage per Second": 50,
                "Damage per Hit": 90.0,
                "Hitpoints": "1,000",
                "Regen Time": "20m",
                "Ability Levels Life Aura": 1,
                "Ability Levels Eternal Tome": null,
                "level": 1,
                "res_cost": 1000000,
                "time_cost": null,
                "hall_level": 11
            },
            {
                "Damage per Second": 52,
                "Damage per Hit": 93.6,
                "Hitpoints": "1,021",
                "Regen Time": "20m",
                "Ability Levels Life Aura": 2,
                "Ability Levels Eternal Tome": null,
                "level": 2,
                "res_cost": 1100000,
                "time_cost": 7200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 54,
                "Damage per Hit": 97.2,
                "Hitpoints": "1,042",
                "Regen Time": "20m",
                "Ability Levels Life Aura": 3,
                "Ability Levels Eternal Tome": null,
                "level": 3,
                "res_cost": 1400000,
                "time_cost": 14400000,
                "hall_level": 11
            },
            {
                "Damage per Second": 56,
                "Damage per Hit": 100.8,
                "Hitpoints": "1,064",
                "Regen Time": "20m",
                "Ability Levels Life Aura": 4,
                "Ability Levels Eternal Tome": null,
                "level": 4,
                "res_cost": 1600000,
                "time_cost": 28800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 58,
                "Damage per Hit": 104.4,
                "Hitpoints": "1,086",
                "Regen Time": "22m",
                "Ability Levels Life Aura": 5,
                "Ability Levels Eternal Tome": 1.0,
                "level": 5,
                "res_cost": 1800000,
                "time_cost": 43200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 60,
                "Damage per Hit": 108.0,
                "Hitpoints": "1,108",
                "Regen Time": "22m",
                "Ability Levels Life Aura": 6,
                "Ability Levels Eternal Tome": 1.0,
                "level": 6,
                "res_cost": 2000000,
                "time_cost": 57600000,
                "hall_level": 11
            },
            {
                "Damage per Second": 63,
                "Damage per Hit": 113.4,
                "Hitpoints": "1,131",
                "Regen Time": "22m",
                "Ability Levels Life Aura": 7,
                "Ability Levels Eternal Tome": 1.0,
                "level": 7,
                "res_cost": 2200000,
                "time_cost": 79200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 66,
                "Damage per Hit": 118.8,
                "Hitpoints": "1,155",
                "Regen Time": "22m",
                "Ability Levels Life Aura": 8,
                "Ability Levels Eternal Tome": 1.0,
                "level": 8,
                "res_cost": 2500000,
                "time_cost": 100800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 69,
                "Damage per Hit": 124.2,
                "Hitpoints": "1,180",
                "Regen Time": "22m",
                "Ability Levels Life Aura": 9,
                "Ability Levels Eternal Tome": 1.0,
                "level": 9,
                "res_cost": 2700000,
                "time_cost": 115200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 72,
                "Damage per Hit": 129.6,
                "Hitpoints": "1,206",
                "Regen Time": "24m",
                "Ability Levels Life Aura": 10,
                "Ability Levels Eternal Tome": 2.0,
                "level": 10,
                "res_cost": 3100000,
                "time_cost": 158400000,
                "hall_level": 11
            },
            {
                "Damage per Second": 75,
                "Damage per Hit": 135.0,
                "Hitpoints": "1,233",
                "Regen Time": "24m",
                "Ability Levels Life Aura": 11,
                "Ability Levels Eternal Tome": 2.0,
                "level": 11,
                "res_cost": 3600000,
                "time_cost": 194400000,
                "hall_level": 11
            },
            {
                "Damage per Second": 78,
                "Damage per Hit": 140.4,
                "Hitpoints": "1,261",
                "Regen Time": "24m",
                "Ability Levels Life Aura": 12,
                "Ability Levels Eternal Tome": 2.0,
                "level": 12,
                "res_cost": 4000000,
                "time_cost": 237600000,
                "hall_level": 11
            },
            {
                "Damage per Second": 82,
                "Damage per Hit": 147.6,
                "Hitpoints": "1,290",
                "Regen Time": "24m",
                "Ability Levels Life Aura": 13,
                "Ability Levels Eternal Tome": 2.0,
                "level": 13,
                "res_cost": 4400000,
                "time_cost": 324000000,
                "hall_level": 11
            },
            {
                "Damage per Second": 86,
                "Damage per Hit": 154.8,
                "Hitpoints": "1,320",
                "Regen Time": "24m",
                "Ability Levels Life Aura": 14,
                "Ability Levels Eternal Tome": 2.0,
                "level": 14,
                "res_cost": 4900000,
                "time_cost": 388800000,
                "hall_level": 11
            },
            {
                "Damage per Second": 90,
                "Damage per Hit": 162.0,
                "Hitpoints": "1,350",
                "Regen Time": "26m",
                "Ability Levels Life Aura": 15,
                "Ability Levels Eternal Tome": 3.0,
                "level": 15,
                "res_cost": 5300000,
                "time_cost": 475200000,
                "hall_level": 11
            },
            {
                "Damage per Second": 94,
                "Damage per Hit": 169.2,
                "Hitpoints": "1,380",
                "Regen Time": "26m",
                "Ability Levels Life Aura": 16,
                "Ability Levels Eternal Tome": 3.0,
                "level": 16,
                "res_cost": 5700000,
                "time_cost": 540000000,
                "hall_level": 11
            },
            {
                "Damage per Second": 98,
                "Damage per Hit": 176.4,
                "Hitpoints": "1,410",
                "Regen Time": "26m",
                "Ability Levels Life Aura": 17,
                "Ability Levels Eternal Tome": 3.0,
                "level": 17,
                "res_cost": 6200000,
                "time_cost": 540000000,
                "hall_level": 11
            },
            {
                "Damage per Second": 102,
                "Damage per Hit": 183.6,
                "Hitpoints": "1,440",
                "Regen Time": "26m",
                "Ability Levels Life Aura": 18,
                "Ability Levels Eternal Tome": 3.0,
                "level": 18,
                "res_cost": 6600000,
                "time_cost": 540000000,
                "hall_level": 11
            },
            {
                "Damage per Second": 106,
                "Damage per Hit": 190.8,
                "Hitpoints": "1,470",
                "Regen Time": "26m",
                "Ability Levels Life Aura": 19,
                "Ability Levels Eternal Tome": 3.0,
                "level": 19,
                "res_cost": 7100000,
                "time_cost": 540000000,
                "hall_level": 11
            },
            {
                "Damage per Second": 110,
                "Damage per Hit": 198.0,
                "Hitpoints": "1,500",
                "Regen Time": "28m",
                "Ability Levels Life Aura": 20,
                "Ability Levels Eternal Tome": 4.0,
                "level": 20,
                "res_cost": 7900000,
                "time_cost": 540000000,
                "hall_level": 11
            },
            {
                "Damage per Second": 115,
                "Damage per Hit": 207.0,
                "Hitpoints": "1,530",
                "Regen Time": "28m",
                "Ability Levels Life Aura": 21,
                "Ability Levels Eternal Tome": 4.0,
                "level": 21,
                "res_cost": 8800000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 120,
                "Damage per Hit": 216.0,
                "Hitpoints": "1,561",
                "Regen Time": "28m",
                "Ability Levels Life Aura": 22,
                "Ability Levels Eternal Tome": 4.0,
                "level": 22,
                "res_cost": 8900000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 125,
                "Damage per Hit": 225.0,
                "Hitpoints": "1,593",
                "Regen Time": "28m",
                "Ability Levels Life Aura": 23,
                "Ability Levels Eternal Tome": 4.0,
                "level": 23,
                "res_cost": 9000000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 130,
                "Damage per Hit": 234.0,
                "Hitpoints": "1,625",
                "Regen Time": "28m",
                "Ability Levels Life Aura": 24,
                "Ability Levels Eternal Tome": 4.0,
                "level": 24,
                "res_cost": 9100000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 136,
                "Damage per Hit": 244.8,
                "Hitpoints": "1,658",
                "Regen Time": "30m",
                "Ability Levels Life Aura": 25,
                "Ability Levels Eternal Tome": 5.0,
                "level": 25,
                "res_cost": 9200000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 142,
                "Damage per Hit": 255.6,
                "Hitpoints": "1,692",
                "Regen Time": "30m",
                "Ability Levels Life Aura": 26,
                "Ability Levels Eternal Tome": 5.0,
                "level": 26,
                "res_cost": 9300000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 148,
                "Damage per Hit": 266.4,
                "Hitpoints": "1,726",
                "Regen Time": "30m",
                "Ability Levels Life Aura": 27,
                "Ability Levels Eternal Tome": 5.0,
                "level": 27,
                "res_cost": 9400000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 154,
                "Damage per Hit": 277.2,
                "Hitpoints": "1,761",
                "Regen Time": "30m",
                "Ability Levels Life Aura": 28,
                "Ability Levels Eternal Tome": 5.0,
                "level": 28,
                "res_cost": 9500000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 161,
                "Damage per Hit": 289.8,
                "Hitpoints": "1,797",
                "Regen Time": "30m",
                "Ability Levels Life Aura": 29,
                "Ability Levels Eternal Tome": 5.0,
                "level": 29,
                "res_cost": 9600000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 168,
                "Damage per Hit": 302.4,
                "Hitpoints": "1,833",
                "Regen Time": "32m",
                "Ability Levels Life Aura": 30,
                "Ability Levels Eternal Tome": 6.0,
                "level": 30,
                "res_cost": 9700000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 175,
                "Damage per Hit": 315.0,
                "Hitpoints": "1,870",
                "Regen Time": "32m",
                "Ability Levels Life Aura": 31,
                "Ability Levels Eternal Tome": 6.0,
                "level": 31,
                "res_cost": 9800000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 182,
                "Damage per Hit": 327.6,
                "Hitpoints": "1,908",
                "Regen Time": "32m",
                "Ability Levels Life Aura": 32,
                "Ability Levels Eternal Tome": 6.0,
                "level": 32,
                "res_cost": 9900000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 190,
                "Damage per Hit": 342.0,
                "Hitpoints": "1,947",
                "Regen Time": "32m",
                "Ability Levels Life Aura": 33,
                "Ability Levels Eternal Tome": 6.0,
                "level": 33,
                "res_cost": 10000000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 198,
                "Damage per Hit": 356.4,
                "Hitpoints": "1,986",
                "Regen Time": "32m",
                "Ability Levels Life Aura": 34,
                "Ability Levels Eternal Tome": 6.0,
                "level": 34,
                "res_cost": 10100000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 206,
                "Damage per Hit": 370.8,
                "Hitpoints": "2,026",
                "Regen Time": "34m",
                "Ability Levels Life Aura": 35,
                "Ability Levels Eternal Tome": 7.0,
                "level": 35,
                "res_cost": 10200000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 215,
                "Damage per Hit": 387.0,
                "Hitpoints": "2,067",
                "Regen Time": "34m",
                "Ability Levels Life Aura": 36,
                "Ability Levels Eternal Tome": 7.0,
                "level": 36,
                "res_cost": 10300000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 224,
                "Damage per Hit": 403.2,
                "Hitpoints": "2,109",
                "Regen Time": "34m",
                "Ability Levels Life Aura": 37,
                "Ability Levels Eternal Tome": 7.0,
                "level": 37,
                "res_cost": 10400000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 233,
                "Damage per Hit": 419.4,
                "Hitpoints": "2,152",
                "Regen Time": "34m",
                "Ability Levels Life Aura": 38,
                "Ability Levels Eternal Tome": 7.0,
                "level": 38,
                "res_cost": 10500000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 243,
                "Damage per Hit": 437.4,
                "Hitpoints": "2,196",
                "Regen Time": "34m",
                "Ability Levels Life Aura": 39,
                "Ability Levels Eternal Tome": 7.0,
                "level": 39,
                "res_cost": 10600000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 253,
                "Damage per Hit": 455.4,
                "Hitpoints": "2,240",
                "Regen Time": "36m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 8.0,
                "level": 40,
                "res_cost": 10700000,
                "time_cost": 540000000,
                "hall_level": 12
            },
            {
                "Damage per Second": 260,
                "Damage per Hit": 468.0,
                "Hitpoints": "2,260",
                "Regen Time": "36m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 8.0,
                "level": 41,
                "res_cost": 10800000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 266,
                "Damage per Hit": 478.8,
                "Hitpoints": "2,280",
                "Regen Time": "36m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 8.0,
                "level": 42,
                "res_cost": 11200000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 271,
                "Damage per Hit": 487.8,
                "Hitpoints": "2,300",
                "Regen Time": "36m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 8.0,
                "level": 43,
                "res_cost": 11600000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 275,
                "Damage per Hit": 495.0,
                "Hitpoints": "2,320",
                "Regen Time": "36m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 8.0,
                "level": 44,
                "res_cost": 12000000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 279,
                "Damage per Hit": 502.2,
                "Hitpoints": "2,340",
                "Regen Time": "38m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 9.0,
                "level": 45,
                "res_cost": 12400000,
                "time_cost": 583200000,
                "hall_level": 13
            },
            {
                "Damage per Second": 283,
                "Damage per Hit": 509.4,
                "Hitpoints": "2,360",
                "Regen Time": "38m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 9.0,
                "level": 46,
                "res_cost": 12800000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 287,
                "Damage per Hit": 516.6,
                "Hitpoints": "2,380",
                "Regen Time": "38m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 9.0,
                "level": 47,
                "res_cost": 13200000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 291,
                "Damage per Hit": 523.8,
                "Hitpoints": "2,400",
                "Regen Time": "38m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 9.0,
                "level": 48,
                "res_cost": 13600000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 295,
                "Damage per Hit": 531.0,
                "Hitpoints": "2,420",
                "Regen Time": "38m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 9.0,
                "level": 49,
                "res_cost": 14300000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 299,
                "Damage per Hit": 538.2,
                "Hitpoints": "2,440",
                "Regen Time": "40m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 10.0,
                "level": 50,
                "res_cost": 15500000,
                "time_cost": 626400000,
                "hall_level": 13
            },
            {
                "Damage per Second": 303,
                "Damage per Hit": 545.4,
                "Hitpoints": "2,460",
                "Regen Time": "40m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 10.0,
                "level": 51,
                "res_cost": 16600000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 307,
                "Damage per Hit": 552.6,
                "Hitpoints": "2,480",
                "Regen Time": "40m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 10.0,
                "level": 52,
                "res_cost": 17100000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 311,
                "Damage per Hit": 559.8,
                "Hitpoints": "2,500",
                "Regen Time": "40m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 10.0,
                "level": 53,
                "res_cost": 17600000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 315,
                "Damage per Hit": 567.0,
                "Hitpoints": "2,520",
                "Regen Time": "40m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 10.0,
                "level": 54,
                "res_cost": 18100000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 319,
                "Damage per Hit": 574.2,
                "Hitpoints": "2,540",
                "Regen Time": "42m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 11.0,
                "level": 55,
                "res_cost": 18600000,
                "time_cost": 691200000,
                "hall_level": 14
            },
            {
                "Damage per Second": 322,
                "Damage per Hit": 579.6,
                "Hitpoints": "2,560",
                "Regen Time": "42m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 11.0,
                "level": 56,
                "res_cost": 19200000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 325,
                "Damage per Hit": 585.0,
                "Hitpoints": "2,580",
                "Regen Time": "42m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 11.0,
                "level": 57,
                "res_cost": 19400000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 328,
                "Damage per Hit": 590.4,
                "Hitpoints": "2,600",
                "Regen Time": "42m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 11.0,
                "level": 58,
                "res_cost": 19600000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 331,
                "Damage per Hit": 595.8,
                "Hitpoints": "2,620",
                "Regen Time": "42m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 11.0,
                "level": 59,
                "res_cost": 19800000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 334,
                "Damage per Hit": 601.2,
                "Hitpoints": "2,640",
                "Regen Time": "44m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 12.0,
                "level": 60,
                "res_cost": 20000000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 337,
                "Damage per Hit": 606.6,
                "Hitpoints": "2,660",
                "Regen Time": "44m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 12.0,
                "level": 61,
                "res_cost": 20200000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 340,
                "Damage per Hit": 612.0,
                "Hitpoints": "2,680",
                "Regen Time": "44m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 12.0,
                "level": 62,
                "res_cost": 20400000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 343,
                "Damage per Hit": 617.4,
                "Hitpoints": "2,700",
                "Regen Time": "44m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 12.0,
                "level": 63,
                "res_cost": 20600000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 346,
                "Damage per Hit": 622.8,
                "Hitpoints": "2,720",
                "Regen Time": "44m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 12.0,
                "level": 64,
                "res_cost": 20800000,
                "time_cost": 691200000,
                "hall_level": 15
            },
            {
                "Damage per Second": 349,
                "Damage per Hit": 628.2,
                "Hitpoints": "2,740",
                "Regen Time": "46m",
                "Ability Levels Life Aura": 40,
                "Ability Levels Eternal Tome": 13.0,
                "level": 65,
                "res_cost": 21000000,
                "time_cost": 691200000,
                "hall_level": 15
            }
        ]
    }
};

export default {
    troops: troops_info,
    spells: spells_info,
    heroes: heroes_info,
}