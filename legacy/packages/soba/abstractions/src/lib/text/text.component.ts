import {
  applyProps,
  NGT_OBJECT_3D_CONTROLLER_PROVIDER,
  NgtColor,
  NgtCommonMesh,
  NgtCoreModule,
  NgtObject3d,
  NgtPrimitiveModule,
  NgtVector4,
} from '@angular-three/core';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
// @ts-ignore
import { Text as TextMeshImpl } from 'troika-three-text';
import { NgtSobaTextContent } from './text-content.directive';

@Component({
  selector: 'ngt-soba-text',
  exportAs: 'ngtSobaText',
  template: `
    <ng-container *ngIf="object3d">
      <ngt-primitive [object]="object3d" (ready)="onTroikaTextReady($event)">
        <ng-content></ng-content>
      </ngt-primitive>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NgtObject3d, useExisting: NgtSobaText },
    NGT_OBJECT_3D_CONTROLLER_PROVIDER,
  ],
})
export class NgtSobaText
  extends NgtCommonMesh<TextMeshImpl>
  implements OnChanges, OnDestroy, OnInit
{
  @Input() color?: NgtColor;
  @Input() fontSize?: number;
  @Input() maxWidth?: number;
  @Input() lineHeight?: number;
  @Input() letterSpacing?: number;
  @Input() textAlign?: 'left' | 'right' | 'center' | 'justify';
  @Input() font?: string;
  @Input() anchorX: number | 'left' | 'center' | 'right' = 'center';
  @Input() anchorY:
    | number
    | 'top'
    | 'top-baseline'
    | 'middle'
    | 'bottom-baseline'
    | 'bottom' = 'middle';
  @Input() clipRect?: NgtVector4;
  @Input() depthOffset?: number;
  @Input() direction?: 'auto' | 'ltr' | 'rtl';
  @Input() overflowWrap?: 'normal' | 'break-word';
  @Input() whiteSpace?: 'normal' | 'overflowWrap' | 'overflowWrap';
  @Input() outlineWidth?: number | string;
  @Input() outlineOffsetX?: number | string;
  @Input() outlineOffsetY?: number | string;
  @Input() outlineBlur?: number | string;
  @Input() outlineColor?: NgtColor;
  @Input() outlineOpacity?: number;
  @Input() strokeWidth?: number | string;
  @Input() strokeColor?: NgtColor;
  @Input() strokeOpacity?: number;
  @Input() fillOpacity?: number;
  @Input() debugSDF?: boolean;

  @Output() sync = new EventEmitter<TextMeshImpl>();

  @ContentChild(NgtSobaTextContent, { static: true })
  textContent!: NgtSobaTextContent;

  ngOnInit() {
    if (!this.textContent) {
      console.warn(
        '<ngt-text> should have a <ngt-soba-text-content> as a content child.'
      );
    }
  }

  ngOnChanges() {
    this.ngZone.runOutsideAngular(() => {
      if (this.object3d && this.textContent) {
        this.object3d.sync(() => {
          this.sync.emit(this.object3d);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.ngZone.runOutsideAngular(() => {
      if (this.object3d && this.textContent) {
        this.object3d.dispose();
      }
    });
  }

  meshType = TextMeshImpl;

  onTroikaTextReady(troikaText: TextMeshImpl) {
    this.ngZone.runOutsideAngular(() => {
      if (this.textContent) {
        troikaText.text = this.textContent.text;
        applyProps(troikaText, {
          color: this.color,
          fontSize: this.fontSize,
          maxWidth: this.maxWidth,
          lineHeight: this.lineHeight,
          letterSpacing: this.letterSpacing,
          textAlign: this.textAlign,
          font: this.font,
          anchorX: this.anchorX,
          anchorY: this.anchorY,
          clipRect: this.clipRect,
          depthOffset: this.depthOffset,
          direction: this.direction,
          overflowWrap: this.overflowWrap,
          whiteSpace: this.whiteSpace,
          outlineWidth: this.outlineWidth,
          outlineOffsetX: this.outlineOffsetX,
          outlineOffsetY: this.outlineOffsetY,
          outlineBlur: this.outlineBlur,
          outlineColor: this.outlineColor,
          outlineOpacity: this.outlineOpacity,
          strokeWidth: this.strokeWidth,
          strokeColor: this.strokeColor,
          strokeOpacity: this.strokeOpacity,
          fillOpacity: this.fillOpacity,
          debugSDF: this.debugSDF,
        });
      }
    });
  }
}

@NgModule({
  declarations: [NgtSobaText, NgtSobaTextContent],
  exports: [NgtSobaText, NgtSobaTextContent],
  imports: [NgtPrimitiveModule, NgtCoreModule, CommonModule],
})
export class NgtSobaTextModule {}
