
export type PlayerInfo = {
    /**
     * Player tag
     */
    tag: string,

    /**
     * Player name
     */
    name: string,

    /**
     * Player town hall level
     */
    townHallLevel: number,

    /**
     * Player town hall weapon level
     */
    townHallWeaponLevel: number,

    /**
     * Player exp level
     */
    expLevel: number,

    /**
     * Player trophies (home village)
     */
    trophies: number,

    /**
     * Player best trophies (home village)
     */
    bestTrophies: number,

    /**
     * Player war stars
     */
    warStars: number,
    attackWins: number,
    defenseWins: number,

    /**
     * Player builder hall level
     */
    builderHallLevel: number,

    builderBaseTrophies: number,
    versusTrophies: number,
    bestBuilderBaseTrophies: number,
    bestVersusTrophies: number,
    versusBattleWins: number,
    role: string,
    warPreference: string,
    donations: number,
    donationsReceived: number,
    clanCapitalContributions: number,
    clan: {
        tag: string,
        name: string,
        clanLevel: number,
        badgeUrls: {
            small: string,
            large: string,
            medium: string
        }
    },
    league: {
        id: number,
        name: string,
        iconUrls: {
            small: string,
            tiny: string,
            medium: string
        }
    },
    builderBaseLeague: {
        id: number,
        name: string
    },
    achievements: [
        {
            name: string,
            stars: number,
            value: number,
            target: number,
            info: string,
            completionInfo: string,
            village: "home" | "builderBase"
        }
    ],
    labels: [
        {
            id: number,
            name: string,
            iconUrls: {
                small: string,
                medium: string
            }
        }
    ],
    troops: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home" | "builderBase",
            superTroopIsActive?: boolean
        }
    ],
    heroes: [
        {
            name: string,
            level: number,
            maxLevel: number,
            village: "home" | "builderBase"
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
};