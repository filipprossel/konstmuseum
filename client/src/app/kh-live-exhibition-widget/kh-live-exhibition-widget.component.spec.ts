import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhLiveExhibitionWidgetComponent } from './kh-live-exhibition-widget.component';

describe('KhLiveExhibitionWidgetComponent', () => {
  let component: KhLiveExhibitionWidgetComponent;
  let fixture: ComponentFixture<KhLiveExhibitionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhLiveExhibitionWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhLiveExhibitionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
