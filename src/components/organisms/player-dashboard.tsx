import { PlayerInfo } from "@/data/types";
import PlayerHeader from "../frags/player-header";
// import UnitLevelBar from "../frags/level-bar";
import ProgressBar from "../atoms/progress-bar";
import ProgressCircle from "../atoms/progress-circle";
import UnitLevelWall from "../frags/unit-level-wall";
import { unit_all } from "@/data/types/unit";
import { Hero, Spell, Troop } from "@/data/types/player";

interface PlayerDashboardProps {
    playerInfo: PlayerInfo;

}

const getUpgradeProgress = (units: {
    level: number;
    hallMaxLevel: number;
    unlocked: boolean;
}[]) => {
    const total = units.reduce((acc, curr) => curr.unlocked? acc + curr.level: acc, 0);
    const maxTotal = units.reduce((acc, curr) => curr.unlocked? acc + curr.hallMaxLevel: acc, 0);

    return total / maxTotal;
}

const convertUnitName = (name: string) => name.replace(/ /g, '_').replace(/\./g, '').toLowerCase();

type UnitData = {
    troops: (Troop & { unlocked: boolean })[];
    pets: (Troop & { unlocked: boolean })[];
    siege_machines: (Troop & { unlocked: boolean })[];
    super_troops: (Troop & { unlocked: boolean })[];
    spells: (Spell & { unlocked: boolean })[];
    heroes: (Hero & { unlocked: boolean })[];
    builderBase_heros: (Hero & { unlocked: boolean })[];
    builderBase_troops: (Troop & { unlocked: boolean })[];
};

const sortUnitData = (playerInfo: PlayerInfo) => {

    const data = Object.keys(unit_all).reduce<UnitData>((acc, curr) => {
        return {
            ...acc,
            [curr]: unit_all[curr as keyof typeof unit_all].map(t => {
                let unit = null;
                if(curr === "heroes" || curr === "builderBase_heros") {
                    unit = playerInfo.heroes.find(pt => convertUnitName(pt.name) === t);
                } else if (curr === "spells") {
                    unit = playerInfo.spells.find(pt => convertUnitName(pt.name) === t);
                } else {
                    unit = playerInfo.troops.find(pt => convertUnitName(pt.name) === t);
                }
                if (unit) return { ...unit, unlocked: true};
                return { name: t, unlocked: false }
            })
        }
    }, {} as UnitData)

    return data


}

export default function PlayerDashboard({ playerInfo }: PlayerDashboardProps) {

    const {
        troops,
        pets,
        siege_machines,
        super_troops,
        spells,
        heroes,
        builderBase_heros,
        builderBase_troops,
    } = sortUnitData(playerInfo);    

    const troops_progress = getUpgradeProgress(troops);
    const spells_progress = getUpgradeProgress(spells);
    const heroes_progress = getUpgradeProgress(heroes);

    const builderbase_progress = (getUpgradeProgress(builderBase_troops) + getUpgradeProgress(builderBase_heros)) / 2;

    const overall_tech_progress = (troops_progress + spells_progress + heroes_progress + builderbase_progress) / 4;

    return (
    <div className="flex flex-col h-full w-full">
        <PlayerHeader
            playerInfo={playerInfo}
        />
        <div className="w-full flex flex-row justify-center items-center">
            <div className="w-1/2">
                <div className="flex flex-row justify-center items-center">
                    <h1 className="px-2 w-1/3 text-right">Troops</h1>
                    <div className="w-1/3">
                        <ProgressBar progress={troops_progress} />
                    </div>
                    <h1 className="px-2 font-semibold">{(troops_progress * 100).toFixed(2)}%</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <h1 className="px-2 w-1/3 text-right">Spells</h1>
                    <div className="w-1/3">
                        <ProgressBar progress={spells_progress} />
                    </div>
                    <h1 className="px-2 font-semibold">{(spells_progress * 100).toFixed(2)}%</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <h1 className="px-2 w-1/3 text-right">Heros</h1>
                    <div className="w-1/3">
                        <ProgressBar progress={heroes_progress} />
                    </div>
                    <h1 className="px-2 font-semibold">{(heroes_progress * 100).toFixed(2)}%</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <h1 className="px-2 w-1/3 text-right">Builder Base</h1>
                    <div className="w-1/3">
                        <ProgressBar progress={builderbase_progress} />
                    </div>
                    <h1 className="px-2 font-semibold">{(builderbase_progress * 100).toFixed(2)}%</h1>
                </div>
            </div>
            <div className="w-1/2">
                <ProgressCircle title="Overall" progress={overall_tech_progress} />
            </div>
        </div>
        <h1>Troops</h1>
        <UnitLevelWall 
            units={troops}
            iconBaseUrl="/army/home-troops/"
        />
        <UnitLevelWall 
            units={pets}
            iconBaseUrl="/army/home-troops/"
        />
        <UnitLevelWall 
            units={siege_machines}
            iconBaseUrl="/army/home-troops/"
        />
        <UnitLevelWall 
            units={super_troops}
            iconBaseUrl="/army/super-troops/"
        />
        <UnitLevelWall 
            units={spells}
            iconBaseUrl="/army/home-spells/"
        />
        <UnitLevelWall 
            units={heroes}
            iconBaseUrl="/army/heroes/"
        />
        <UnitLevelWall 
            units={builderBase_troops}
            iconBaseUrl="/army/heroes/"
        />
        {/* <table className="w-2/3">
        <tr>
            <th>Unit</th>
            <th>Image</th>
            <th>Level (Curr/Hall Max)</th>
        </tr>
        {normal_troops.map((troop, index) =>
            <tr key={index} className="">
                <td>{troop.name}</td>
                <td>
                    <img 
                    width={75}
                    height={75}
                    src={`https://assets.colinschmale.dev/warreport/troops/${troop.name}.png`} />
                </td>
                
                <td className="flex flex-row justify-start items-center">
                    <div className="h-8">
                        <UnitLevelBar 
                            unitLevel={troop.level}
                            unitMaxLevel={troop.maxLevel}
                            hallMaxLevel={troop.hallMaxLevel}
                        />
                    </div>
                </td>
            </tr>
        )}
        </table> */}
    </div>
    )
}