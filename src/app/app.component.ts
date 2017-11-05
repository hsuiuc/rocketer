import { Component, OnInit } from '@angular/core';
import { LocationDataService } from './location-data.service';
import { Location } from './location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationDataService]
})
export class AppComponent implements OnInit {

  locations: Location[] = [];

  constructor(
    private locationDataService: LocationDataService
  ) {
  }

  public ngOnInit() {
    this.locationDataService
      .getAllLocations()
      .subscribe(
        (locations) => {
          this.locations = locations;
        }
      );
  }

  onAddLocation(location) {
    this.locationDataService
      .addLocation(location)
      .subscribe(
        (newLocation) => {
          this.locations = this.locations.concat(newLocation);
        }
      );
  }

  onToggleLocationHidden(location) {
    this.locationDataService
      .toggleLocationHidden(location)
      .subscribe(
        (updatedLocation) => {
          location = updatedLocation;
        }
      );
  }

  onRemoveLocation(location) {
    this.locationDataService
      .deleteLocationById(location.id)
      .subscribe(
        (_) => {
          this.locations = this.locations.filter((t) => t.id !== location.id);
        }
      );
  }
}
