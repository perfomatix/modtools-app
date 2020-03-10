import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/core/services/search.service';

@Component({
  selector: 'app-generic-view',
  templateUrl: './generic-view.component.html',
  styleUrls: ['./generic-view.component.less']
})
export class GenericViewComponent implements OnInit {
  response: any;
  clients = [
    { id: 60,  name: 'Live' },
    { id: 61,  name: 'Sandbox' }
  ]
  selectedClient = this.clients[0];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getApiResponse();
  }

  /**
   * @author Sijo Kuriakose
   * @description retrieve api response
   * @memberof HeaderComponent
   */

  getApiResponse() {
    this.searchService.getApiResponse().subscribe(response => {
      this.response = response;
    });
  }

  /**
   * @author Sijo Kuriakose
   * @description reload
   * @memberof HeaderComponent
   */

  onReload() {
    this.searchService.onReload();
  }

}
