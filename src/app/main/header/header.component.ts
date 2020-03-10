import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/shared-components/user.service';
import { User } from '@app/shared-components/user';
import { SearchService } from '@app/core/services/search.service';
import { SearchParam } from '@app/core/models/search-param.model';
import { SearchInput } from '@app/core/models/search-input.model';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user:User

  constructor(
    public UserService: UserService,
    private searchService: SearchService  
  ) { }

  async ngOnInit() {
    this.user = await this.UserService.me();
  }

  onUserChangedClient (newClient:number) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.lastClientId = newClient;
    this.UserService.preferences = prefs;
  }

  onUserChangedLanguage (newLanguage:string) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.language = newLanguage;
    this.UserService.preferences = prefs;
  }

  /**
   * @author Sijo Kuriakose
   * @description search api function
   * @memberof HeaderComponent
   */
  onSearch (event) {
    console.log(event);
    let requestBody: SearchInput = {
      
    };
    let params: SearchParam = {
      extended: true
    };
    this.searchService.classifyText().subscribe(data => {
      console.log(data);
    })
  }

}
