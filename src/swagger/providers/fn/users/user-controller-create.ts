/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateUserDto } from '../../models/create-user-dto';
import { UserWithResponse } from '../../models/user-with-response';

export interface UserControllerCreate$Params {
      body: CreateUserDto
}

export function userControllerCreate(http: HttpClient, rootUrl: string, params: UserControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<UserWithResponse>> {
  const rb = new RequestBuilder(rootUrl, userControllerCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserWithResponse>;
    })
  );
}

userControllerCreate.PATH = '/user';
