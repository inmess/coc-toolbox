import { 
    ResourceType, 
    time_cost_ms 
} from "./types";

const {
    // min_ms,
    hour_ms,
    day_ms,
} = time_cost_ms;

export const troops_upgrade_usage = {
    barbarian: {
        max_level: 11,
        res_type: ResourceType.HolyWater,
        upgrade_cost: [
            {
                level: 2,
                time_cost: hour_ms * 2,
                res_cost: 20_000,
                res_building_min: 1,
            },
            {
                level: 3,
                time_cost: hour_ms * 5,
                res_cost: 60_000,
                res_building_min: 3,
            },
            {
                level: 4,
                time_cost: hour_ms * 12,
                res_cost: 200_000,
                res_building_min: 5,
            },
            {
                level: 5,
                time_cost: day_ms * 1,
                res_cost: 650_000,
                res_building_min: 6,
            },
            {
                level: 6,
                time_cost: day_ms * 1 + hour_ms * 12,
                res_cost: 1_400_000,
                res_building_min: 7,
            },
            {
                level: 7,
                time_cost: day_ms * 2 + hour_ms * 12,
                res_cost: 2_100_000,
                res_building_min: 8,
            },
            {
                level: 8,
                time_cost: day_ms * 3,
                res_cost: 2_800_000,
                res_building_min: 9,
            },
            {
                level: 9,
                time_cost: day_ms * 7,
                res_cost: 5_600_000,
                res_building_min: 10,
            },
            {
                level: 10,
                time_cost: day_ms * 13,
                res_cost: 14_000_000,
                res_building_min: 12,
            },
            {
                level: 11,
                time_cost: day_ms * 14,
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