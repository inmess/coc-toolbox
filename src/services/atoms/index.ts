import { atomWithStorage } from "jotai/utils"
import { atom } from "jotai";
import { PlayerInfo } from "@/data/types";

export const tagsAtom = atomWithStorage<{
    tag: string;
    name: string;
}[]>("player_tags", [])

export const playerAtom = atom<PlayerInfo| null>(null)

export const userTokenAtom = atomWithStorage<string | null>("user_token", null)

export const verificationAtom = atom(false)