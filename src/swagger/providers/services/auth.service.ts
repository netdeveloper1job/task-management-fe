/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerLogin } from '../fn/auth/auth-controller-login';
import { AuthControllerLogin$Params } from '../fn/auth/auth-controller-login';
import { LoginResponseDto } from '../models/login-response-dto';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerLogin()` */
  static readonly AuthControllerLoginPath = '/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerLogin$Response(params: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponseDto>> {
    return authControllerLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerLogin(params: AuthControllerLogin$Params, context?: HttpContext): Observable<LoginResponseDto> {
    return this.authControllerLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponseDto>): LoginResponseDto => r.body)
    );
  }

}
