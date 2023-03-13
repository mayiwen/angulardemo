import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent {
  title = 'angulardemo';
  addForm =  this.fb.group({
    array: this.fb.array([
      this.fb.group({
        name: 'zs',
        age: '15',
        array: this.fb.array([])
      }),
    ]),
  })
  arrayForm = this.fb.array([
    this.fb.group({
      name: 'zs',
      age: '15'
    }),
    this.fb.group({
      name: 'ws',
      age: '18',
      array: this.fb.array([])
    }),
  ])
  get array() {
    return this.addForm.get('array') as FormArray;
  }
  constructor(private fb: FormBuilder) {

  }
  add() {
    this.array.push(
      this.fb.group({
        name: '15',
        age: '16'
      })
    )
  }
}
