import { MenuItem } from 'primeng/api';


export const AgentMenuItems: MenuItem[] = [
    {
        label: 'Hoteles',
        icon: 'pi pi-building',
        routerLink: '/hotels',
        items: [
            {
                label: 'Registrar nuevo',
                icon: 'pi pi-plus',
                routerLink: '/hotels/add'
            },
            {
                label: 'Ver lista',
                icon: 'pi pi-eye',
                routerLink: '/hotels'
            }
        ]
    },
    {
        label: 'Reservas',
        icon: 'pi pi-ticket',
        routerLink: 'bookings'
    }
]


export const UserMenuItems: MenuItem[] = [
    {
        label: 'Hoteles',
        icon: 'pi pi-building'
    },
    {
        label: 'Mis Reservas',
        icon: 'pi pi-ticket'
    }
]
