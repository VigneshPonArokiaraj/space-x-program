import { TestBed } from '@angular/core/testing';

import { LaunchHistoryService } from './launch-history.service';

describe('LaunchHistoryService', () => {
  let service: LaunchHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
