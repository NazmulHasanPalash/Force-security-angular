import { TestBed } from '@angular/core/testing';

import { ApiDxListService } from './api-dx-list.service';

describe('ApiDxListService', () => {
  let service: ApiDxListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDxListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
