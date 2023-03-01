import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent {
  title = 'angulardemo';
  hello () {
    console.log('这是hello的事件')
  }
  
}
