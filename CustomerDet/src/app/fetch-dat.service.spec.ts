import { TestBed } from '@angular/core/testing';

import { FetchDatService } from './fetch-dat.service';

describe('FetchDatService', () => {
  let service: FetchDatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
