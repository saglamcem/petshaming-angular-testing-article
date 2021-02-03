import { Directive, HostBinding, HostListener } from '@angular/core';

// an idea for testing this directive here: https://www.youtube.com/watch?v=GsSpiwSFwp8
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
