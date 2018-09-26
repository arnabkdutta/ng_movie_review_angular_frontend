import { TestBed } from '@angular/core/testing';

import { FetchMovieRecordsService } from './fetch-movie-records.service';

describe('FetchMovieRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchMovieRecordsService = TestBed.get(FetchMovieRecordsService);
    expect(service).toBeTruthy();
  });
});
