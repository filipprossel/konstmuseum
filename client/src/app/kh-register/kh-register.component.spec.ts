import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhRegisterComponent } from './kh-register.component';

describe('KhRegisterComponent', () => {
  let component: KhRegisterComponent;
  let fixture: ComponentFixture<KhRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
