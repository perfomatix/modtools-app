import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  searchText: string;
  @Output() searchKeyEntered: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.searchText = 'I really love scrambled eggs. They are the Shiiiiit.';
    this.searchKeyEntered.emit(this.searchText);
  }

  /**
   * @author Sijo Kuriakose
   * @description Key press event
   * @memberof HeaderComponent
   */

  onKeyPressed(keyEvent) {
    // detect enter key press
    if (keyEvent.keyCode === 13) {
      this.searchKeyEntered.emit(this.searchText);
    }
  }

}
