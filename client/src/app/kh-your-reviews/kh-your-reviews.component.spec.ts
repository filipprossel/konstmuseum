import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhYourReviewsComponent } from './kh-your-reviews.component';

describe('KhYourReviewsComponent', () => {
  let component: KhYourReviewsComponent;
  let fixture: ComponentFixture<KhYourReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhYourReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhYourReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
