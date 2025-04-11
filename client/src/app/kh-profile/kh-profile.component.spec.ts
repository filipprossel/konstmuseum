import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KhProfileComponent } from './kh-profile.component';

describe('KhProfileComponent', () => {
  let component: KhProfileComponent;
  let fixture: ComponentFixture<KhProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
