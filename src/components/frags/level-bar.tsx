import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface UnitLevelBarProps {
    hallMaxLevel: number;
    unitMaxLevel: number;
    unitLevel: number;
}

const LevelBarProgressBit = ({ className, onClick }: { className: string, onClick: () => void }) => (
    <div
        className={`h-full mx-1 ${className}`}
        onClick={onClick}
    />
)

export default function UnitLevelBar(props: UnitLevelBarProps) {

    const {
        hallMaxLevel,
        unitMaxLevel,
        unitLevel
    } = props;

    const [ targetLevel, setTargetLevel ] = useState(hallMaxLevel);

    return (
        <div className="p-1 h-full w-full flex flex-row justify-start items-center">
            { Array(unitMaxLevel).fill(0).map((_, i) => {
                
                const rep_level = i + 1;

                const isTarget = rep_level <= targetLevel;
                const isReached = rep_level <= unitLevel;
                const isHallMax = rep_level > hallMaxLevel;

                return <LevelBarProgressBit
                    key={i}
                    className={`
                    cursor-pointer w-3
                    ${isTarget 
                        ? (isReached 
                            ? 'bg-green-500' 
                            : isHallMax
                                ? 'bg-pink-500'
                                : 'bg-amber-500') 
                        : 'bg-gray-500'}
                    `}
                    onClick={() => {
                        if(rep_level <= unitLevel) return;
                        if(targetLevel == rep_level) return setTargetLevel(unitLevel);
                        setTargetLevel(rep_level)
                    }}
                />
            })}
            <h1 className="p-1 text-lg font-semibold">{unitLevel}/{hallMaxLevel}</h1>
            { unitLevel === hallMaxLevel && <FaCheckCircle className="text-green-500" />}
            <h1 className="font-extralight italic">Target: {targetLevel}</h1>
        </div>
    )

}