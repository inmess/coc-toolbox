import { PlayerInfo } from "@/data/types";
import PlayerHeader from "../frags/player-header";
import UnitLevelBar from "../frags/level-bar";
import ProgressBar from "../atoms/progress-bar";
import ProgressCircle from "../atoms/progress-circle";

interface PlayerDashboardProps {
    playerInfo: PlayerInfo;

}

const getUpgradeProgress = (units: {
    level: number;
    hallMaxLevel: number;
}[]) => {
    const total = units.reduce((acc, curr) => acc + curr.level, 0);
    const maxTotal = units.reduce((acc, curr) => acc + curr.hallMaxLevel, 0);

    return total / maxTotal;
}

export default function PlayerDashboard({ playerInfo }: PlayerDashboardProps) {


    const normal_troops = playerInfo.troops.filter(t => t.village == "home" && !t.minOriginalLevel);

    const super_troops = playerInfo.troops.filter(t => t.village == "home" && t.minOriginalLevel);

    const builderbase_troops = playerInfo.troops.filter(t => t.village !== "home");

    const troops_progress = getUpgradeProgress(normal_troops);
    const spells_progress = getUpgradeProgress(playerInfo.spells);
    const heroes_progress = getUpgradeProgress(playerInfo.heroes);
    const builderbase_progress = getUpgradeProgress(builderbase_troops);

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
                <ProgressCircle progress={overall_tech_progress} />
            </div>
        </div>
        
        <div className="flex flex-row flex-wrap w-full justify-center items-center my-4 px-7">
            {normal_troops.map((troop, index) => (
                <div className={`flex relative m-1 w-14 h-14 rounded-md overflow-hidden
                ${troop.minOriginalLevel? 'border-2 border-yellow-400': ''}`} key={index}>
                    <img 
                    width={100}
                    height={100}
                    src={`https://assets.colinschmale.dev/warreport/troops/${troop.name}.png`} />
                    <div className={`absolute bottom-0 right-0 
                    ${troop.level < troop.hallMaxLevel ? 'bg-black': troop.level === troop.maxLevel 
                    ? 'bg-yellow-500': 'bg-green-500'} 
                    h-5 w-5 flex justify-center items-center rounded-tl-md`}>
                        <h1 className="h-6 w-6 text-center font-semibold text-white">{troop.level}</h1>
                    </div>
                </div>
            ))}

            
        </div>
        <div className="flex flex-row flex-wrap w-full justify-center items-center my-4 px-7">
            {playerInfo.spells.map((troop, index) => (
                <div className={`flex relative m-1 w-14 h-14 rounded-md overflow-hidden`} key={index}>
                    <img 
                    width={100}
                    height={100}
                    src={`https://assets.colinschmale.dev/warreport/spells/${troop.name}.png`} />
                    <div className={`absolute bottom-0 right-0 
                    ${troop.level < troop.hallMaxLevel ? 'bg-black': troop.level === troop.maxLevel 
                    ? 'bg-yellow-500': 'bg-green-500'} 
                    h-5 w-5 flex justify-center items-center rounded-tl-md`}>
                        <h1 className="h-6 w-6 text-center font-semibold text-white">{troop.level}</h1>
                    </div>
                </div>
            ))}

            
        </div>
        <div className="flex flex-row flex-wrap w-full justify-center items-center my-4 px-7">
            {super_troops.map((troop, index) => (
                <div className={`flex relative m-1 w-14 h-14 rounded-md overflow-hidden
                ${troop.minOriginalLevel? 'border-2 border-yellow-400': ''}`} key={index}>
                    <img 
                    width={100}
                    height={100}
                    src={`https://assets.colinschmale.dev/warreport/troops/${troop.name}.png`} />
                    <div className={`absolute bottom-0 right-0 ${troop.level < troop.hallMaxLevel 
                        ? 'bg-black': 'bg-green-500'}  h-5 w-5
                    flex justify-center items-center rounded-tl-md`}>
                        <h1 className={`
                        h-6 w-6 text-center font-semibold text-white`}>{troop.level}</h1>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex flex-row flex-wrap w-full justify-center items-center my-4 px-7">
            {builderbase_troops.map((troop, index) => (
                <div className={`flex relative m-1 w-14 h-14 rounded-md overflow-hidden
                ${troop.minOriginalLevel? 'border-2 border-yellow-400': ''}`} key={index}>
                    <img 
                    width={100}
                    height={100}
                    src={`https://assets.colinschmale.dev/warreport/troops/${troop.name}.png`} />
                    <div className={`absolute bottom-0 right-0 ${troop.level < troop.hallMaxLevel 
                        ? 'bg-black': 'bg-green-500'}  h-5 w-5
                    flex justify-center items-center rounded-tl-md`}>
                        <h1 className={`
                        h-6 w-6 text-center font-semibold text-white`}>{troop.level}</h1>
                    </div>
                </div>
            ))}
        </div>
        
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