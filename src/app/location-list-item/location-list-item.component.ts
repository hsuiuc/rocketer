import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.css']
})
export class LocationListItemComponent {

  @Input() location: Location;

  @Output()
  remove: EventEmitter<Location> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Location> = new EventEmitter();

  constructor() {
  }

  toggleLocationComplete(location: Location) {
    this.toggleComplete.emit(location);
  }

  removeLocation(location: Location) {
    this.remove.emit(location);
  }

}
