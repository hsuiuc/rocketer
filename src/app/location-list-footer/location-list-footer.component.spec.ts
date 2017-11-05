/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocationListFooterComponent } from './location-list-footer.component';
import { Location } from '../location';

describe('LocationListFooterComponent', () => {
  let component: LocationListFooterComponent;
  let fixture: ComponentFixture<LocationListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListFooterComponent);
    component = fixture.componentInstance;
    component.locations = [
      new Location({ id: 1, title: 'Test', complete: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
