import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhPostComponent } from './kh-post.component';

describe('KhPostComponent', () => {
  let component: KhPostComponent;
  let fixture: ComponentFixture<KhPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
