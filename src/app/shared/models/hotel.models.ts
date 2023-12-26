export interface Hotel {
    id:             number
    active:         boolean
    name:           string
    location:       string
    description:    string
    img_url:        string
    score:          number
    services:       string[]
    rooms_count:    number
    rooms:          any[]
}