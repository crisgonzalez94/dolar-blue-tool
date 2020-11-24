import { TestBed } from '@angular/core/testing';

import { ExchangeValueService } from './exchange-value.service';

describe('ExchangeValueService', () => {
  let service: ExchangeValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
