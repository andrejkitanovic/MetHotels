import { Pipe, PipeTransform } from '@angular/core';
import { HotelRoom } from '../components/hotel-room/hotel-room.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(items: HotelRoom[], searchText: string): any[] {
    if (!items) return [];
    if (searchText) {
      const searchNum = parseInt(searchText);
      return items.filter((el) => el.price <= parseInt(searchText));
    }
    return items;
  }
}
