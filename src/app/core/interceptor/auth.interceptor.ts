import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { finalize, map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private commonService: CommonService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.auth.getToken();
    if (!authToken) {
      return next.handle(request);
    }
    this.commonService.show();
    let modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return next.handle(modifiedRequest).pipe(
      finalize(() => this.commonService.hide()),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.url?.search('svg') === -1)
            event = event.clone({ body: typeof event.body === 'string' ? JSON.parse(event.body) : event.body });
        }
        return event;
      }),
    );
  }
}
