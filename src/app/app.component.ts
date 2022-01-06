import { Component } from '@angular/core';
import { HotelRoom } from './components/hotel-room/hotel-room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MetHotels';
  hotelRooms: HotelRoom[];
  searchText = '';

  constructor() {
    this.hotelRooms = [
      new HotelRoom(101, 29, 210),
      new HotelRoom(102, 29, 230),
      new HotelRoom(103, 32, 420),
      new HotelRoom(201, 162, 2100),
      new HotelRoom(202, 29, 320),
    ];
  }

  addRoom(
    number: HTMLInputElement,
    size: HTMLInputElement,
    price: HTMLInputElement
  ): void {
    const newRoom = new HotelRoom(
      parseInt(number.value),
      parseFloat(size.value),
      parseFloat(price.value)
    );

    number.value = '';
    size.value = '';
    price.value = '';

    this.hotelRooms.push(newRoom);
  }

  randomizeRooms(): void {
    for (let i = this.hotelRooms.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.hotelRooms[i];
      this.hotelRooms[i] = this.hotelRooms[j];
      this.hotelRooms[j] = temp;
    }
  }
}
