import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhHeaderComponent } from './kh-header.component';

describe('KhHeaderComponent', () => {
  let component: KhHeaderComponent;
  let fixture: ComponentFixture<KhHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
