/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TaskWithResponse } from '../../models/task-with-response';

export interface TasksControllerFilterAndSearchTasks$Params {
  filter: string;
  id: number;
  searchQuery: string;
}

export function tasksControllerFilterAndSearchTasks(http: HttpClient, rootUrl: string, params: TasksControllerFilterAndSearchTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
  const rb = new RequestBuilder(rootUrl, tasksControllerFilterAndSearchTasks.PATH, 'get');
  if (params) {
    rb.path('filter', params.filter, {});
    rb.path('id', params.id, {});
    rb.path('searchQuery', params.searchQuery, {});
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

tasksControllerFilterAndSearchTasks.PATH = '/task/filterAndSearchTasks/{filter}/{id}/{searchQuery}';
