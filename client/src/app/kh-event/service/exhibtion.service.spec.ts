import { TestBed } from '@angular/core/testing';

import { ExhibitionService } from './exhibtion.service';

describe('ExhibtionService', () => {
  let service: ExhibitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
