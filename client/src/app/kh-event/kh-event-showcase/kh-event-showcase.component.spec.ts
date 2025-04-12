import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhEventShowcaseComponent } from './kh-event-showcase.component';

describe('KhEventShowcaseComponent', () => {
  let component: KhEventShowcaseComponent;
  let fixture: ComponentFixture<KhEventShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhEventShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhEventShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
