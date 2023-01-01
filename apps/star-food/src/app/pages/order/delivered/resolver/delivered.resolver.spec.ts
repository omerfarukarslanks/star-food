import { TestBed } from '@angular/core/testing';

import { DeliveredResolver } from './delivered.resolver';

describe('DeliveredResolver', () => {
  let resolver: DeliveredResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DeliveredResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
