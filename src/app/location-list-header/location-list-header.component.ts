import { Component, Output, EventEmitter } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-list-header',
  templateUrl: './location-list-header.component.html',
  styleUrls: ['./location-list-header.component.css']
})
export class LocationListHeaderComponent {

  newLocation: Location = new Location();

  @Output()
  add: EventEmitter<Location> = new EventEmitter();

  constructor() {
  }

  addLocation() {
    this.add.emit(this.newLocation);
    this.newLocation = new Location();
  }

}
