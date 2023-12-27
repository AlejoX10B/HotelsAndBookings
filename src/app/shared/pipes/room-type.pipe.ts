import { Pipe, PipeTransform } from '@angular/core';
import { RoomTypeOptions } from '../constants';

@Pipe({
  name: 'RoomType',
  standalone: true
})
export class RoomTypePipe implements PipeTransform {

  transform(value: string | undefined): string | null {
    if (!value) {
      return null
    }

    return RoomTypeOptions.find(roomType => roomType.value === value)?.label || ''
  }

}
