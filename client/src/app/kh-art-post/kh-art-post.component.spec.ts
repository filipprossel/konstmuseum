import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhArtPostComponent } from './kh-art-post.component';

describe('KhArtPostComponent', () => {
  let component: KhArtPostComponent;
  let fixture: ComponentFixture<KhArtPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhArtPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhArtPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
