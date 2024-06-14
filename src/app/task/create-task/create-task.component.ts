import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DeleteConfirmPopupComponent } from 'src/app/shared/delete-confirm-popup/delete-confirm-popup.component';
import { columnsModel } from 'src/app/shared/interface/common';
import { TasksService } from 'src/swagger/providers/services';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  bodyTemplate: any;
  form: FormGroup;
  submitted: boolean = false;
  userDetails = JSON.parse(localStorage.getItem('user') as string);
  dataSource: any = [];
  modalRef: BsModalRef;
  buttonType: string = 'Save';
  taskId: string;
  filterValue: string = 'all';
  sortingValue: string;
  public columns: Array<columnsModel> = [
    {
      caption: 'S.No',
      dataField: 'sNumber',
      isTemplate: false,
    },
    {
      caption: 'Title',
      dataField: 'title',
      isTemplate: false,
    },
    {
      caption: 'Description',
      dataField: 'description',
      isTemplate: false,
    },
    {
      caption: 'Status',
      dataField: 'status',
      isTemplate: false,
    },
    {
      caption: 'Date',
      dataField: 'createdAt',
      isTemplate: true,
    },
    {
      caption: 'due Date',
      dataField: 'dueDate',
      isTemplate: true,
    },
    {
      caption: 'Action',
      dataField: 'Action',
      isTemplate: true,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getAllTask();
  }

  createForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  save() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.buttonType === 'Save') {
      this.taskService
        .tasksControllerCreate({
          body: { ...this.form.value, userId: this.userDetails.id },
        })
        .subscribe(
          (res) => {
            this.submitted = false;
            this.resetForm();
            this.getAllTask();
            this.toastr.success('Add successfully');
          },
          (error) => {
            this.toastr.error(error.error);
          }
        );
    } else {
      this.taskService
        .tasksControllerUpdate({
          id: this.taskId,
          body: { ...this.form.value, userId: this.userDetails.id },
        })
        .subscribe(
          (res) => {
            this.submitted = false;
            this.resetForm();
            this.getAllTask();
            this.buttonType = 'Save';
            this.toastr.success('Update successfully');
          },
          (error) => {
            this.toastr.error(error.error);
          }
        );
    }
  }

  getAllTask() {
    this.taskService
      .tasksControllerGetTasksByUserId({
        id: this.userDetails.id,
      })
      .subscribe(
        (res: any) => {
          if (Array.isArray(res.data)) {
            this.dataSource = res.data;
            this.dataSource.forEach(
              (x: { sNumber: number }, i: number) => (x.sNumber = i + 1)
            );
          }
        },
        (error) => {
          this.toastr.error(error.error);
        }
      );
  }

  editTask(item: any) {
    this.taskId = item.id;
    this.buttonType = 'Update';
    this.form.patchValue(item);
  }

  cancel() {
    this.resetForm();
    this.buttonType = 'Save';
  }

  deleteTask(id: string) {
    this.modalRef = this.modalService.show(DeleteConfirmPopupComponent, {
      class: 'modal-dialog-centered',
    });
    this.modalRef.content.onHidden.subscribe((result: any) => {
      if (result === 'yes') {
        this.taskService.tasksControllerRemove({ id: id }).subscribe(
          (res) => {
            this.getAllTask();
          },
          (error) => {
            this.toastr.error(error.error);
          }
        );
      }
    });
  }

  resetForm() {
    this.form.reset();
    this.form.patchValue({ status: '' });
  }

  filter() {
    const value = this.filterValue;
    this.taskService
      .tasksControllerFilterTask({ filter: value, id: this.userDetails.id })
      .subscribe(
        (res: any) => {
          this.dataSource = res.data;
          this.dataSource.forEach(
            (x: { sNumber: number }, i: number) => (x.sNumber = i + 1)
          );
          if(this.sortingValue){
            this.sorting(this.sortingValue)
          }
        },
        (error) => {
          this.toastr.error(error.error);
        }
      );
  }

  search(event: any) {
    const value = event.target.value;
    this.taskService
      .tasksControllerFilterAndSearchTasks({
        filter: this.filterValue,
        id: this.userDetails.id,
        searchQuery: value || 'null',
      })
      .subscribe(
        (res: any) => {
          this.dataSource = res.data;
          this.dataSource.forEach(
            (x: { sNumber: number }, i: number) => (x.sNumber = i + 1)
          );
        },
        (error) => {
          this.toastr.error(error.error);
        }
      );
  }

  sorting(event: any) {
    const value = event?.target?.value;
    this.sortingValue = value;
    if (this.sortingValue === 'asc') {
      this.dataSource = this.dataSource.sort((a: any, b: any) => {
        return <any>new Date(a.id) - <any>new Date(b.id);
      });
    } else {
      this.dataSource = this.dataSource.sort((a: any, b: any) => {
        return <any>new Date(b.id) - <any>new Date(a.id);
      });
    }
    this.dataSource.forEach(
      (x: { sNumber: number }, i: number) => (x.sNumber = i + 1)
    );
  }
}
