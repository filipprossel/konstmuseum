import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhEventdetailComponent } from './kh-eventdetail.component';

describe('KhEventdetailComponent', () => {
  let component: KhEventdetailComponent;
  let fixture: ComponentFixture<KhEventdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhEventdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhEventdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
