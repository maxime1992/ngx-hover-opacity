import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

export interface INgxHoverOpacityComponentCustomStyle {
  backgroundColor: string;
  zIndex: number;
}

@Component({
  selector: 'ngx-hover-opacity',
  template: `
    <div class="content" [class.is-full-height]="isFullHeight">
      <ng-content></ng-content>

      <div
        class="hover"
        *ngIf="isHoverVisible"
      ></div>
    </div>
  `,
  styles: [
    `
      ngx-hover-opacity .content {
        position: relative;
      }

      ngx-hover-opacity .content.is-full-height {
        min-height: 100%;
      }

      ngx-hover-opacity .hover {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgxHoverOpacityComponent {
  @Input() isHoverVisible: boolean;
  @Input() isFullHeight = true;
  @Input() style: INgxHoverOpacityComponentCustomStyle;
}
