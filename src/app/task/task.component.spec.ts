import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../core/auth/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [ToastrModule.forRoot(),SharedModule, RouterModule.forRoot([]), HttpClientModule, BrowserAnimationsModule],
      providers: [
        { provide: AuthService },{ provide: ToastrService }
      ],
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
