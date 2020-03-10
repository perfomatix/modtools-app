import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiUrl } from '@core/api-constants/api-url';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private httpClient: HttpClient) { }
  
  searchService(searchString: string) {
    return this.httpClient.post(ApiUrl.classifyText, searchString);
  }

}
