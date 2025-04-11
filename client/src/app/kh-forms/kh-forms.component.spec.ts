import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhFormsComponent } from './kh-forms.component';

describe('KhFormsComponent', () => {
  let component: KhFormsComponent;
  let fixture: ComponentFixture<KhFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
