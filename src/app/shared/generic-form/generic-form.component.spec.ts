import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormComponent } from './generic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GenericFormComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
