import { useState } from "react";
// import { get_player } from "../../services/player";
// import { useAtom } from "jotai";
// import { playerAtom, tagsAtom } from "../../services/atoms";
// import { PlayerInfo } from "../../data/types";
import usePlayers from "@/utils/hooks/use-players";


export default function TagSearch() {

    const [query, setQuery] = useState("");

    // const [players, setPlayers] = useAtom(tagsAtom)

    // const [_, setCurrTag] = useAtom(playerAtom)

    // const onTagSearch = async (queryTag: string) => {
    //     const res = await get_player(queryTag);

    //     if(!res.ok) return console.log('error');

    //     setPlayers({
    //         ...players,
    //         [queryTag]: res.data as PlayerInfo
    //     })

    //     setCurrTag(queryTag);

    //     console.log(res);
    // }

    const {
        // tags,
        // palyer,
        query_and_set
    } = usePlayers();
    
    return (
        <div className="flex h-full w-full justify-center item-center">
            <form
                className="row"
                onSubmit={async (e) => {
                    e.preventDefault();
                    console.log(query);
                    await query_and_set(query);
                }}
            >
                <input
                    className="border border-yellow-400 p-1 mx-2"
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    placeholder="#TAG..."
                />
                <button className="select-none cursor-pointer" type="submit">Search Tag</button>
            </form>
        </div>
    )
}