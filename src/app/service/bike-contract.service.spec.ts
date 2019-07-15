import { TestBed } from '@angular/core/testing';

import { BikeContractService } from './bike-contract.service';

describe('BikeContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeContractService = TestBed.get(BikeContractService);
    expect(service).toBeTruthy();
  });
});
