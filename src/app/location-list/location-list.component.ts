import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '../location';

@Component(
  {
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.css']
  }
)
export class LocationListComponent {

  @Input()
  locations: Location[];

  @Output()
  remove: EventEmitter<Location> = new EventEmitter();

  @Output()
  toggleHidden: EventEmitter<Location> = new EventEmitter();

  constructor() {
  }

  onToggleLocationHidden(location: Location) {
    this.toggleHidden.emit(location);
  }

  onRemoveLocation(location: Location) {
    this.remove.emit(location);
  }

}
