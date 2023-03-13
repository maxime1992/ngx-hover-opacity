import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoverOpacityTplDirective, NgxHoverOpacityComponent } from './ngx-hover-opacity.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxHoverOpacityComponent, HoverOpacityTplDirective],
  exports: [NgxHoverOpacityComponent, HoverOpacityTplDirective],
})
export class NgxHoverOpacityModule {}
