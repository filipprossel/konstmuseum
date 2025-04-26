import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhArtistshowcaseComponent } from './kh-artistshowcase.component';

describe('KhArtistshowcaseComponent', () => {
  let component: KhArtistshowcaseComponent;
  let fixture: ComponentFixture<KhArtistshowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhArtistshowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhArtistshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
