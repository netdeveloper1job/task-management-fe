/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserWithResponse } from '../../models/user-with-response';

export interface UserControllerUploadFile$Params {
      body: {
'file'?: Blob;
}
}

export function userControllerUploadFile(http: HttpClient, rootUrl: string, params: UserControllerUploadFile$Params, context?: HttpContext): Observable<StrictHttpResponse<UserWithResponse>> {
  const rb = new RequestBuilder(rootUrl, userControllerUploadFile.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

userControllerUploadFile.PATH = '/user/uploadImage';
