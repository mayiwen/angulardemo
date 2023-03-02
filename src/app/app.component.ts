import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder],
})
export class AppComponent {
  title = 'angulardemo';
  addForm = this.fb.group({
    array: this.fb.array([
      this.fb.group({
        name: 'zs',
        age: '15',
        array: this.fb.array([
          this.fb.group({
            hello: 1,
            test: 2,
          }),
        ]),
      }),
      this.fb.group({
        name: 'ws',
        age: '18',
        array: this.fb.array([]),
      }),
    ]),
  });
  get array() {
    return this.addForm.get('array') as FormArray;
  }
  constructor(private fb: FormBuilder) {}
  add() {
    this.array.push(
      this.fb.group({
        name: '15',
        age: '16',
        array: this.fb.array([
          this.fb.group({
            hello: 1,
            test: 2,
          }),
        ]),
      })
    );
  }
  itemtt(item: any) {
    console.log(item);
    let array = item.get('array') as FormArray;
   
    console.log(array)
    for (let index = array.value.length - 1; index >= 0; index--) {
      array.removeAt(index)
    }
    setTimeout(() => {
      let arr = [
        {
          hello: 3,
          test: 4,
        },
        {
          hello: 5,
          test: 6,
        },
      ];

      array.push(this.fb.group({
        hello: 5,
        test: 6,
      }));
      arr.forEach(item => array.push(this.fb.group(item)))
      // array.push(this.fb.group(arr.map(item => this.fb.group(item))));
    }, 200);
  }
}
