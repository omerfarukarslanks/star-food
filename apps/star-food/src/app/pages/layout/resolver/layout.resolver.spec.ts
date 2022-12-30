import { TestBed } from '@angular/core/testing';

import { LayoutResolver } from './layout.resolver';

describe('LayouttResolver', () => {
  let resolver: LayoutResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LayoutResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
