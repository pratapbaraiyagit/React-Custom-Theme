
let eventGuid = 0

let matchEvent = new Date('2023-02-04').toISOString().replace(/T.*$/, '')
let footBallEvent = new Date('2023-02-09').toISOString().replace(/T.*$/, '')
let todayStr = new Date().toISOString().replace(/T.*$/, '')

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All day event',
        start: todayStr
    },
    // {
    //     id: createEventId(),
    //     start: todayStr + 'T12:00'
    // },
    {
        id: createEventId(),
        title: 'Match',
        start: matchEvent
    },
    {
        id: createEventId(),
        title: 'Football',
        start: footBallEvent
    }
]

export function createEventId() {
    return String(eventGuid++)
}
