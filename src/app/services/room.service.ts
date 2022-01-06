import { Injectable } from '@angular/core';
import { HotelRoom } from '../components/hotel-room/hotel-room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor() {}

  getPrice(numberOfNights: number, room: HotelRoom) {
    return room.price * numberOfNights;
  }
}