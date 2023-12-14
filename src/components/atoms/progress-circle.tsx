

interface ProgressCircleProps {
    progress: number;
}

export default function ProgressCircle(props: ProgressCircleProps) {
    return (
        <div className="relative">
            <div className="overflow-hidden rounded-full w-16 h-16">
                <svg viewBox="0 0 100 100" className="transform rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ddd" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgb(34,197,94)" strokeWidth="10" strokeDasharray={`${props.progress * 283} 283`} strokeDashoffset="0" style={{transition: 'stroke-dasharray 0.3s ease'}} />
                </svg>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">{(props.progress * 100).toFixed(2)}%</h1>
            </div>
        </div>
    )
}