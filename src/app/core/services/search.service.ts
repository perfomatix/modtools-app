import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiUrl } from '@core/constants/api-url';
import { SearchInput } from '@core/models/search-input.model'
import { SearchParam } from '@core/models/search-param.model'

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  public response = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) { }
  
  classifyText(requestBody: SearchInput, params: SearchParam): Observable<any> {
    const reqUrl = `${ApiUrl.classifyText}?extended=${params.extended}`;
    return this.httpClient.post(reqUrl, requestBody);
  }

  storeApiResponse(resp) {
    this.response.next(resp);
  }

  getApiResponse() {
    return this.response.asObservable();
  }

}
