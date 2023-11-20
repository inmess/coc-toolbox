import { useState } from "react";
import TagSearch from "../frags/tag-search";
import HistoryTags from "../frags/history-tags";
import { FaExchangeAlt, FaBars } from "react-icons/fa";

export default function HomeHeader() {

    const [historyVisible, setHistoryVisible] = useState(false);

    return (
        <div className="fixed top-0 w-full 
        flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-between items-center bg-yellow-300/50 p-2">
                <div className="text-lg">
                    <FaBars />
                </div>
                <TagSearch />
                <div className={`text-lg ${historyVisible? "text-amber-700": "text-amber-500"}
                cursor-pointer hover:text-amber-600`} onClick={() => setHistoryVisible(v => !v)} >
                    <FaExchangeAlt />
                </div>
                    
            </div>
            
            <div className="w-full h-1 flex flex-row">
                {historyVisible && 
                    <div className="absolute right-0 w-[200px] select-none">
                        <HistoryTags />
                    </div>
                }
            </div>
            
        </div>
    )
}