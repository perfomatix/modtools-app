import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/core/services/search.service';

@Component({
  selector: 'app-generic-view',
  templateUrl: './generic-view.component.html',
  styleUrls: ['./generic-view.component.less']
})
export class GenericViewComponent implements OnInit {
  response: any;
  selectedClientId: number = 60;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getApiResponse();
    this.searchService.storeClientId(this.selectedClientId);
  }

  getApiResponse() {
    this.searchService.getApiResponse().subscribe(response => {
      this.response = response;
    });
  }

  onReload() {
    this.searchService.onReload();
  }

}
