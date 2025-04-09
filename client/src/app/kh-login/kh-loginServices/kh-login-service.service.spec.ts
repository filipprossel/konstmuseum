import { TestBed } from '@angular/core/testing';

import { KhLoginServiceService } from './kh-login-service.service';

describe('KhLoginServiceService', () => {
  let service: KhLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
