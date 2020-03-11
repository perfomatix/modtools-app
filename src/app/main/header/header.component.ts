import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/shared-components/user.service';
import { User } from '@app/shared-components/user';
import { SearchService } from '@app/core/services/search.service';
import { SearchParam } from '@app/core/models/search-param.model';
import { SearchInput } from '@app/core/models/search-input.model';
import { AppConstants } from '@core/constants/app-constants'

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user:User
  clientId: number;
  searchString: string;
  selectedLangCode: string;

  constructor(
    public UserService: UserService,
    private searchService: SearchService  
  ) { }

  async ngOnInit() {
    this.subscribeToReload();
    this.subscribeToChangeInClientId();
    this.subscribeToLanguageChange();
    this.user = await this.UserService.me();
  }

  /**
   * @author Sijo Kuriakose
   * @description client id subscription
   * @memberof HeaderComponent
   */
  subscribeToChangeInClientId() {
    this.searchService.getClientId().subscribe(clientId => {
      if (clientId) {
        this.clientId = clientId;
        this.onSearch(this.searchString);
      }
    })
  }

  /**
   * @author Sijo Kuriakose
   * @description reload subscription
   * @memberof HeaderComponent
   */
  subscribeToReload() {
    this.searchService.getReload().subscribe(data => {
      if (data) {
        this.onSearch(this.searchString);
      }
    }) 
  }

  onUserChangedClient (newClient:number) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    this.UserService.preferences.lastClientId = newClient;
    this.UserService.preferences = this.UserService.preferences;
  }

  onUserChangedLanguage (newLanguage:string) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    this.UserService.preferences.language = newLanguage;
    this.UserService.preferences = this.UserService.preferences;
  }

  /**
   * @author Sijo Kuriakose
   * @description search api function
   * @memberof HeaderComponent
   */
  onSearch (searchString) {
    this.searchString = searchString;
    let requestBody: SearchInput = {
      clientId: this.clientId ? this.clientId : 60,
      language: this.selectedLangCode ? this.selectedLangCode : 'en', 
      text: searchString,
      contentType: AppConstants.contentType.shortText
    };
    let params: SearchParam = {
      extended: true
    };
    this.searchService.classifyText(requestBody, params).subscribe(data => {
      this.searchService.storeApiResponse(data);
    })
  }

  /**
   * @author Sijo Kuriakose
   * @description language change subscription
   * @memberof HeaderComponent
   */
  subscribeToLanguageChange() {
    this.searchService.getLanguage().subscribe(language =>{
      if (language) {
        this.selectedLangCode = language;
        this.onSearch(this.searchString);
      }
    })
  }

}
