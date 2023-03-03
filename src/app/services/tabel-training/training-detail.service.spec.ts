import { TestBed } from '@angular/core/testing';

import { TrainingDetailService } from './training-detail.service';

describe('TrainingDetailService', () => {
  let service: TrainingDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
