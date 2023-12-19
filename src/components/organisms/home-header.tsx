import { useEffect, useRef, useState } from "react";
import TagSearch from "../frags/tag-search";
import HistoryTags from "../frags/history-tags";
import { FaExchangeAlt, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useOnClickOutside } from "usehooks-ts";
import { getVersion } from "@tauri-apps/api/app";

export default function HomeHeader() {

    const [historyVisible, setHistoryVisible] = useState(false);

    const [sideBarVisible, setSideBarVisible] = useState(false);
    const historyRef = useRef(null)
    const sideBarRef = useRef(null)

    const [ version, setVersion ] = useState("");

    useEffect(() => {
        getVersion().then(v => setVersion(v));
    }, [setVersion])

    useOnClickOutside(historyRef, () => setHistoryVisible(false));
    useOnClickOutside(sideBarRef, () => setSideBarVisible(false));
    return (
        <div className="fixed top-0 w-full z-50
        flex flex-col justify-center items-center">
            <div 
                className={`fixed h-screen left-0 top-0 w-48 
                flex flex-col items-center justify-between
                animate-in slide-in-from-left-96
                bg-amber-400/50 backdrop-blur-sm ${sideBarVisible? '': 'hidden'}`}
                ref={sideBarRef}>
                <div className="w-full flex flex-row justify-end items-center p-3">
                    <div 
                        className="text-2xl text-black cursor-pointer"
                        onClick={() => setSideBarVisible(false)}
                    >
                        <RxCross2 />
                    </div>
                </div>
                <div className="bg-amber-400 w-full flex justify-center items-center">
                    <h1 className="italic font-extralight">alpha v{version}</h1>
                </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center bg-yellow-300/50 p-2">
                <div 
                className="text-lg text-amber-700 hover:text-amber-600 cursor-pointer" 
                onClick={() => setSideBarVisible(v => !v)}>
                    <FaBars />
                </div>
                <TagSearch />
                <div className={`text-lg ${historyVisible? "text-amber-700": "text-amber-500"}
                cursor-pointer hover:text-amber-600`} onClick={() => setHistoryVisible(v => !v)} >
                    <FaExchangeAlt />
                </div>
                    
            </div>
            
            <div className="w-full h-1 flex flex-row" ref={historyRef}>
                {historyVisible && 
                    <div className="absolute right-0 w-[200px] select-none">
                        <HistoryTags />
                    </div>
                }
            </div>
            
        </div>
    )
}