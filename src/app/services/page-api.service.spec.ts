import { TestBed } from '@angular/core/testing';

import { PageApiService } from './page-api.service';

describe('PageApiService', () => {
  let service: PageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
