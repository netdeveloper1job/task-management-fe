import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/swagger/providers/services';
import { CommonService } from 'src/app/shared/services/common.service';
import { USERTYPE } from 'src/app/shared/CONSTANTS/user-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form!: FormGroup;
  public submitted: boolean = false;
  public stateData!: { [key: string]: string };
  authorize: boolean;
  loggedInType = USERTYPE;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private Location: Location,
    private _service: AuthService,
    private commonService: CommonService
  ) {
    this.stateData = this.Location.getState() as { [key: string]: string };
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this._service.authControllerLogin({ body: this.form.value }).subscribe(
        (x: any) => {
            if(x.user.loggedInType ===  this.loggedInType.user){
              this.setLocalStorage(x)
              this.router.navigate(['/task/create-task']);
            }
            else{
              this.commonService.showtoaster('Error', 'Unauthorized Credential');
            }
        },
        (err) => {
          this.commonService.showtoaster('Error', 'Invalid email or password');
        }
      );
    }
  }

  setLocalStorage(x: any){
    localStorage.setItem('token', x.access_token);
    localStorage.setItem('user', JSON.stringify(x.user));
    this.commonService.showtoaster('Success', 'Login successfully.');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
