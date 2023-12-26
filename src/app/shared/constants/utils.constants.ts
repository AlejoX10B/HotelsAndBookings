import { Hotel } from '../models';


export function filterActiveRooms(hotels: Hotel | Hotel[]) {

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
