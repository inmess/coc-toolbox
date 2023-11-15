import { 
    PlayerInfo, 
    ResourceType, 
    time_cost_ms 
} from "@/data/types";
import techdata from "@/data/tech";


const {
    min_ms,
    hour_ms,
    day_ms,
} = time_cost_ms;

type UnitType = "troops" | "spells" | "heroes";

type PlayerGoal = {
    [type in UnitType]: {
        [name: string]: number;
    };
};

export const cal_player_cost = (player_info: PlayerInfo, goal: PlayerGoal, boost: 0.2 | 0.15 | 0.1 | 0) => {
    let costs: {
        [key: string]: {
            res_cost: number;
            time_cost: number;
        }
    } = {};
    
    let res_cost_total: {
        [key in ResourceType]: number;
    } = {
        [ResourceType.Elixir]: 0,
        [ResourceType.Gold]: 0,
        [ResourceType.DarkElixir]: 0,
        [ResourceType.BuilderBaseElixir]: 0,
        [ResourceType.BuilderBaseGold]: 0
    };

    let time_cost_total = 0;

    const unit_types: UnitType[] = ["troops", "spells", "heroes"];

    for(let unit_type of unit_types) {
        
        for(let key of Object.keys(goal[unit_type])){
            if(!goal.troops[key]) continue;

            const unit_data = techdata[unit_type][key];
    
            const unit_target_level: number = goal.troops[key] ?? 0;
    
            const index = player_info.troops.findIndex(
                (troop) => troop.name.toLocaleLowerCase().replace(' ', '_').replace('.', '') === key
            );

            const unit_curr_level = index > 0 ? player_info.troops[index].level : 0;
        
            // const troop = player_info.troops[index];
            if(unit_curr_level >= unit_target_level) {
                continue;
            }

            const unit_costs = unit_data.level_data.reduce((acc, cur) => {
                if(cur.level <= unit_target_level && cur.level > unit_curr_level) {
                    acc.time_cost += cur.time_cost 
                    ? cal_time_cost_after_boost(cur.time_cost, boost) 
                    : 0;
                    acc.res_cost += cur.res_cost ? cur.res_cost * (1 - boost) :0;
                }
                return acc;
            }, { time_cost: 0, res_cost: 0 });

            costs[key] = unit_costs;
            time_cost_total += unit_costs.time_cost;
            res_cost_total[unit_data.res_type] += unit_costs.res_cost;
        }
    }

    
    return {
        costs,
        res_cost_total,
        time_cost_total
    };
}

/**
 * This function is used to calculate the time cost with given boost, time cost in ms.
 * 
 * Basically, to calculate the cost of time upgrading a unit with a golden pass boost,
 * is not just divide and minus.
 * It is noticable that the time cost of upgrading after boost is handled by some floor rule.
 * To calculate them properly, we need to know how supercell floor the number after boost.
 * 
 * For example, if the time cost of upgrading a unit is 8 days, and the boost is 20%.
 * The time cost after boost is 6.4 days, which is 6 days and 9.6 hours, which should be 6 days and 9 hours and 36 minutes.
 * But the actual time cost is 6 days and 9 hours.
 * 
 * Another example, if the time cost of upgrading a unit is 9 hours, and the boost is 20%.
 * The time cost after boost is 7.2 hours, which is 7 hours and 12 minutes.
 * But the actual time cost is 7 hours and 10 minutes.
 * 
 * So, the actual rule of calculating the time cost after boost is:
 * 1. calculate the time cost after boost.
 * 2. separate the time cost into days, hours, minutes.
 * 3. if there is no days, then the last digit of minutes should be floored to 0 after boost.
 * 4. if there is days, then there should be no minutes after boost.
 * 
 */
const cal_time_cost_after_boost = (time_cost: number, boost: 0.2 | 0.15 | 0.1 | 0) => {

    if (boost === 0) {
        return time_cost;
    }
    const time_cost_after_boost = time_cost * (1 - boost);
    const days_after_boost = Math.floor(time_cost_after_boost / day_ms);
    const hours_after_boost = Math.floor((time_cost_after_boost % day_ms) / hour_ms);
    const minutes_after_boost = Math.floor((time_cost_after_boost % hour_ms) / min_ms);

    if(days_after_boost === 0) {
        return hours_after_boost * hour_ms + Math.floor(minutes_after_boost / 10) * 10 * min_ms;
    } else {
        return days_after_boost * day_ms + hours_after_boost * hour_ms;
    }
}