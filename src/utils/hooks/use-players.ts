import { playerAtom, tagsAtom, userTokenAtom } from "@/services/atoms";
import { useAtom } from "jotai";
import { get_player } from "@/services/player";
import { PlayerInfo } from "@/data/types";
import { useCallback } from "react";
import { toast } from 'react-toastify'

export default function usePlayers () {
    const [tags, setTags] = useAtom(tagsAtom);

    const [currPlayer, setCurrPlayer] = useAtom(playerAtom);

    const [ user_token ] = useAtom(userTokenAtom);

    // const currPlayer = (currPlayer !== '' && currPlayer !== 'not specified') ? players[currPlayer] : null;


    const add_tag = useCallback(
        (tag: string, name: string) => setTags([...tags, { tag, name }])
    , [tags, setTags]);

    const query_and_set = useCallback(async (tag: string) => {
        try {
            
            const res = await toast.promise(get_player(tag, user_token ?? ''), {
                success: 'Got Player Info',
                pending: 'Fetching Player Info...',
                error: 'Failed to fetch player info'
            })
            if(!res.ok) return;
            if(!res.data) return;

            console.log(res.data);
            

            const player_data = res.data as PlayerInfo;

            if(tags.findIndex(t => t.tag === tag) < 0) add_tag(tag, player_data.name);

            setCurrPlayer(player_data);
        } catch (error) {
            console.error(error);
        }
    }, [tags, add_tag, setCurrPlayer, user_token])



    return {
        tags,
        player: currPlayer,
        query_and_set
    }
}