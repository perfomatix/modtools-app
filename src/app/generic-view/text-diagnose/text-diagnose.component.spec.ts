import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDiagnoseComponent } from './text-diagnose.component';

describe('TextDiagnoseComponent', () => {
  let component: TextDiagnoseComponent;
  let fixture: ComponentFixture<TextDiagnoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDiagnoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
