/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TaskWithResponse } from '../../models/task-with-response';
import { UpdateTaskDto } from '../../models/update-task-dto';

export interface TasksControllerUpdate$Params {
  id: string;
      body: UpdateTaskDto
}

export function tasksControllerUpdate(http: HttpClient, rootUrl: string, params: TasksControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
  const rb = new RequestBuilder(rootUrl, tasksControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

tasksControllerUpdate.PATH = '/task/update/{id}';
