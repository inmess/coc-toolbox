import { PlayerInfo } from "@/data/types";
import PlayerHeader from "../frags/player-header";
import UnitLevelBar from "../frags/level-bar";

interface PlayerDashboardProps {
    playerInfo: PlayerInfo;

}

export default function PlayerDashboard({ playerInfo }: PlayerDashboardProps) {
    return (
    <div className="flex flex-col h-full w-full overflow-scroll">
        <PlayerHeader
            playerInfo={playerInfo}
        />
        <table className="w-2/3">
        <tr>
            <th>Unit</th>
            <th>Image</th>
            <th>Level (Curr/Hall Max)</th>
        </tr>
        {playerInfo.troops.filter(t => t.village == "home").map((troop, index) =>
            <tr key={index} className="">
                <td>{troop.name}</td>
                <td>
                    <img 
                    width={75}
                    height={75}
                    src={`https://clashofclans.js.org/assets/${troop.name.replace(/ /gi, '_')}.png`} />
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
        </table>
    </div>
    )
}