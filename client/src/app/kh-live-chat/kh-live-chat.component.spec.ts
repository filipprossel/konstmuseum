import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhLiveChatComponent } from './kh-live-chat.component';

describe('KhLiveChatComponent', () => {
  let component: KhLiveChatComponent;
  let fixture: ComponentFixture<KhLiveChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhLiveChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhLiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
