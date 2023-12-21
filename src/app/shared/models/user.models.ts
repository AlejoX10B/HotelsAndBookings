
export enum Roles {
    AGENT = 'AGENT',
    USER = 'USER'
}


export interface User {
    id: string
    email: string
    password: string
    name: string
    lastname: string
    role: Roles
}
