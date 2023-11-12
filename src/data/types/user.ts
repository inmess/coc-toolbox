
export type UserTech = {
    troops: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home" | "builderBase",
            superTroopIsActive?: boolean
        }
    ],
    spells: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home"
        }
    ]
}

export type UserHero = {

    heroes: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home" | "builderBase"
        }
    ],
}