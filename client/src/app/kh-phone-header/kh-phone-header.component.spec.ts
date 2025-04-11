import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhPhoneHeaderComponent } from './kh-phone-header.component';

describe('KhPhoneHeaderComponent', () => {
  let component: KhPhoneHeaderComponent;
  let fixture: ComponentFixture<KhPhoneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhPhoneHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhPhoneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
