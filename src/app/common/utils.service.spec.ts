import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { SpaceXService } from './space-x.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



describe('SpaceXService', () => {
  let service: SpaceXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
