import { TestBed } from '@angular/core/testing';

import { ExchangeHousesService } from './exchange-houses.service';

describe('ExchangeHousesService', () => {
  let service: ExchangeHousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeHousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
