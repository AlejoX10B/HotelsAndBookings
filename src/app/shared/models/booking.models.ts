import { Hotel } from './hotel.models'

export interface Booking {
    id?:                number
    user_id:            string
    hotel_id:           number
    cost:               number
    taxes:              number
    room_type:          string
    dates:              string[]
    persons:            number
    client:             BookingClient
    emergency_contact:  EmergencyContact
    hotel?:             Hotel
}

interface BookingClient {
    names:      string
    lastnames:  string
    birthday:   string
    gender:     string
    doc_type:   string
    doc_num:    string
    email:      string
    phone:      string
}

interface EmergencyContact {
    fullname:   string
    phone:      string
}