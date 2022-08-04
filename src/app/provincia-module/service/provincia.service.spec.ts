import { TestBed } from '@angular/core/testing';

import { ProvinciaCrudService } from './provincia.crud.service';

describe('ProvinciaService', () => {
  let service: ProvinciaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
