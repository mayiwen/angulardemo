import {Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {throttleTime} from 'rxjs/operators';

@Directive({
  selector: '[appThrottleClick]'
})
export class ThrottleDirective implements OnInit, OnDestroy {
  @Input() throttleTime = 500;
  @Output() throttleClick = new EventEmitter();
  private clicks = new Subject<any>();
  private subscription: Subscription = new Subscription();
  constructor() { }
  ngOnInit() {
    this.subscription = this.clicks
      .pipe(throttleTime(this.throttleTime))
      .subscribe(e => this.throttleClick.emit(e));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}

