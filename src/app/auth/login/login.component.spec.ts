import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PublicHeaderComponent } from 'src/app/shared/common/public-header/public-header.component';
import { PublicFooterComponent } from 'src/app/shared/common/public-footer/public-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, PublicHeaderComponent, PublicFooterComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([])],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
