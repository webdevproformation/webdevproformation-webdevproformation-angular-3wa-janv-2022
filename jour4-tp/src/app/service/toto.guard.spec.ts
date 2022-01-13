import { TestBed } from '@angular/core/testing';

import { TotoGuard } from './toto.guard';

describe('TotoGuard', () => {
  let guard: TotoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TotoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
