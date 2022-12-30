import { TestBed } from '@angular/core/testing';

import { AcceptedOrderResolver } from './accepted-order.resolver';

describe('AcceptedOrderResolver', () => {
  let resolver: AcceptedOrderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AcceptedOrderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
