import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/core/services/search.service';
import { Languages } from 'src/constants'

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
  selectedClient = this.clients[0].id;
  selectedLanguage = 'en';
  languages = Languages;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getApiResponse();
  }

  /**
   * @author Sijo Kuriakose
   * @description retrieve api response
   */

  getApiResponse() {
    this.searchService.getApiResponse().subscribe(response => {
      this.response = response;
    });
  }

  /**
   * @author Sijo Kuriakose
   * @description reload
   */

  onReload() {
    this.searchService.onReload();
  }

  /**
   * @author Sijo Kuriakose
   * @description on client id change
   */
  onClientChanged() {
    this.searchService.storeClientId(this.selectedClient);
  }

  /**
   * @author Sijo Kuriakose
   * @description on language change
   */
  onLanguageChanged() {
    this.searchService.storeLanguage(this.selectedLanguage);
  }

}
