import { PlayerInfo, ResourceType } from "@/data/types";

type PlayerGoal = {
    troops: {
        [key: string]: number
    },
    spells: {
        [key: string]: number
    },
    heroes: {
        [key: string]: number
    },
}

export const cal_player_cost = (player_info: PlayerInfo, goal: PlayerGoal, boost: number) => {
    let time_cost = 0;
    
    let res_cost = {
        [ResourceType.Elixir]: 0,
        [ResourceType.DarkElixir]: 0,
        [ResourceType.BuilderBaseElixir]: 0
    };

    for(let key of Object.keys(goal.troops)){
        const index = player_info.troops.findIndex(
            (troop) => troop.name === key
        );
    
        if(index === -1) {
            // TODO
            continue;
        }

        const troop = player_info.troops[index];
        if(troop.level >= goal.troops[key]) {
            continue;
        }
        // TODO

    }
    


}