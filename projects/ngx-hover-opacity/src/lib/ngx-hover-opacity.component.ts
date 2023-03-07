import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Nilable } from 'tsdef';

export interface INgxHoverOpacityComponentCustomStyle {
  backgroundColor: string;
  zIndex: number;
}

@Component({
  selector: 'ngx-hover-opacity',
  templateUrl: './ngx-hover-opacity.component.html',
  styleUrls: ['./ngx-hover-opacity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgxHoverOpacityComponent {
  @Input() isHoverVisible: Nilable<boolean>;
  @Input() isFullHeight = true;
  @Input() style: Nilable<INgxHoverOpacityComponentCustomStyle>;
}
