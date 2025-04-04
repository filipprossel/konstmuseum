import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhLoginComponent } from './kh-login.component';

describe('KhLoginComponent', () => {
  let component: KhLoginComponent;
  let fixture: ComponentFixture<KhLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
