import { useState } from "react";
import usePlayers from "@/utils/hooks/use-players";
// import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";


const check_tag_validity = (tag: string) => {
    // tag should start with #
    if(!tag.startsWith('#')) return false;
    if(tag.length < 2) return false
    return true
}


export default function TagSearch() {

    const [query, setQuery] = useState("");

    const {
        query_and_set
    } = usePlayers();
    
    return (
        <div className="flex h-full w-full justify-center item-center">
            <form
                className="flex h-full w-full justify-center item-center"
                onSubmit={async (e) => {
                    e.preventDefault();
                    if(!check_tag_validity(query)) return toast.warn("Invalid Tag")
                    query_and_set(query)
                }}
            >
                <input
                    className=" border border-yellow-400 pl-2 p-1 mx-2 rounded-lg
                    ring-0  focus:border-amber-400 focus:ring-amber-400"
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    placeholder="Enter a #TAG... to add"
                />
                <button 
                className="select-none cursor-pointer font-semibold
                text-2xl rounded-md text-amber-500 hover:scale-110" 
                type="submit">
                    <FiSearch />
                </button>
            </form>
        </div>
    )
}