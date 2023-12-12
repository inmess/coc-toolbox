import dayjs from "dayjs";
import EventTimer from "../atoms/event-timer";

/**
 * To calculate the time left for the events
 * 
 * All events (Timezone: UTC+8):
 *  - Clans War: Every first day of the month, starts from 4 P.M., all ends at 11st day of the month, 4 P.M.
 *  - Raid Weekend: Every friday, starts from 3 P.M., all ends at monday, 3 P.M.
 *  - Clan Games: 22nd - 28th of the month, starts from 4 P.M., all ends at 4 P.M.
 *  - Shop: Reset at every Tuesday, 4 P.M.
 *  - Season: Reset at last Sunday of the month, 1 P.M.
 *  - Season Pass: Reset at 1st day of the month, 4 P.M.
 * 
 * All in UTC:
 * - Clans War: Every first day of the month, starts from 8 A.M., all ends at 11st day of the month, 8 A.M.
 * - Raid Weekend: Every friday, starts from 7 A.M., all ends at monday, 7 A.M.
 * - Clan Games: 22nd - 28th of the month, starts from 8 A.M., all ends at 8 A.M.
 * - Shop: Reset at every Tuesday, 8 A.M.
 * - Season: Reset at last Sunday of the month, 5 A.M.
 * - Season Pass: Reset at 1st day of the month, 8 A.M.
 */
const periodicEvents = [
    {
        first: { name: 'Clans War Starts', day: 1, hour: 16 },
        second: { name: 'Clans War Ends', day: 11, hour: 16},
    },
    {
        first: { name: 'Raid Weekend Ends', day: 1, hour: 15 },
        second: { name: 'Raid Weekend Starts', day: 5, hour: 15 },
        weekly: true
    },
    {
        first: { name: 'Clan Game Starts', day: 22, hour: 16 },
        second: { name: 'Clan Game Ends', day: 28, hour: 16 },
    }
];
const triggerEvents = [


    { name: 'Shop Resets', day: 2, hour: 16, weekly: true },
    { name: 'Season Resets', day: -1, hour: 13 },
    { name: 'Season Pass Resets', day: 1, hour: 16 },
]

type TimeSpot = {
    day: number;
    hour: number;
}

const isHappened = (curr: TimeSpot, event: TimeSpot) => {
    if(curr.day < event.day) return false;
    if(curr.day > event.day) return true;
    return curr.hour >= event.hour;
}

export default function EventBanner(){
    const curr = dayjs();

    // const month = curr.month() + 1;
    const currDate = curr.date();
    const currDay = curr.day();
    const currDaysInMonth = curr.daysInMonth();
    const currHour = curr.hour();

    console.log(currDay);
    
    return (
    <div className="flex flex-col w-full">
        <div className="flex flex-row justify-around items-center w-full">
        { periodicEvents.map((event, key) => {
            const currTimeSpot = {
                day: event.weekly ? currDay: currDate,
                hour: currHour,
            }
            const nextEvent = !isHappened(currTimeSpot, event.first) 
                ? event.first
                : isHappened(currTimeSpot, event.second)
                    ? event.first : event.second;

            let target = nextEvent.day;

            if(event.weekly) {
                // target += currDay;
                return currDay <= target ? <EventTimer
                    key={key}
                    title={nextEvent.name + ' In'}
                    targetTime={dayjs().day(target).hour(nextEvent.hour).minute(0).second(0).millisecond(0)}
                /> : <EventTimer
                    key={key}
                    title={nextEvent.name + ' In'}
                    targetTime={dayjs().add(1, 'week').day(target).hour(nextEvent.hour).minute(0).second(0).millisecond(0)}
                />
            }

            return currDate <= target ? <EventTimer
                key={key}
                title={nextEvent.name + ' In'}
                targetTime={dayjs().date(target).hour(nextEvent.hour).minute(0).second(0).millisecond(0)}
            /> : <EventTimer
                key={key}
                title={nextEvent.name + ' In'}
                targetTime={dayjs().add(1, 'month').date(target).hour(nextEvent.hour).minute(0).second(0).millisecond(0)}
            />

            // return null;
        })}
        </div>
        <div className="flex flex-row justify-around items-center">
        { triggerEvents.map((event, key) => {
            let target = event.day;
            if(event.day < 0) target += currDaysInMonth;

            if (event.weekly) {
                return currDay < target ? <EventTimer 
                    key={key}
                    title={event.name + ' In'} 
                    targetTime={dayjs().day(target).hour(event.hour).minute(0).second(0).millisecond(0)} 
                /> : <EventTimer
                    key={key}
                    title={event.name + ' In'}
                    targetTime={dayjs().add(1, 'week').day(target).hour(event.hour).minute(0).second(0).millisecond(0)}
                />
            }

            return currDate < target ? <EventTimer 
                key={key}
                title={event.name + ' In'} 
                targetTime={dayjs().date(target).hour(event.hour).minute(0).second(0).millisecond(0)}
            /> : <EventTimer
                key={key}
                title={event.name + ' In'}
                targetTime={dayjs().add(1, 'month').date(target).hour(event.hour).minute(0).second(0).millisecond(0)}
            />
        })}
        </div>
    </div>
    )
}