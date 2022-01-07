import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelRoomComponent } from './components/hotel-room/hotel-room.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { AddRoomFormComponent } from './components/add-room-form/add-room-form.component';
import { RoomService } from './services/room.service';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { ChangeColorDirective } from './directives/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HotelRoomComponent,
    FilterPipePipe,
    AddRoomFormComponent,
    ChangeColorDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
