import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhTestpageComponent } from './kh-testpage.component';

describe('KhTestpageComponent', () => {
  let component: KhTestpageComponent;
  let fixture: ComponentFixture<KhTestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhTestpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhTestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
