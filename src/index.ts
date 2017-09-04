import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxHoverOpacityComponent } from './components/ngx-hover-opacity.component';
import { SlugifyObjectKeysPipe } from './pipes/slugify-object-keys.pipe';

export { SlugifyObjectKeysPipe } from './pipes/slugify-object-keys.pipe';
export { NgxHoverOpacityComponent } from './components/ngx-hover-opacity.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxHoverOpacityComponent, SlugifyObjectKeysPipe],
  exports: [NgxHoverOpacityComponent],
})
export class NgxHoverOpacityModule {}
