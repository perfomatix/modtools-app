import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPredictionPercentageComponent } from './ai-prediction-percentage.component';

describe('AiPredictionPercentageComponent', () => {
  let component: AiPredictionPercentageComponent;
  let fixture: ComponentFixture<AiPredictionPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiPredictionPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPredictionPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
