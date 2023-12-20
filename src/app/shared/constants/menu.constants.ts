import { MenuItem } from 'primeng/api';


export const AgentMenuItems: MenuItem[] = [
    {
        label: 'Hoteles',
        icon: 'pi pi-building',
        routerLink: 'hotels',
        items: [
            {
                label: 'Agregar',
                icon: 'pi pi-plus'
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