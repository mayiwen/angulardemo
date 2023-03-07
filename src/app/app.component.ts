import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  url = /^[1-9]\d{0,2}(\.\d{1,4})?$|^0(\.\d{1,4})?$/
  profileForm = this.fb.group({
    test: ['', [ Validators.required, this.forbiddenNameValidator(this.url)]],
  });
  get test(): FormGroup {
    return this.profileForm.get('test') as unknown as FormGroup
  }
  constructor(private fb: FormBuilder) {

  }
  /** A hero's name can't match the given regular expression */
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
  test1() {
    console.log(this.profileForm)
    console.log(this.test)
    console.log(this.test.value)
  }
  bulrInput(e: any) {
    if (this.url.test(e.target.value)) {
      let arr = e.target.value.split('.')
      console.log(arr)
      if (arr.length === 1) {
        e.target.value = e.target.value + '.0000'
      } else {
        let length = 4 - arr[1].length;
        let str = ''
        for (let index = 0; index < length; index++) {
          str += '0'
        }
        e.target.value = arr[0] + '.' + arr[1] + str
      
      }
    }
    console.log('这是blur')
    console.log(e.target.value)
    console.log()
    this.profileForm.patchValue({test: e.target.value})
    
  }
}
