import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DebounceDirective } from './directive/debounce.directive';
import { ThrottleDirective } from './directive/throttle.directive';


@NgModule({
  declarations: [
    DebounceDirective, ThrottleDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [DebounceDirective, ThrottleDirective],
  providers: [],
  bootstrap: []
})
export class DebounceThrottleModule { }
