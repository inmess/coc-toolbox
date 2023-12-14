

interface ProgressBarProps {
    progress: number;
}

export default function ProgressBar(props: ProgressBarProps) {

    const {
        progress
    } = props;

    return (
        <div className="h-4 w-full bg-gray-500 rounded-md">
            <div className="h-full bg-green-500 rounded-md" style={{ width: `${progress * 100}%` }} />
        </div>
    )

}