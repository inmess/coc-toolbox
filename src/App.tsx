// import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import PlayerHeader from "./components/frags/player-header";
// import { useAtom } from "jotai";
// import { playerAtom, tagsAtom } from "./services/atoms";
// import TagSearch from "./components/frags/tag-search";
import usePlayers from "./utils/hooks/use-players";
import HomeHeader from "@/components/organisms/home-header";

function App() {

    // const [, setCurrTag] = useAtom(playerAtom);

    const {
        player: playerInfo,
    } = usePlayers()

    // const [players] = useAtom(tagsAtom)

    return (
        <div className="flex flex-col h-screen w-full justify-center item-center">
            <HomeHeader />
            {playerInfo && (
                <div className="flex flex-col h-full w-full overflow-scroll">
                    <PlayerHeader
                        playerInfo={playerInfo}
                    />

                    {playerInfo.troops.filter(t => t.village == "home").map((troop, index) =>
                        <div key={index} className="flex flex-row justify-between p-4 w-1/2">
                            <h1>{troop.name}</h1>
                            <h1>{troop.level}</h1>
                            <h1>{troop.maxLevel}</h1>
                            {troop.level < troop.maxLevel ? <h1>Not Max Level</h1> : <h1>Max</h1>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
