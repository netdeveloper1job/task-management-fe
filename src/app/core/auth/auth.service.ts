import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  permission: any;
  // userDetails = JSON.parse(localStorage.getItem('user') ?? '');
  constructor(
    private router: Router,
    public toaster: ToastrService,
    public http: HttpClient
  ) {}
  private currentUser: any;
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  hasRole(role: string): boolean {
    this.currentUser = JSON.parse(localStorage.getItem('user') ?? '');
    return this.currentUser && this.currentUser.userType && this.currentUser.userType.includes(role);
  }
}
