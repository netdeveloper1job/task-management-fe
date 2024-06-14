import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmPopupComponent } from './delete-confirm-popup.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';

describe('DeleteConfirmPopupComponent', () => {
  let component: DeleteConfirmPopupComponent;
  let fixture: ComponentFixture<DeleteConfirmPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteConfirmPopupComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule],
      providers: [
        { provide: BsModalService }
      ],
    });
    fixture = TestBed.createComponent(DeleteConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
