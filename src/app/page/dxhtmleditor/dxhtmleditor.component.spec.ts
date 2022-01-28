import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxhtmleditorComponent } from './dxhtmleditor.component';

describe('DxhtmleditorComponent', () => {
  let component: DxhtmleditorComponent;
  let fixture: ComponentFixture<DxhtmleditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxhtmleditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxhtmleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
