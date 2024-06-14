import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ALPHA_NUMERIC_ONLY } from './validators.utils';

export function AlphaNumericValidator(control: AbstractControl) {
  if (control.value && !control.value.match(ALPHA_NUMERIC_ONLY)) {
    return { alphaNumeric: true };
  }
  return null;
}

export function onlyNumberValidator(control: AbstractControl) {
  const value = control.value;

  if (value === null || value === undefined || value === '') {
    return null; // Allow empty values
  }

  const isNumberValid = /^\d+$/.test(value); // Regular expression to match only numbers

  return isNumberValid ? null : { onlyNumbers: true };
}

export function startEndNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startNumber = control.get('startNumber')?.value;
    const endNumber = control.get('endNumber')?.value;
    if (
      startNumber !== null &&
      endNumber !== null &&
      Number(startNumber) >= Number(endNumber)
    ) {
      return { startEndNumber: true };
    }

    return null;
  };
}
