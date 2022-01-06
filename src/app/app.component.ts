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

  public getRooms() {
    return this.hotelRooms;
  }

  addRoom(room: HotelRoom): void {
    this.hotelRooms.unshift(new HotelRoom(room.number, room.size, room.price));
  }

  randomizeRooms(): void {
    for (let i = this.hotelRooms.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.hotelRooms[i];
      this.hotelRooms[i] = this.hotelRooms[j];
      this.hotelRooms[j] = temp;
    }
  }

  public deleteRoom(room: HotelRoom) {
    this.hotelRooms = this.hotelRooms.filter((item) => {
      return item.number !== room.number;
    });

    const form = document.querySelector('.form.update-room');
    form && form.classList.remove('active');
  }

  public setUpdateFormValues(room: HotelRoom) {
    const form = document.querySelector('.form.update-room');
    const roomNumber = document.getElementById('room-number');

    (<HTMLInputElement>(
      document.getElementById('numberToChange')
    )).value = room.number.toString();
    (<HTMLInputElement>(
      document.getElementById('update-size')
    )).value = room.size.toString();
    (<HTMLInputElement>(
      document.getElementById('update-price')
    )).value = room.price.toString();

    if (roomNumber) {
      roomNumber.textContent = ` #${room.number}`;
    }

    form && form.classList.add('active');
  }

  public updateRoomHandler(
    number: HTMLInputElement,
    size: HTMLInputElement,
    price: HTMLInputElement
  ) {
    const form = document.querySelector('.form.update-room');
    const num = parseInt(number.value);

    const foundRoomIndex = this.hotelRooms.findIndex((el) => el.number === num);

    this.hotelRooms[foundRoomIndex].price = parseFloat(price.value);
    this.hotelRooms[foundRoomIndex].size = parseFloat(size.value);
    form && form.classList.remove('active');
  }
}
