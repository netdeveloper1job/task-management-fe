/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { userControllerCreate } from '../fn/users/user-controller-create';
import { UserControllerCreate$Params } from '../fn/users/user-controller-create';
import { userControllerFindAll } from '../fn/users/user-controller-find-all';
import { UserControllerFindAll$Params } from '../fn/users/user-controller-find-all';
import { userControllerFindOne } from '../fn/users/user-controller-find-one';
import { UserControllerFindOne$Params } from '../fn/users/user-controller-find-one';
import { userControllerRemove } from '../fn/users/user-controller-remove';
import { UserControllerRemove$Params } from '../fn/users/user-controller-remove';
import { userControllerUpdate } from '../fn/users/user-controller-update';
import { UserControllerUpdate$Params } from '../fn/users/user-controller-update';
import { userControllerUploadFile } from '../fn/users/user-controller-upload-file';
import { UserControllerUploadFile$Params } from '../fn/users/user-controller-upload-file';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userControllerCreate()` */
  static readonly UserControllerCreatePath = '/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerCreate$Response(params: UserControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerCreate(params: UserControllerCreate$Params, context?: HttpContext): Observable<void> {
    return this.userControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerFindAll()` */
  static readonly UserControllerFindAllPath = '/user/{search}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindAll$Response(params?: UserControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindAll(params?: UserControllerFindAll$Params, context?: HttpContext): Observable<void> {
    return this.userControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerFindOne()` */
  static readonly UserControllerFindOnePath = '/user/userById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindOne$Response(params: UserControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindOne(params: UserControllerFindOne$Params, context?: HttpContext): Observable<void> {
    return this.userControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerUpdate()` */
  static readonly UserControllerUpdatePath = '/user/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerUpdate$Response(params: UserControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerUpdate(params: UserControllerUpdate$Params, context?: HttpContext): Observable<void> {
    return this.userControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerRemove()` */
  static readonly UserControllerRemovePath = '/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerRemove$Response(params: UserControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerRemove(params: UserControllerRemove$Params, context?: HttpContext): Observable<void> {
    return this.userControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerUploadFile()` */
  static readonly UserControllerUploadFilePath = '/user/uploadImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerUploadFile()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userControllerUploadFile$Response(params: UserControllerUploadFile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerUploadFile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerUploadFile$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userControllerUploadFile(params: UserControllerUploadFile$Params, context?: HttpContext): Observable<void> {
    return this.userControllerUploadFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
