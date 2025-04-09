import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhFooterComponent } from './kh-footer.component';

describe('KhFooterComponent', () => {
  let component: KhFooterComponent;
  let fixture: ComponentFixture<KhFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
