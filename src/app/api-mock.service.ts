import { Injectable } from '@angular/core';
import { Location } from './location';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllLocations(): Observable<Location[]> {
    return Observable.of([
      new Location({id: 1, address: 'Sieble Center', hidden: false})
    ]);
  }

  public createLocation(location: Location): Observable<Location> {
    return Observable.of(
      new Location({id: 1, address: 'Sieble Center', hidden: false})
    );
  }

  public getLocationById(locationId: number): Observable<Location> {
    return Observable.of(
      new Location({id: 1, address: 'Sieble Center', hidden: false})
    );
  }

  public updateLocation(location: Location): Observable<Location> {
    return Observable.of(
      new Location({id: 1, address: 'Sieble Center', hidden: false})
    );
  }

  public deleteLocationById(locationId: number): Observable<null> {
    return null;
  }
}
