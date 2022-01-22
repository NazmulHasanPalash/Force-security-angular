import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxTreeListComponent } from './dx-tree-list.component';

describe('DxTreeListComponent', () => {
  let component: DxTreeListComponent;
  let fixture: ComponentFixture<DxTreeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxTreeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxTreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
