import { TestBed } from '@angular/core/testing';

import { ServiceDocenteService } from './service-docente.service';

describe('ServiceDocenteService', () => {
  let service: ServiceDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
