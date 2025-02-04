import {
  Directive,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import * as THREE from 'three';
import type { AnyConstructor } from '../models';
import { NgtGeometry } from './geometry';

@Directive()
export abstract class NgtAttribute<
  TAttribute extends
    | THREE.BufferAttribute
    | THREE.InterleavedBufferAttribute = THREE.BufferAttribute
> implements OnInit, OnChanges, OnDestroy
{
  @Input() attach?: THREE.BuiltinShaderAttributeName;

  abstract attributeType: AnyConstructor<TAttribute>;

  constructor(
    protected ngZone: NgZone,
    @Optional() protected geometryDirective?: NgtGeometry
  ) {}

  private _extraArgs: unknown[] = [];

  protected set extraArgs(v: unknown[]) {
    this._extraArgs = v;
    this.ngZone.runOutsideAngular(() => {
      this.init();
    });
  }

  private _attribute?: TAttribute;
  private defaultValue?: TAttribute;

  ngOnChanges() {
    this.ngZone.runOutsideAngular(() => {
      if (this.attribute) {
        this.attribute.needsUpdate = true;
      }
    });
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      if (!this.attribute) {
        this.init();
      }
    });
  }

  private init() {
    if (this.geometryDirective && this.attach) {
      this._attribute = new this.attributeType(...this._extraArgs);
      if (this.attribute) {
        this.defaultValue = this.geometryDirective.geometry.attributes[
          this.attach
        ] as TAttribute;
        this.geometryDirective.geometry.setAttribute(
          this.attach,
          this.attribute
        );
      }
    }
  }

  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      if (this.geometryDirective && this.attach) {
        if (this.defaultValue !== undefined) {
          this.geometryDirective.geometry.setAttribute(
            this.attach,
            this.defaultValue
          );
        } else {
          this.geometryDirective.geometry.deleteAttribute(this.attach);
        }
      }
    });
  }

  get attribute(): TAttribute | undefined {
    return this._attribute;
  }
}
