
export type PlayerInfo = {

    /** The player's name. */
    name: string;

    /** The player's tag. */
    tag: string;

    /** The player's Town Hall level.. */
    townHallLevel: number;

    /** The player's Town Hall weapon level. */
    townHallWeaponLevel: number | null;

    /** The player's experience level. */
    expLevel: number;

    /** The player's trophy count. */
    trophies: number;

    /** The player's best trophies. */
    bestTrophies: number;

    /** The player's war stars. */
    warStars: number;

    /** The number of attacks the player has won this season. */
    attackWins: number;

    /** The number of defenses the player has won this season. */
    defenseWins: number;

    /** The player's builder hall level, or 0 if it hasn't been unlocked. */
    builderHallLevel: number | null;

    /** The player's builder base trophy count. */
    builderBaseTrophies: number | null;

    /** @deprecated */
    versusTrophies?: number | null;

    /** The player's best builder base trophies. */
    bestBuilderBaseTrophies: number | null;

    /** @deprecated */
    versusBattleWins: number | null;

    /** The player's donation count for this season. */
    donations: number;

    /** The player's donation received count for this season. */
    received: number;

    /** The player's total Clan Capital contribution */
    clanCapitalContributions: number;

    /** The player's role in the clan or `null` if not in a clan. */
    role: 'member' | 'elder' | 'coLeader' | 'leader' | null;

    /** Whether the player has selected that they are opted in. This will be `null` if the player is not in a clan. */
    warOptedIn: boolean | null;

    /** The player's clan. */
    clan: PlayerClan | null;

    /** The player's current League. */
    league: {
        /** The league Id. */
        id: number;

        /** The league name. */
        name: string;

        /** The League Icon. */
        icon: {
            url: string;
        };

    };
    // League;

    /** The player's legend statistics, or `null` if they have never been in the legend league. */
    legendStatistics: any
    // LegendStatistics | null;

    /** An array of the player's achievements. */
    achievements: any[];
    // Achievement[];

    /** An array of player's labels. */
    labels: any[];
    // Label[];

    /** An array of player's troops (including pets and seige machines). */
    troops: any[];
    // Troop[];

    /** An array of player's spells. */
    spells: any[];
    // Spell[];

    /** An array of player's heroes (both home base and build base). */
    heroes: any[];
    // Hero[];

    /** The player's clan capital house details. */
    playerHouse?: any;
    // APIPlayerHouse | null;
};

type PlayerClan = {
    /** Name of the clan. */
	name: string;

	/** Tag of the clan. */
	tag: string;

	/**
	 * Level of this clan.
	 *
	 * This property is not available for ranked player's clan.
	 */
	level: number | null;

	/** Badge of this clan. */
	badge: {
        url: string;
    };
}