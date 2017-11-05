import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Location } from './location';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllLocations(): Observable<Location[]> {
    return this.http
      .get(API_URL + '/locations')
      .map(response => {
        const locations = response.json();
        return locations.map((location) => new Location(location));
      })
      .catch(this.handleError);
  }

  public createLocation(location: Location): Observable<Location> {
    return this.http
      .post(API_URL + '/locations', location)
      .map(response => {
        return new Location(response.json());
      })
      .catch(this.handleError);
  }

  public getLocationById(locationId: number): Observable<Location> {
    return this.http
      .get(API_URL + '/locations/' + locationId)
      .map(response => {
        return new Location(response.json());
      })
      .catch(this.handleError);
  }

  public updateLocation(location: Location): Observable<Location> {
    return this.http
      .put(API_URL + '/locations/' + location.id, location)
      .map(response => {
        return new Location(response.json());
      })
      .catch(this.handleError);
  }

  public deleteLocationById(locationId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/locations/' + locationId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
