// GENERATED
import {
  Directive,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  OnInit,
} from '@angular/core';
import * as THREE from 'three';
import { AnyConstructor, AnyExtenderFunction, UnknownRecord } from '../types';
import {
  NGT_CONTENT_GEOMETRY_CONTROLLER_PROVIDER,
  NGT_CONTENT_GEOMETRY_WATCHED_CONTROLLER,
  NgtContentGeometryController,
} from './content-geometry.controller';
import {
  NGT_CONTENT_MATERIAL_CONTROLLER_PROVIDER,
  NGT_CONTENT_MATERIAL_WATCHED_CONTROLLER,
  NgtContentMaterialController,
} from './content-material.controller';
import { Controller, createControllerProviderFactory } from './controller';
import {
  NGT_OBJECT_CONTROLLER_PROVIDER,
  NGT_OBJECT_WATCHED_CONTROLLER,
  NgtObject3dController,
} from './object-3d.controller';

export const NGT_OBJECT_TYPE = new InjectionToken('Object3d Type', {
  providedIn: 'root',
  factory: () => THREE.Object3D,
});

export const NGT_OBJECT_POST_INIT = new InjectionToken('Object3d PostInit', {
  providedIn: 'root',
  factory: () => undefined,
});

@Directive({
  selector: `
    ngt-mesh,
    ngt-instanced-mesh,
    ngt-skinned-mesh,
    ngt-line,
    ngt-line-loop,
    ngt-line-segments,
    ngt-points
  `,
  exportAs: 'ngtMaterialGeometryController',
  providers: [
    NGT_OBJECT_CONTROLLER_PROVIDER,
    NGT_CONTENT_MATERIAL_CONTROLLER_PROVIDER,
    NGT_CONTENT_GEOMETRY_CONTROLLER_PROVIDER,
  ],
})
export class NgtMaterialGeometryController
  extends Controller
  implements OnInit
{
  #meshArgs: unknown[] = [];
  set meshArgs(v: unknown | unknown[]) {
    this.#meshArgs = Array.isArray(v) ? v : [v];
  }

  @Input() morphTargetInfluences?: number[];
  @Input() morphTargetDictionary?: { [key: string]: number };

  #contentMaterialController: NgtContentMaterialController;
  #contentGeometryController: NgtContentGeometryController;

  constructor(
    ngZone: NgZone,
    @Inject(NGT_OBJECT_WATCHED_CONTROLLER)
    public objectController: NgtObject3dController,
    @Inject(NGT_OBJECT_TYPE)
    public objectType: AnyConstructor<THREE.Object3D>,
    @Inject(NGT_OBJECT_POST_INIT)
    public objectPostInit: AnyExtenderFunction<THREE.Object3D> | undefined,
    @Inject(NGT_CONTENT_MATERIAL_WATCHED_CONTROLLER)
    contentMaterialController: NgtContentMaterialController,
    @Inject(NGT_CONTENT_GEOMETRY_WATCHED_CONTROLLER)
    contentGeometryController: NgtContentGeometryController
  ) {
    super(ngZone);

    this.#contentMaterialController =
      contentMaterialController.contentMaterialController ??
      contentMaterialController;
    this.#contentGeometryController =
      contentGeometryController.contentGeometryController ??
      contentGeometryController;

    objectController.initFn = () => {
      if (!this.#contentGeometryController.geometry) {
        this.#contentGeometryController.construct();
      }

      if (!this.#contentMaterialController.material) {
        this.#contentMaterialController.construct();
      }

      const object = new this.objectType(
        this.#contentGeometryController.geometry || undefined,
        this.#contentMaterialController.material || undefined,
        ...this.#meshArgs
      );

      if (this.morphTargetDictionary && 'morphTargetDictionary' in object) {
        (object as unknown as UnknownRecord).morphTargetDictionary =
          this.morphTargetDictionary;
      }

      if (this.morphTargetInfluences && 'morphTargetInfluences' in object) {
        (object as unknown as UnknownRecord).morphTargetInfluences =
          this.morphTargetInfluences;
      }

      if (this.objectPostInit) {
        this.objectPostInit(object);
      }

      return object;
    };
  }

  ngOnInit() {
    super.ngOnInit();
    this.ngZone.runOutsideAngular(() => {
      this.objectController.init();
    });
  }

  get controller(): Controller | undefined {
    return undefined;
  }

  get props(): string[] {
    return [];
  }
}

@NgModule({
  declarations: [NgtMaterialGeometryController],
  exports: [NgtMaterialGeometryController],
})
export class NgtMaterialGeometryControllerModule {}

export const [
  NGT_MATERIAL_GEOMETRY_WATCHED_CONTROLLER,
  NGT_MATERIAL_GEOMETRY_CONTROLLER_PROVIDER,
] = createControllerProviderFactory({
  watchedControllerTokenName: 'Watched MaterialGeometryController',
  controller: NgtMaterialGeometryController,
});
