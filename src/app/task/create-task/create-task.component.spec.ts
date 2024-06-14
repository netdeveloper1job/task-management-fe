import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { CreateTaskComponent } from './create-task.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TasksService } from 'src/swagger/providers/services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { of, throwError } from 'rxjs';
import { TaskWithResponse } from 'src/swagger/providers/models';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let taskService: jasmine.SpyObj<TasksService>;
  let toastrService: ToastrService;
  let taskResponse: TaskWithResponse;
  let formValue = {
    description: 'Testing',
    dueDate: '2024-06-14',
    status: 'To Do',
    title: 'title',
  };
  let errorMessage: 'Api Failed';
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      imports: [
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
      ],
      providers: [
        { provide: TasksService },
        { provide: BsModalService },
        { provide: ToastrService },
      ],
    });
    fixture = TestBed.createComponent(CreateTaskComponent);
    taskService = TestBed.inject(TasksService) as jasmine.SpyObj<TasksService>;
    toastrService = TestBed.inject(ToastrService);
    component = fixture.componentInstance;
    component.userDetails = { id: 1 };
    component.dataSource = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tasks and set dataSource correctly', () => {
    const mockTasks = {
      data: [
        {
          id: 1,
          description: 'Testing',
          dueDate: '2024-06-14',
          status: 'To Do',
          title: 'title',
          createdAt: '2024-06-12T12:42:46.253Z',
          updatedAt: '2024-06-14T04:52:24.000Z',
          user: {
            id: 1,
            name: 'user1',
            email: 'user1@gmail.com',
            password: '123456',
            contactNo: '9999999999',
            profileImage: 'upload/5e61f254-fb99-45a7-a210-36773f1c6fb3.jpg',
            loggedInType: 'User',
            createdAt: '2024-06-12T11:18:36.462Z',
            updatedAt: '2024-06-14T04:51:04.000Z',
          },
          userId: 1,
        },
      ],
      message: 'Resource(s) found : Tasks',
    };
    component.dataSource = mockTasks.data;
    spyOn(taskService, 'tasksControllerGetTasksByUserId').and.returnValue(
      of(mockTasks)
    );
    component.getAllTask();
    expect(taskService.tasksControllerGetTasksByUserId).toHaveBeenCalledWith({
      id: 1,
    });
    expect(component.dataSource).toEqual(mockTasks.data);
  });

  it('should not add task if form is invalid', () => {
    // Arrange
    spyOn(taskService, 'tasksControllerCreate').and.callThrough();
    component.save();
    expect(taskService.tasksControllerCreate).not.toHaveBeenCalled();
  });

  it('should add task if form is valid', () => {
    component.buttonType = 'Save';
    component.form.setValue(formValue);
    spyOn(taskService, 'tasksControllerCreate').and.returnValue(
      of(taskResponse)
    );
    spyOn(component, 'getAllTask').and.callThrough();
    spyOn(component.form, 'reset').and.callThrough();
    component.save();
    expect(taskService.tasksControllerCreate).toHaveBeenCalled();
    expect(component.getAllTask).toHaveBeenCalled();
    expect(component.submitted).toBe(false);
  });

  it('should update task if form is valid', () => {
    component.buttonType = 'Update';
    component.form.setValue(formValue);
    spyOn(taskService, 'tasksControllerUpdate').and.returnValue(
      of(taskResponse)
    );
    spyOn(component, 'getAllTask').and.callThrough();
    component.save();
    expect(taskService.tasksControllerUpdate).toHaveBeenCalled();
    expect(component.getAllTask).toHaveBeenCalled();
    expect(component.submitted).toBe(false);
    expect(component.buttonType).toBe('Save');
  });

  it('should handle error when API call fails on create', () => {
    component.buttonType = 'Save';
    const mockError = { error: 'Error message' };
    spyOn(taskService, 'tasksControllerCreate').and.returnValue(
      throwError(mockError)
    );
    spyOn(toastrService, 'error');
    component.form.setValue(formValue);
    component.userDetails = { id: 1 };
    component.save();
    expect(toastrService.error).toHaveBeenCalledWith('Error message');
  });

  it('should handle error when API call fails on update', () => {
    component.buttonType = 'Update';
    const mockError = { error: 'Error message' };
    spyOn(taskService, 'tasksControllerUpdate').and.returnValue(
      throwError(mockError)
    );
    spyOn(toastrService, 'error');
    component.form.setValue(formValue);
    component.userDetails = { id: 1 };
    component.save();
    expect(toastrService.error).toHaveBeenCalledWith('Error message');
  });

  // call cancel function
  it('should call cancel function in task', () => {
    spyOn(component, 'resetForm').and.callThrough();
    component.cancel();
    expect(component.resetForm).toHaveBeenCalled();
    expect(component.buttonType).toBe('Save');
  });

  // call edit function
  it('should call edit function in task', () => {
    let data = {
      id: 1,
      description: 'Testing',
      dueDate: '2024-06-14',
      status: 'To Do',
      title: 'title',
      createdAt: '2024-06-12T12:42:46.253Z',
      updatedAt: '2024-06-14T04:52:24.000Z',
      user: {
        id: 1,
        name: 'user1',
        email: 'user1@gmail.com',
        password: '123456',
        contactNo: '9999999999',
        profileImage: 'upload/5e61f254-fb99-45a7-a210-36773f1c6fb3.jpg',
        loggedInType: 'User',
        createdAt: '2024-06-12T11:18:36.462Z',
        updatedAt: '2024-06-14T04:51:04.000Z',
      },
      userId: 1,
    };
    component.editTask(data);
    expect(component.taskId).toBeGreaterThanOrEqual(1);
    expect(component.form.patchValue(data));
  });

  // call delete function
  it('should not delete task', () => {
    const id = '44';
    spyOn(taskService, 'tasksControllerRemove').and.callThrough();
    component.deleteTask(id);
    expect(taskService.tasksControllerRemove).not.toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
