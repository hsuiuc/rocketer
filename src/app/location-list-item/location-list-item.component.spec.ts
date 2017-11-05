/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocationListItemComponent } from './location-list-item.component';
import { Location } from '../location';

describe('LocationListItemComponent', () => {
  let component: LocationListItemComponent;
  let fixture: ComponentFixture<LocationListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListItemComponent);
    component = fixture.componentInstance;
    component.location = new Location({ id: 1, address: 'Test', hidden: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
