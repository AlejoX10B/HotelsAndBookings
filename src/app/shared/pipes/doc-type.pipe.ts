import { Pipe, PipeTransform } from '@angular/core';
import { DocTypeOptions } from '../constants';

@Pipe({
  name: 'DocTypeLabel',
  standalone: true
})
export class DocTypePipe implements PipeTransform {

  transform(value: string | undefined): string | null {
    if (!value) {
      return null
    }

    return DocTypeOptions.find(doc => doc.value === value)?.label || null
  }

}
