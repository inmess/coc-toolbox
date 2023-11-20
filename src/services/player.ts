import { http } from "@tauri-apps/api";

export const get_player = async (player_tag: string) => {

    const encoded_tag = encodeURIComponent(player_tag);

    // console.log(`Bearer ${api_key}`);
    
    return await http.fetch(`https://ctbb.gabriel-cheng.com/v1/players/${encoded_tag}`, {
        method: 'GET',
        headers: {
            Authorization: "STAR_STRIKE_TOKEN",
        }
    })
}

