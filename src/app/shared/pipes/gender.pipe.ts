import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GenderLabel',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: string | undefined): string | null {
    if (!value) {
      return null
    }

    return (value === 'M') ? 'Masculino' : 'Femenino';
  }

}
