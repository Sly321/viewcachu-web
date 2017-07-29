import { TestBed, inject } from '@angular/core/testing';

import { TvdbapiService } from './tvdbapi.service';

describe('TvdbapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvdbapiService]
    });
  });

  it('should be created', inject([TvdbapiService], (service: TvdbapiService) => {
    expect(service).toBeTruthy();
  }));
});
