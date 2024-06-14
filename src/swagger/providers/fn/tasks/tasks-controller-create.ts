/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTaskDto } from '../../models/create-task-dto';
import { TaskWithResponse } from '../../models/task-with-response';

export interface TasksControllerCreate$Params {
      body: CreateTaskDto
}

export function tasksControllerCreate(http: HttpClient, rootUrl: string, params: TasksControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
  const rb = new RequestBuilder(rootUrl, tasksControllerCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TaskWithResponse>;
    })
  );
}

tasksControllerCreate.PATH = '/task';
