import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment'
import { RequestHeader } from '@app/core/models/request-header.model';
import { tap } from 'rxjs/operators';

export class AppHttpInterceptor implements HttpInterceptor {

  requestHeaders: RequestHeader;
  apiUrl = environment.apiBaseUrl;

  constructor() {
    this.requestHeaders = {
      contentType: 'application/json',
    };
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    if (req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.delete('Content-Type'),
      });
    } else {
      req = req.clone({
        headers: req.headers.set('Content-Type', this.requestHeaders.contentType),
      });
    }
    // setting the accept header
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    req = req.clone({
      url: `${this.apiUrl}${req.url}`
    });
    return next.handle(req);
  }

}
