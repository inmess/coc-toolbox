import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInterval } from "usehooks-ts";


interface EventTimerProps {
    title: string;
    targetTime: dayjs.Dayjs;
}

export default function EventTimer(props: EventTimerProps) {
    
    const { 
        title, 
        targetTime 
    } = props;

    const [currTimeStamp, setCurrTimeStamp] = useState(new Date().valueOf());

    const { t } = useTranslation()

    useInterval(() => setCurrTimeStamp(new Date().valueOf()), 1000);

    const timeLeftDay = useMemo(() => {
        // timeDiff is in milliseconds
        const timeDiff = targetTime.valueOf() - currTimeStamp;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        // const seconds = Math.floor((timeDiff / 1000) % 60);
        
        const day_str = t('common:day', { count: days });
        const hour_str = t('common:hour', { count: hours });
        const min_str = t('common:minute', { count: minutes });
        if(days === 0) return `${hour_str} ${min_str}`;
        return `${day_str} ${hour_str} ${min_str}`;
    }, [currTimeStamp, targetTime])

    return (
    <div className="w-1/3 flex flex-col justify-center items-center m-3">
        <div className="text-lg font-bold ">{title}</div>
        {/* <div>{targetTime.format()}</div> */}
        <div className="text-lg ">{timeLeftDay}</div>
    </div>
    )
}