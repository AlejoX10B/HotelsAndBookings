import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StatusLabel',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value) ? 'Habilidado' : 'Deshabilitado';
  }

}
