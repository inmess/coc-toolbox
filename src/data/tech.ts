import { 
    ResourceType, 
    // time_cost_ms 
} from "./types";

// const {
//     // min_ms,
//     hour_ms,
//     day_ms,
// } = time_cost_ms;

export const troops_upgrade_usage = {
    "barbarian": {
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "builder-base",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "dark-elixir",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
        "res_type": "builder-base",
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
}