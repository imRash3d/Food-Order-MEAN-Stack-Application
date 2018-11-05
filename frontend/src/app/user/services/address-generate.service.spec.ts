import { TestBed, inject } from '@angular/core/testing';

import { AddressGenerateService } from './address-generate.service';

describe('AddressGenerateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressGenerateService]
    });
  });

  it('should be created', inject([AddressGenerateService], (service: AddressGenerateService) => {
    expect(service).toBeTruthy();
  }));
});
