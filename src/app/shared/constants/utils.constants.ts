import { Hotel } from '../models';


export function filterActiveRooms(hotels: Hotel | Hotel[]): Hotel | Hotel[] {

    const filterRooms = (hotel: Hotel) => {
        return {
            ...hotel,
            rooms: hotel.rooms.filter(room => room.active === true)
        }
    }

    if (Array.isArray(hotels)) {
        return hotels.map(hotel => filterRooms(hotel))
    }

    return filterRooms(hotels)
}


export function filterNullOptions(obj: object): object {
    const newObj: any = {}

    for (let [key, val] of Object.entries(obj)) {
        if (val !== '' && val !== null && val !== undefined) {
            val = (key == 'dates') ? parseDatesToUrl(val) : val
            newObj[key] = val
        }
    }

    return newObj
}


export function parseDatesToUrl(dates: Date[]): string | Date[] {
    if (!dates || dates.length == 0) return dates

    return btoa(dates.map(date => date.toDateString()).join(','))
}


export function parseUrlToDates(dates: string): string | Date[] {
    if (!dates) return dates

    return atob(dates).split(',').map(date => new Date(date))
}
