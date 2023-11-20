

interface PlayerHeaderProps {
    playerInfo?: {
        name: string;
        tag: string;
        expLevel: number;
        townHallLevel: number;
        builderHallLevel: number;
        townHallWeaponLevel?: number;
        clan: {
            name: string;
            tag: string;
            badgeUrls: {
                small: string;
            }
        };
        league: {
            name: string;
            iconUrls: {
                small: string;
            }
        };
        trophies: number;
        builderBaseTrophies: number,
    }
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
            <div className="flex flex-row justify-start items-center p-2">
                <img src={playerInfo.clan.badgeUrls.small} alt={playerInfo.clan.name} />
                <div className="flex-col justify-start p-3">
                    <h1 className="text-lg font-bold ">{playerInfo.clan.name}</h1>    
                    <h1 className="text-lg font-semibold italic">{playerInfo.clan.tag}</h1>    
                </div>
            
            </div>
            <div className="flex flex-row justify-start items-center p-2">
                <img src={playerInfo.league.iconUrls.small} alt={playerInfo.league.name} />
                <div className="flex-col justify-start p-3">
                    <h1 className="text-lg font-bold ">{playerInfo.league.name}</h1>    
                    <h1 className="text-lg font-semibold italic">{playerInfo.trophies}</h1>    
                </div>
            </div>
            <div className="flex flex-row justify-start items-center p-2">
                <img src={playerInfo.league.iconUrls.small} alt={playerInfo.league.name} />
                <div className="flex-col justify-start p-3">
                    <h1 className="text-lg font-bold ">{playerInfo.league.name}</h1>    
                    <h1 className="text-lg font-semibold italic">{playerInfo.trophies}</h1>    
                </div>
            </div>
        </div>
        
    </div>
    )
    
}