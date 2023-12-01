import { http } from "@tauri-apps/api";

export const get_player = async (player_tag: string) => {

    const encoded_tag = encodeURIComponent(player_tag);

    
    return await http.fetch(`https://gccld.top/v1/players/${encoded_tag}`, {
        method: 'GET',
        headers: {
            Authorization: "STAR_STRIKE_CLAN",
        }
    })

    // return await http.fetch(`http://localhost:3030/v1/players/${encoded_tag}`, {
    //     method: 'GET',
    //     headers: {
    //         Authorization: "secret",
    //     }
    // })
    
}

