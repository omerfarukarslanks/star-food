import { TestBed } from '@angular/core/testing';

import { CompletedResolver } from './completed.resolver';

describe('CompletedResolver', () => {
  let resolver: CompletedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompletedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
