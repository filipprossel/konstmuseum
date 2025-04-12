import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhEventComponent } from './kh-event.component';

describe('KhEventComponent', () => {
  let component: KhEventComponent;
  let fixture: ComponentFixture<KhEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
