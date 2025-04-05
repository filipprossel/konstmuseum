import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhHomepageComponent } from './kh-homepage.component';

describe('KhHomepageComponent', () => {
  let component: KhHomepageComponent;
  let fixture: ComponentFixture<KhHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
