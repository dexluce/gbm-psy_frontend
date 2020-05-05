import { Directive, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appClickPreventPropagation]'
})
export class ClickPreventPropagationDirective {
  subscription: Subscription;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    this.subscription = fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click')
    .subscribe(event => {
      event.stopPropagation();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}