import { Component, Inject, Input, OnInit } from '@angular/core';
import { HotelRoom } from './hotel-room.model';

@Component({
  selector: 'app-hotel-room',
  templateUrl: './hotel-room.component.html',
  styleUrls: ['./hotel-room.component.scss'],
})
export class HotelRoomComponent implements OnInit {
  @Input() hotelRoom: HotelRoom;

  constructor() {}

  ngOnInit(): void {}
}
