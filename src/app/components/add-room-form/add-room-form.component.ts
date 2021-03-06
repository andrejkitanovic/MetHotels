import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { HotelRoom } from '../hotel-room/hotel-room.model';
import { Observable } from 'rxjs';
import { increment } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-add-room-form',
  templateUrl: './add-room-form.component.html',
  styleUrls: ['./add-room-form.component.scss'],
})
export class AddRoomFormComponent implements OnInit {
  public roomForm: FormGroup;
  @Output() roomToAdd: EventEmitter<HotelRoom>;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.roomToAdd = new EventEmitter();
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.initForm();
  }

  uniqueValidator(control: FormControl) {
    const app = new AppComponent();

    const rooms = app.getRooms();
    const found = rooms.some(
      (el: any) => el.number === parseInt(control.value)
    );

    if (!found) return null;

    return { invalidNumber: found };
  }

  public initForm() {
    this.roomForm = new FormGroup({
      number: new FormControl(
        '',
        Validators.compose([Validators.required, this.uniqueValidator])
      ),
      size: new FormControl('', [Validators.required, Validators.min(20)]),
      price: new FormControl('', [Validators.required]),
    });

    this.roomForm.controls['number'].valueChanges.subscribe((value: string) => {
      console.log('form ', this.roomForm);
    });
  }

  public submitForm() {
    let number = this.roomForm.get('number')?.value;
    let size = this.roomForm.get('size')?.value;
    let price = this.roomForm.get('price')?.value;
    console.log(this.roomForm);

    let room = new HotelRoom(number, size, price);
    this.roomToAdd.emit(room);

    this.store.dispatch(increment());
  }
}
