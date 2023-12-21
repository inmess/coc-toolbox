import { http } from "@tauri-apps/api";

export const get_player = async (player_tag: string, token: string) => {

    const encoded_tag = encodeURIComponent(player_tag);
    
    return await http.fetch(`http://gccld.top/v1/players/${encoded_tag}`, {
        method: 'GET',
        headers: {
            Authorization: token,
        }
    })
    
}