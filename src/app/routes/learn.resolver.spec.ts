import { TestBed } from '@angular/core/testing';

import { LearnResolver } from './learn.routing';

describe('LearnResolver', () => {
  let resolver: LearnResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LearnResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
