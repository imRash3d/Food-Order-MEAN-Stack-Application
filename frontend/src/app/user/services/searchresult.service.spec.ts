import { TestBed, inject } from '@angular/core/testing';

import { SearchresultService } from './searchresult.service';

describe('SearchresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchresultService]
    });
  });

  it('should be created', inject([SearchresultService], (service: SearchresultService) => {
    expect(service).toBeTruthy();
  }));
});
