import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhArtphotoRecensionComponent } from './kh-artphoto-recension.component';

describe('KhArtphotoRecensionComponent', () => {
  let component: KhArtphotoRecensionComponent;
  let fixture: ComponentFixture<KhArtphotoRecensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhArtphotoRecensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhArtphotoRecensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
