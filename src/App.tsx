import { useCallback, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { get_player } from "./services/player";
import { PlayerInfo } from "./utils/types";

function App() {
    const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
    const [name, setName] = useState("");

    const greet = useCallback(async () => {
        console.log('requesting');
        
        const res = await get_player(name);
        console.log(res);
        
        setPlayerInfo(res.data as PlayerInfo);
        
    }, [setPlayerInfo, name])

    return (
        <div className="flex flex-col h-screen w-full justify-center item-center">
            <form
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();
                    greet();
                }}
            >
                <input
                    className=""
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="Enter a tag..."
                />
                <button type="submit">Greet</button>
            </form>
            {playerInfo && (
                <div className="flex flex-col h-full w-full overflow-scroll">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-extrabold italic">{playerInfo.tag}</h1>
                        <h1 className="text-lg">Name: {playerInfo.name}</h1>
                        <h1 className="text-lg inline">Lv.
                            <h1 className="font-semibold inline ">{playerInfo.expLevel}</h1>
                        </h1>

                        <h1 className="text-xl">
                            <h1 className="inline italic font-extrabold">{playerInfo.townHallLevel}</h1> Town
                        </h1>
                        <h1 className="text-xl">
                            <h1 className="inline italic font-extrabold">{playerInfo.builderHallLevel}</h1> Builder Base
                        </h1>
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
                    </div>

                    { playerInfo.troops.filter(t => t.village == "home").map((troop, index) => 
                        <div key={index} className="flex flex-row justify-between p-4 w-1/2">
                            <h1>{troop.name}</h1>
                            <h1>{troop.level}</h1>
                            <h1>{troop.maxLevel}</h1>
                            {troop.level < troop.maxLevel ?<h1>Not Max Level</h1>: <h1>Max</h1>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
