import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxDiagramComponent } from './dx-diagram.component';

describe('DxDiagramComponent', () => {
  let component: DxDiagramComponent;
  let fixture: ComponentFixture<DxDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
