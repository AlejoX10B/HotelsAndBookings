
export interface Hotel {
    id:             number
    active:         boolean
    name:           string
    location:       string
    description:    string
    img_url:        string
    score:          number
    services:       string[]
    rooms:          HotelRoom[]
}

export interface HotelRoom {
    active:         boolean
    kind:           string
    location:       string
    description:    string
    cost:           number
    taxes:          number
}
