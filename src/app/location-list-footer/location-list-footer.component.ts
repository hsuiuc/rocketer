import { Component, Input } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-list-footer',
  templateUrl: './location-list-footer.component.html',
  styleUrls: ['./location-list-footer.component.css']
})
export class LocationListFooterComponent {

  @Input()
  locations: Location[];

  constructor() {
  }

}
