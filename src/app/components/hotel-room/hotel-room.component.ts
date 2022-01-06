import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { HotelRoom } from './hotel-room.model';

@Component({
  selector: 'app-hotel-room',
  templateUrl: './hotel-room.component.html',
  styleUrls: ['./hotel-room.component.scss'],
})
export class HotelRoomComponent implements OnInit {
  @Output() roomToDelete: EventEmitter<HotelRoom>;
  @Output() updateRoom: EventEmitter<HotelRoom>;
  @Input() hotelRoom: HotelRoom;

  constructor() {
    this.roomToDelete = new EventEmitter();
    this.updateRoom = new EventEmitter();
  }

  ngOnInit(): void {}

  public deleteRoomHandler(): void {
    this.roomToDelete.emit(this.hotelRoom);
  }

  public updateRoomHandler(): void {
    this.updateRoom.emit(this.hotelRoom);
  }
}
