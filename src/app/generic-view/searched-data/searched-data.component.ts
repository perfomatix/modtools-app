import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from '@app/core/constants/app-constants';

@Component({
  selector: 'app-searched-data',
  templateUrl: './searched-data.component.html',
  styleUrls: ['./searched-data.component.less']
})
export class SearchedDataComponent implements OnInit {

  apiResponse: any;
  @Input() set response(value) {
    if (value) {
      this.apiResponse = value;
      this.formatTopics();
    }
  }
  allTopics = AppConstants.topics;
  topicsArr = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @author Sijo Kuriakose
   * @description format topics to fetch keys
   * @memberof HeaderComponent
   */
  formatTopics() {
    this.topicsArr = Object.keys(this.apiResponse && this.apiResponse.topics);
  }

}
