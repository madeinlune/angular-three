// GENERATED
import {
  ContentChild,
  Directive,
  Input,
  NgModule,
  NgZone,
} from '@angular/core';
import * as THREE from 'three';
import { NgtInstancesStore } from '../stores/instances.store';
import { NgtGeometry } from '../three/geometry';
import { Controller, createControllerProviderFactory } from './controller';

@Directive({
  selector: `
    ngt-mesh,
    ngt-instanced-mesh,
    ngt-skinned-mesh,
    ngt-line,
    ngt-line-loop,
    ngt-line-segments,
  `,
  exportAs: 'ngtContentGeometryController',
})
export class NgtContentGeometryController extends Controller {
  @ContentChild(NgtGeometry)
  set geometryDirective(v: NgtGeometry) {
    if (this.geometry == null && v) {
      this.geometry = v.geometry;
    }
  }

  #geometryInput?: string | THREE.BufferGeometry | undefined;

  @Input() set geometry(v: string | THREE.BufferGeometry | undefined) {
    if (v) {
      this.#geometryInput = v;
      this.construct();
    }
  }

  get geometry() {
    return this.#geometry;
  }

  #geometry: THREE.BufferGeometry | undefined = undefined;

  constructor(ngZone: NgZone, private instancesStore: NgtInstancesStore) {
    super(ngZone);
  }

  construct() {
    this.#geometry = this.#getGeometry(this.#geometryInput);
  }

  #getGeometry(
    input: string | THREE.BufferGeometry | undefined
  ): THREE.BufferGeometry | undefined {
    if (input) {
      if (input instanceof THREE.BufferGeometry) {
        return input;
      }

      return this.instancesStore.getImperativeState().geometries[input];
    }

    return undefined;
  }

  get controller(): Controller | undefined {
    return undefined;
  }

  get props(): string[] {
    return [];
  }
}

@NgModule({
  declarations: [NgtContentGeometryController],
  exports: [NgtContentGeometryController],
})
export class NgtContentGeometryControllerModule {}

export const [
  NGT_CONTENT_GEOMETRY_WATCHED_CONTROLLER,
  NGT_CONTENT_GEOMETRY_CONTROLLER_PROVIDER,
] = createControllerProviderFactory({
  controller: NgtContentGeometryController,
  watchedControllerTokenName: 'Watched ContentGeometryController',
});
