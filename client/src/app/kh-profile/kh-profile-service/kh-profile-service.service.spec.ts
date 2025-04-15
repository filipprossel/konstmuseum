import { TestBed } from '@angular/core/testing';

import { KhProfileServiceService } from './kh-profile-service.service';

describe('KhProfileServiceService', () => {
  let service: KhProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
