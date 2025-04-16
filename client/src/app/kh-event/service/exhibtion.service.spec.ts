import { TestBed } from '@angular/core/testing';

import { ExhibtionService } from './exhibtion.service';

describe('ExhibtionService', () => {
  let service: ExhibtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
