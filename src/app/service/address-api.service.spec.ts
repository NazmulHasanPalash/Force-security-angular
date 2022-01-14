import { TestBed } from '@angular/core/testing';

import { AddressAPIService } from './address-api.service';

describe('AddressAPIService', () => {
  let service: AddressAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
