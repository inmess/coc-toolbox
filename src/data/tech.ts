import { ResourceType } from "./types"

/**
 * @description Troops upgrade data based on level 1 - 15 of townhall
 */
export const town_troop_base = {
    barbarian: [
        {
            townhall: 1,
            max_level: 1,
        },
        {
            townhall: 2,
            max_level: 2,
        },
        {
            townhall: 3,
            max_level: 3,
        },
        {
            townhall: 4,
            max_level: 4,
        },
        {
            townhall: 5,
            max_level: 5,
        },
        {
            townhall: 6,
            max_level: 6,
        },
        {
            townhall: 7,
            max_level: 7,
        },
        {
            townhall: 8,
            max_level: 8,
        },
        {
            townhall: 9,
            max_level: 9,
        },
        {
            townhall: 10,
            max_level: 10,
        },
        {
            townhall: 11,
            max_level: 11,
        },
        {
            townhall: 12,
            max_level: 12,
        },
        {
            townhall: 13,
            max_level: 13,
        },
        {
            townhall: 14,
            max_level: 14,
        },
        {
            townhall: 15,
            max_level: 15,
        },
    ]
}

const MINUTE_MS = 1000 * 60;
const HOUR_MS = MINUTE_MS * 60;
const DAY_MS = HOUR_MS * 24;

export const troops_upgrade_usage = {
    barbarian: {
        max_level: 11,
        res_type: ResourceType.HolyWater,
        upgrade_cost: [
            {
                level: 2,
                time_cost: HOUR_MS * 2,
                res_cost: 20_000,
                res_building_min: 1,
            },
            {
                level: 3,
                time_cost: HOUR_MS * 5,
                res_cost: 60_000,
                res_building_min: 3,
            },
            {
                level: 4,
                time_cost: HOUR_MS * 12,
                res_cost: 200_000,
                res_building_min: 5,
            },
            {
                level: 5,
                time_cost: DAY_MS * 1,
                res_cost: 650_000,
                res_building_min: 6,
            },
            {
                level: 6,
                time_cost: DAY_MS * 1 + HOUR_MS * 12,
                res_cost: 1_400_000,
                res_building_min: 7,
            },
            {
                level: 7,
                time_cost: DAY_MS * 2 + HOUR_MS * 12,
                res_cost: 2_100_000,
                res_building_min: 8,
            },
            {
                level: 8,
                time_cost: DAY_MS * 3,
                res_cost: 2_800_000,
                res_building_min: 9,
                townhall_min: 3,
            },
            {
                level: 9,
                time_cost: DAY_MS * 7,
                res_cost: 5_600_000,
                res_building_min: 10,
            },
            {
                level: 10,
                time_cost: DAY_MS * 13,
                res_cost: 14_000_000,
                res_building_min: 12,
            },
            {
                level: 11,
                time_cost: DAY_MS * 14,
                res_cost: 16_000_000,
                res_building_min: 13,
            },
        ]
    },
    archer: {
        max_level: 11,
        res_type: ResourceType.HolyWater,
    }
}