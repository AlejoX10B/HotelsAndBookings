import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from '../models';

@Pipe({
  name: 'TrueRole',
  standalone: true
})
export class RolePipe implements PipeTransform {

  transform(role: Roles): string {
    return (role === Roles.AGENT) ? 'Agente de Viajes' : 'Viajero';
  }

}
