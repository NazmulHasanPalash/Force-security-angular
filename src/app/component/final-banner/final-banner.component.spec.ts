import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBannerComponent } from './final-banner.component';

describe('FinalBannerComponent', () => {
  let component: FinalBannerComponent;
  let fixture: ComponentFixture<FinalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
