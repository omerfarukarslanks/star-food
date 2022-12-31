import { TestBed } from '@angular/core/testing';

import { NewOrderResolver } from './new-order.resolver';

describe('NewOrderResolver', () => {
  let resolver: NewOrderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewOrderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
