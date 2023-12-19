import { http } from "@tauri-apps/api";

export const verify_user = async (token: string) => {
    return await http.fetch(`https://gccld.top/v1/verify`, {
        method: 'POST',
        headers: {
            Authorization: token,
        }
    })
}