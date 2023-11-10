import { ResourceType, time_cost_ms } from "./types";

const {
    min_ms,
    hour_ms,
    day_ms,
} = time_cost_ms;

export const military_buildings_upgrade_cost = {
    research: {
        max_level: 13,
        res_type: ResourceType.HolyWater,
        // townhall_requirements: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        costs: [
            {
                townhall_required: 3,
                time_cost: min_ms * 1,
                res_cost: 5_000
            },
            {
                townhall_required: 4,
                time_cost: hour_ms * 5,
                res_cost: 25_000
            },
            {
                townhall_required: 5,
                time_cost: hour_ms * 2,
                res_cost: 50_000
            },
            // not done below
            {
                townhall_required: 6,
                time_cost: min_ms * 30,
                res_cost: 60_000
            },
            {
                townhall_required: 7,
                time_cost: min_ms * 60,
                res_cost: 120_000
            },
            {
                townhall_required: 8,
                time_cost: min_ms * 120,
                res_cost: 250_000
            },
            {
                townhall_required: 9,
                time_cost: min_ms * 240,
                res_cost: 750_000
            },
            {
                townhall_required: 10,
                time_cost: hour_ms * 1,
                res_cost: 1_500_000
            },
            {
                townhall_required: 11,
                time_cost: hour_ms * 2,
                res_cost: 3_000_000
            },
            {
                townhall_required: 12,
                time_cost: hour_ms * 3,
                res_cost: 6_000_000
            },
            {
                townhall_required: 13,
                time_cost: hour_ms * 4,
                res_cost: 12_000_000
            },
            {
                townhall_required: 14,
                time_cost: hour_ms * 5,
                res_cost: 20_000_000
            },
            {
                townhall_required: 15,
                time_cost: hour_ms * 6,
                res_cost: 30_000_000
            }
        ]
    }
}