import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { UserControllerUploadFile$Params } from 'src/swagger/providers/fn/users/user-controller-upload-file';
import { UsersService } from 'src/swagger/providers/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  form: FormGroup;
  userDetails: any = [];
  profileUrl: string = '';
  userId: string;
  env = environment.api_url;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.userId = res['id'];
    });
    this.createForm();
    this.getUserDetails();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      contactNo: [''],
      profileImage: [''],
    });
  }

  detectFiles(event: any) {
    const formData = new FormData();
    if (event.target.files[0]) {
      formData.append(
        'file',
        event.target.files[0],
        event.target.files[0].name
      );
      const params: UserControllerUploadFile$Params = {
        body: {
          file: formData.get('file') as Blob,
        },
      };
      this.userService.userControllerUploadFile(params).subscribe(
        (res: any) => {
          this.profileUrl = `${res.filePath}`;
        },
        (err) => {
          this.toastr.error(err.error);
        }
      );
    }
  }

  updateProfileImage() {
    let json = {
      name: this.userDetails.name,
      email: this.userDetails.email,
      password: this.userDetails.password,
      contactNo: this.userDetails.contactNo,
      loggedInType: this.userDetails.loggedInType,
      profileImage: this.profileUrl ?? this.userDetails.profileImage,
    };
    this.userService
      .userControllerUpdate({ id: this.userId, body: json })
      .subscribe(
        (res: any) => {
          let data = {
            contactNo: res.data.contactNo,
            createdAt: res.data.createdAt,
            email: res.data.email,
            id: res.data.id,
            loggedInType: res.data.loggedInType,
            name: res.data.name,
            profileImage: res.data.profileImage,
            updatedAt: res.data.updatedAt,
          };
          this.profileUrl = '';
          localStorage.setItem('user', JSON.stringify(data));
          this.getUserDetails();
          this.form.controls['profileImage'].reset();
          this.toastr.success('Image upload sucessfully');
        },
        (error) => {
          this.toastr.error(error.error);
        }
      );
  }

  getUserDetails() {
    this.userService.userControllerFindOne({ id: this.userId }).subscribe(
      (res: any) => {
        this.userDetails = res.data;
        console.log('userDetails',this.userDetails)
        this.form.patchValue({
          name: this.userDetails.name,
          email: this.userDetails.email,
          contactNo: this.userDetails.contactNo,
        });
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  backToTask() {
    this.router.navigate(['/task/create-task']);
  }
}
