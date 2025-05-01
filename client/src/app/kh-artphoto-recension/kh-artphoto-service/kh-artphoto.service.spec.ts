import { TestBed } from '@angular/core/testing';

import { KhArtphotoService } from './kh-artphoto.service';

describe('KhArtphotoService', () => {
  let service: KhArtphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhArtphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
