import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedDataComponent } from './searched-data.component';

describe('SearchedDataComponent', () => {
  let component: SearchedDataComponent;
  let fixture: ComponentFixture<SearchedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
