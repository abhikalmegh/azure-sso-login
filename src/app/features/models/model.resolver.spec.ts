import { TestBed } from '@angular/core/testing';

import { ModelResolver } from './model.resolver';

describe('ModelResolver', () => {
  let resolver: ModelResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ModelResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
