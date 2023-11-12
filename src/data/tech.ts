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
        res_type: ResourceType.Elixir,
        upgrade_cost: [
            {
                level: 2,
                time_cost: hour_ms * 2,
                res_cost: 20_000,
                lab_required: 1,
            },
            {
                level: 3,
                time_cost: hour_ms * 5,
                res_cost: 60_000,
                lab_required: 3,
            },
            {
                level: 4,
                time_cost: hour_ms * 12,
                res_cost: 200_000,
                lab_required: 5,
            },
            {
                level: 5,
                time_cost: day_ms * 1,
                res_cost: 650_000,
                lab_required: 6,
            },
            {
                level: 6,
                time_cost: day_ms * 1 + hour_ms * 12,
                res_cost: 1_400_000,
                lab_required: 7,
            },
            {
                level: 7,
                time_cost: day_ms * 2 + hour_ms * 12,
                res_cost: 2_100_000,
                lab_required: 8,
            },
            {
                level: 8,
                time_cost: day_ms * 3,
                res_cost: 2_800_000,
                lab_required: 9,
            },
            {
                level: 9,
                time_cost: day_ms * 7,
                res_cost: 5_600_000,
                lab_required: 10,
            },
            {
                level: 10,
                time_cost: day_ms * 13,
                res_cost: 14_000_000,
                lab_required: 12,
            },
            {
                level: 11,
                time_cost: day_ms * 14,
                res_cost: 16_000_000,
                lab_required: 13,
            },
        ]
    },
    archer: {
        max_level: 11,
        res_type: ResourceType.Elixir,
        upgrade_cost: [
            {
                level: 2,
                time_cost_ms: hour_ms * 3,
                res_cost: 30_000,
                lab_required: 1,
            },
            {
                level: 3,
                time_cost_ms: hour_ms * 6,
                res_cost: 80_000,
                lab_required: 3,
            },
            {
                level: 4,
                time_cost_ms: hour_ms * 12,
                res_cost: 300_000,
                lab_required: 5,
            },
            {
                level: 5,
                time_cost_ms: day_ms * 1,
                res_cost: 800_000,
                lab_required: 6,
            },
            {
                level: 6,
                time_cost_ms: day_ms * 1 + hour_ms * 12,
                res_cost: 2_000_000,
                lab_required: 7,
            },
            {
                level: 7,
                time_cost_ms: day_ms * 2 + hour_ms * 12,
                res_cost: 2_500_000,
                lab_required: 8,
            },
            {
                level: 8,
                time_cost_ms: day_ms * 3 + hour_ms * 12,
                res_cost: 3_200_000,
                lab_required: 9,
            },
            {
                level: 9,
                time_cost_ms: day_ms * 6,
                res_cost: 5_600_000,
                lab_required: 10,
            },
            {
                level: 10,
                time_cost_ms: day_ms * 13,
                res_cost: 14_500_000,
                lab_required: 12,
            },
            {
                level: 11,
                time_cost_ms: day_ms * 14,
                res_cost: 16_000_000,
                lab_required: 13,
            },
        ]
    },
    giant: {
        max_level: 11,
        res_type: ResourceType.Elixir,
        upgrade_cost: [
            {
                level: 2,
                time_cost_ms: hour_ms * 4,
                res_cost: 40_000,
                lab_required: 2,
            },
            
        ]
    }
}