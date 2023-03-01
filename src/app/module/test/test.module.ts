import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DebounceThrottleModule } from '../debounceThrottling/debounce-throttling.module';
import { TestComponent } from './component/test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    DebounceThrottleModule,
    
  ],
  exports: [TestComponent],
  providers: [],
  bootstrap: [TestComponent]
})
export class TestModule { }
