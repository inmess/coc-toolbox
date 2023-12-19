
interface UnitLevelWallProps {
    units: {
        name: string;
        level: number;
        hallMaxLevel: number;
        minOriginalLevel?: number | null;
        maxLevel: number;
        unlocked: boolean;
    }[],
    iconBaseUrl: string;
}

export default function UnitLevelWall (props: UnitLevelWallProps) {

    return (
    <div className="flex flex-row flex-wrap w-full justify-start items-end mb-4 px-7">
        {props.units.map((troop, index) => (
            <div className={`flex relative m-1 w-14  rounded-lg overflow-hidden
            ${troop.minOriginalLevel? 'border-2 border-yellow-400': ''}`} key={index}>
                <img 
                    width={100}
                    // height={100}
                    className={`rounded-md ${troop.unlocked? '': 'grayscale opacity-50'}`}
                    src={`${props.iconBaseUrl}${troop.name.toLowerCase().replace(/ /g, '_').replace(/\./g, '')}.png`} 
                />
                { troop.unlocked && <div className={`absolute bottom-0 right-0 
                ${troop.level < troop.hallMaxLevel ? 'bg-black': troop.level === troop.maxLevel 
                ? 'bg-yellow-500': 'bg-green-500'} 
                h-5 w-5 flex justify-center items-center rounded-tl-lg`}>
                    <h1 className="h-6 w-6 text-center font-semibold text-white">{troop.level}</h1>
                </div>}
            </div>
        ))}

    </div>
    )
}