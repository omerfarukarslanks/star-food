import { TestBed } from '@angular/core/testing';

import { CookingResolver } from './cooking.resolver';

describe('CookingResolver', () => {
  let resolver: CookingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CookingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
