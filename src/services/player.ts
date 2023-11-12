import { PlayerInfo } from "@/data/types";
import { http } from "@tauri-apps/api";
// import { atom, } from "jotai";
import { atomWithStorage } from 'jotai/utils'

export const techAtom = atomWithStorage<{
    [tag: string]: PlayerInfo
}>("player_info", {})

// const api_key = process.env.SUPERCELL_API_KEY || "";
const api_key = import.meta.env.VITE_SUPERCELL_API_KEY || "";

export const get_player = async (player_tag: string) => {

    const encoded_tag = encodeURIComponent(player_tag);

    // console.log(`Bearer ${api_key}`);
    
    return await http.fetch(`https://api.clashofclans.com/v1/players/${encoded_tag}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${api_key}`,
        }
    })
}

