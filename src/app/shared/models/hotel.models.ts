export interface Hotel {
    id:             number
    active:         boolean
    name:           string
    location:       string
    description:    string
    img_url:        string
    stars:          number
    services:       string[]
    rooms_count:    number
    rooms:          any[]
}