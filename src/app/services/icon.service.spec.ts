import { TestBed } from '@angular/core/testing';

import { ProductIconService } from './product-icon.service';

describe('IconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductIconService = TestBed.get(ProductIconService);
    expect(service).toBeTruthy();
  });
});
