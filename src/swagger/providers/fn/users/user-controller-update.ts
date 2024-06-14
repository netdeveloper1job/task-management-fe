/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserDto } from '../../models/update-user-dto';
import { UserWithResponse } from '../../models/user-with-response';

export interface UserControllerUpdate$Params {
  id: string;
      body: UpdateUserDto
}

export function userControllerUpdate(http: HttpClient, rootUrl: string, params: UserControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<UserWithResponse>> {
  const rb = new RequestBuilder(rootUrl, userControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

userControllerUpdate.PATH = '/user/update/{id}';
