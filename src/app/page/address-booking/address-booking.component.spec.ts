import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookingComponent } from './address-booking.component';

describe('AddressBookingComponent', () => {
  let component: AddressBookingComponent;
  let fixture: ComponentFixture<AddressBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
