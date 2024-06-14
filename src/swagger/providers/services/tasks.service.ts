/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { tasksControllerCreate } from '../fn/tasks/tasks-controller-create';
import { TasksControllerCreate$Params } from '../fn/tasks/tasks-controller-create';
import { tasksControllerFilterAndSearchTasks } from '../fn/tasks/tasks-controller-filter-and-search-tasks';
import { TasksControllerFilterAndSearchTasks$Params } from '../fn/tasks/tasks-controller-filter-and-search-tasks';
import { tasksControllerFilterTask } from '../fn/tasks/tasks-controller-filter-task';
import { TasksControllerFilterTask$Params } from '../fn/tasks/tasks-controller-filter-task';
import { tasksControllerFindAll } from '../fn/tasks/tasks-controller-find-all';
import { TasksControllerFindAll$Params } from '../fn/tasks/tasks-controller-find-all';
import { tasksControllerFindOne } from '../fn/tasks/tasks-controller-find-one';
import { TasksControllerFindOne$Params } from '../fn/tasks/tasks-controller-find-one';
import { tasksControllerGetTasksByUserId } from '../fn/tasks/tasks-controller-get-tasks-by-user-id';
import { TasksControllerGetTasksByUserId$Params } from '../fn/tasks/tasks-controller-get-tasks-by-user-id';
import { tasksControllerRemove } from '../fn/tasks/tasks-controller-remove';
import { TasksControllerRemove$Params } from '../fn/tasks/tasks-controller-remove';
import { tasksControllerUpdate } from '../fn/tasks/tasks-controller-update';
import { TasksControllerUpdate$Params } from '../fn/tasks/tasks-controller-update';
import { TaskWithResponse } from '../models/task-with-response';

@Injectable({ providedIn: 'root' })
export class TasksService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tasksControllerCreate()` */
  static readonly TasksControllerCreatePath = '/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tasksControllerCreate$Response(params: TasksControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tasksControllerCreate(params: TasksControllerCreate$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerFindAll()` */
  static readonly TasksControllerFindAllPath = '/task/{search}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFindAll$Response(params: TasksControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFindAll(params: TasksControllerFindAll$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerFindOne()` */
  static readonly TasksControllerFindOnePath = '/task/taskById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFindOne$Response(params: TasksControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFindOne(params: TasksControllerFindOne$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerUpdate()` */
  static readonly TasksControllerUpdatePath = '/task/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tasksControllerUpdate$Response(params: TasksControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tasksControllerUpdate(params: TasksControllerUpdate$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerRemove()` */
  static readonly TasksControllerRemovePath = '/task/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerRemove$Response(params: TasksControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerRemove(params: TasksControllerRemove$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerGetTasksByUserId()` */
  static readonly TasksControllerGetTasksByUserIdPath = '/task/getTasksByUserId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerGetTasksByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerGetTasksByUserId$Response(params: TasksControllerGetTasksByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerGetTasksByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerGetTasksByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerGetTasksByUserId(params: TasksControllerGetTasksByUserId$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerGetTasksByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerFilterTask()` */
  static readonly TasksControllerFilterTaskPath = '/task/filterByStatus/{filter}/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerFilterTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFilterTask$Response(params: TasksControllerFilterTask$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerFilterTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerFilterTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFilterTask(params: TasksControllerFilterTask$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerFilterTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

  /** Path part for operation `tasksControllerFilterAndSearchTasks()` */
  static readonly TasksControllerFilterAndSearchTasksPath = '/task/filterAndSearchTasks/{filter}/{id}/{searchQuery}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksControllerFilterAndSearchTasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFilterAndSearchTasks$Response(params: TasksControllerFilterAndSearchTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskWithResponse>> {
    return tasksControllerFilterAndSearchTasks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tasksControllerFilterAndSearchTasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tasksControllerFilterAndSearchTasks(params: TasksControllerFilterAndSearchTasks$Params, context?: HttpContext): Observable<TaskWithResponse> {
    return this.tasksControllerFilterAndSearchTasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskWithResponse>): TaskWithResponse => r.body)
    );
  }

}
