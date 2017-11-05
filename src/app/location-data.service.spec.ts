/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {LocationDataService} from './location-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('LocationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocationDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([LocationDataService], (service: LocationDataService) => {
    expect(service).toBeTruthy();
  }));

});
