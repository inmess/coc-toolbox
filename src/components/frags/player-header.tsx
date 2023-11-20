import { PlayerInfo } from "@/data/types";


interface PlayerHeaderProps {
    playerInfo?: PlayerInfo
}

export default function PlayerHeader(props: PlayerHeaderProps) {

    const {
        playerInfo
    } = props;

    if (!playerInfo) {
        return <></>;
    }

    const townhall_img = playerInfo.townHallLevel > 11 
        ? `/hall/townhall_${playerInfo.townHallLevel}_${playerInfo.townHallWeaponLevel}.png`
        : `/hall/townhall_${playerInfo.townHallLevel}.png`;

    return (
    <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl font-extrabold">{playerInfo.name}</h1>
        <h1 className="text-xl font-extralight italic">{playerInfo.tag}</h1>
        <h1 className="text-lg inline">Lv.
            <h1 className="font-semibold inline ">{playerInfo.expLevel}</h1>
        </h1>

        <h1 className="text-xl">
            <h1 className="inline italic font-extrabold">{playerInfo.townHallLevel}</h1> Town
            <img src={townhall_img} alt="townhall" height={150} width={150} />
        </h1>
        <h1 className="text-xl">
            <h1 className="inline italic font-extrabold">{playerInfo.builderHallLevel}</h1> Builder Base
        </h1>
        <div className="flex flex-row">
            {playerInfo.clan && <div className="flex flex-row justify-start items-center p-2">
                <img src={playerInfo.clan.badge.url} alt={playerInfo.clan.name} width={100} height={100}/>
                <div className="flex-col justify-start p-3">
                    <h1 className="text-lg font-bold ">{playerInfo.clan.name}</h1>    
                    <h1 className="text-lg font-semibold italic">{playerInfo.clan.tag}</h1>    
                </div>
            
            </div>}
            <div className="flex flex-row justify-start items-center p-2">
                <img src={playerInfo.league.icon.url} alt={playerInfo.league.name} width={100} height={100}/>
                <div className="flex-col justify-start p-3">
                    <h1 className="text-lg font-bold ">{playerInfo.league.name}</h1>    
                    <h1 className="text-lg font-semibold italic">{playerInfo.trophies}</h1>    
                </div>
            </div>
            <div className="flex flex-row justify-start items-center p-2">
                <img src={playerInfo.league.icon.url} alt={playerInfo.league.name} width={100} height={100} />
                <div className="flex-col justify-start p-3">
                    <h1 className="text-lg font-bold ">{playerInfo.league.name}</h1>    
                    <h1 className="text-lg font-semibold italic">{playerInfo.trophies}</h1>    
                </div>
            </div>
        </div>
        
    </div>
    )
    
}