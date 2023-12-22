import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from '../models';

@Pipe({
  name: 'RoleLabel',
  standalone: true
})
export class RolePipe implements PipeTransform {

  transform(role: Roles | undefined): string {
    return (role === Roles.AGENT) ? 'Agente de Viajes' : 'Viajero';
  }

}
