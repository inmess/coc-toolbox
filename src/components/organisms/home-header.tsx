import { useState } from "react";
import TagSearch from "../frags/tag-search";
import HistoryTags from "../frags/history-tags";


export default function HomeHeader() {

    const [historyVisible, setHistoryVisible] = useState(false);

    return (
        <div className="fixed top-0 p-1 w-full 
        bg-yellow-300/50
        flex flex-row justify-center items-center">
            <TagSearch />
            <div className="absolute top-0 right-0 select-none cursor-pointer
            flex flex-col">
                <div 
                onClick={() => setHistoryVisible(v => !v)} 
                className="flex flex-row justify-end"
                >
                    <h1 className="p-3">Open</h1>
                </div>
                {historyVisible && 
                <div className="">
                    <HistoryTags />
                </div>
                }
            </div>
            {/* {historyVisible && 
            
            <div className="absolute w-40 h-40 right-0 top-0">
                <HistoryTags />
            </div>
            } */}
        </div>
    )
}