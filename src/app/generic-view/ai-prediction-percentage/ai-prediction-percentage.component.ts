import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ai-prediction-percentage',
  templateUrl: './ai-prediction-percentage.component.html',
  styleUrls: ['./ai-prediction-percentage.component.less']
})
export class AiPredictionPercentageComponent implements OnInit {
  @Input() aiPrediction: any;
  constructor() { }

  ngOnInit(): void {
  }

}
