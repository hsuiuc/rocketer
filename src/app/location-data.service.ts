import { Injectable } from '@angular/core';
import { Location } from './location';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationDataService {

  constructor(
    private api: ApiMockService
  ) {
  }

  // Simulate POST /locations
  addLocation(location: Location): Observable<Location> {
    return this.api.createLocation(location);
  }

  // Simulate DELETE /locations/:id
  deleteLocationById(locationId: number): Observable<Location> {
    return this.api.deleteLocationById(locationId);
  }

  // Simulate PUT /locations/:id
  updateLocation(location: Location): Observable<Location> {
    return this.api.updateLocation(location);
  }

  // Simulate GET /locations
  getAllLocations(): Observable<Location[]> {
    return this.api.getAllLocations();
  }

  // Simulate GET /locations/:id
  getLocationById(locationId: number): Observable<Location> {
    return this.api.getLocationById(locationId);
  }

  // Toggle hidden
  toggleLocationHidden(location: Location) {
    location.hidden = !location.hidden;
    return this.api.updateLocation(location);
  }

}
