import { TestBed } from '@angular/core/testing';

import { CiudadCrudService } from './ciudad.crud.service';

describe('CiudadService', () => {
  let service: CiudadCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
