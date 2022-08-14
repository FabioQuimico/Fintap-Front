import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { CompraService } from './compra.service';

describe('CompraService', () => {
  let service: CompraService;

  private clienteSource = new Subject();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
