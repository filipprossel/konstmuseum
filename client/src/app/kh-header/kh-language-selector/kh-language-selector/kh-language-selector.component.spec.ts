import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhLanguageSelectorComponent } from './kh-language-selector.component';

describe('KhLanguageSelectorComponent', () => {
  let component: KhLanguageSelectorComponent;
  let fixture: ComponentFixture<KhLanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhLanguageSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
