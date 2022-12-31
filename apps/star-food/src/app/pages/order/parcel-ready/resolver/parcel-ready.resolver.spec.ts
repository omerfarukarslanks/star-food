import { TestBed } from '@angular/core/testing';

import { ParcelReadyResolver } from './parcel-ready.resolver';

describe('ParcelReadyResolver', () => {
  let resolver: ParcelReadyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ParcelReadyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
