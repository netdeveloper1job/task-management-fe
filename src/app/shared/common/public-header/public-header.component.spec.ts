import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHeaderComponent } from './public-header.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('PublicHeaderComponent', () => {
  let component: PublicHeaderComponent;
  let fixture: ComponentFixture<PublicHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHeaderComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, RouterModule.forRoot([])],
      providers: [
        { provide: AuthService }
      ],
    });
    fixture = TestBed.createComponent(PublicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
