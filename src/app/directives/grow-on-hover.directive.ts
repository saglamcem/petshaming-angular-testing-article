import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[growOnHover]'
})
export class GrowOnHoverDirective {
  @HostBinding('style.transform') scale = 'inherit';
  @HostBinding('style.transition') duration = '0.4s';

  @HostListener('mouseover') onHover(): void {
    this.scale = 'scale(1.5)';
  }

  @HostListener('mouseout') onLeave(): void {
    this.scale = 'inherit';
  }
}
