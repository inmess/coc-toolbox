// import { playerAtom, tagsAtom } from "@/services/atoms";
import usePlayers from "@/utils/hooks/use-players";
// import { useAtom } from "jotai";
import { useCallback } from "react";


export default function HistoryTags() {
    const {
        tags,
        player,
        query_and_set
    } = usePlayers();

    const switchPlayer = useCallback(async (tag: string) => {
        if(player?.tag === tag) return;
        await query_and_set(tag);
    }, [player, query_and_set])
    
    return (
        <div className="flex flex-col justify-center items-center bg-white shadow-sm">
            { tags.length === 0 && <h1 className="text-sm font-extralight italic">No History</h1>}
            { tags.map((tag, index) => 
                <div 
                key={index} 
                className={`p-2 flex flex-row justify-evenly items-center
                cursor-pointer hover:bg-slate-300 
                ${player?.tag === tag.tag ? 'bg-slate-300' : ''}`}
                onClick={async () => {
                    await switchPlayer(tag.tag);
                }}
                >
                    <h1 className="text-sm font-extralight italic mr-1">
                        {tag.tag}
                    </h1>
                    <h1 className="text-sm font-medium line-clamp-1">
                        {tag.name}
                    </h1>
                </div>
            )}
        </div>
    )
}