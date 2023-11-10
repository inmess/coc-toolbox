import { http } from "@tauri-apps/api";

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

