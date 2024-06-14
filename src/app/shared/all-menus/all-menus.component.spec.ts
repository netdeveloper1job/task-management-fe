import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenusComponent } from './all-menus.component';
import { RouterModule } from '@angular/router';

describe('AllMenusComponent', () => {
  let component: AllMenusComponent;
  let fixture: ComponentFixture<AllMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMenusComponent],
      imports: [RouterModule.forRoot([])]
    });
    fixture = TestBed.createComponent(AllMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
