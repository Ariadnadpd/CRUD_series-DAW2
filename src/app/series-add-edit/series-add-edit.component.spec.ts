import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAddEditComponent } from './series-add-edit.component';

describe('SeriesAddEditComponent', () => {
  let component: SeriesAddEditComponent;
  let fixture: ComponentFixture<SeriesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
