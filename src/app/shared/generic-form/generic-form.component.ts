import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

interface FormControlConfig {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validators?: ValidatorFn[];
  options?: { value: string; label: string }[];
  value?: any;
  validationMessage?: string;
  rowColumns?: number[];
}

interface FormDesignConfig {
  buttonColor?: string;
  buttonFontSize?: string;
  labelColor?: string;
}

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent {
  @Input() controls: {
    rowColumns: number[];
    controls: FormControlConfig[];
  }[] = [];
  @Input() design: FormDesignConfig = {};
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const formControls: { [key: string]: any } = {};
    for (const row of this.controls) {
      for (const control of row.controls) {
        const validators = this.getValidators(control);
        formControls[control.name] = [control.value || '', validators];
      }
    }

    this.form = this.fb.group(formControls);
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

  private getValidators(control: FormControlConfig): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (control.required) {
      validators.push(Validators.required);
    }
    if (control.validators) {
      validators.push(...control.validators);
    }
    return validators;
  }

  // Function to get the grid column template based on the specified number of columns
  getGridColumnTemplate(rowColumns: number[]): string {
    return rowColumns ? `repeat(${rowColumns.join(', ')}, 1fr)` : 'auto'; // Default to 'auto' if rowColumns is not specified
  }
}
