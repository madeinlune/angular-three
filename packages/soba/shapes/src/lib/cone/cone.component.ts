// GENERATED
import {
  NGT_CONTENT_MATERIAL_CONTROLLER_PROVIDER,
  NGT_CONTENT_MATERIAL_WATCHED_CONTROLLER,
  NGT_OBJECT_INPUTS_CONTROLLER_PROVIDER,
  NGT_OBJECT_INPUTS_WATCHED_CONTROLLER,
  NgtContentMaterialController,
  NgtCoreModule,
  NgtObject3dInputsController,
  NgtSobaExtender,
} from '@angular-three/core';
import { NgtConeGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  NgModule,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'ngt-soba-cone',
  template: `
    <ngt-mesh
      #ngtMesh="ngtMesh"
      (ready)="object = ngtMesh.mesh"
      [object3dInputsController]="objectInputsController"
      [contentMaterialController]="contentMaterialController"
    >
      <ngt-cone-geometry
        *ngIf="args; else withoutArgs"
        [args]="args"
      ></ngt-cone-geometry>
      <ng-template #withoutArgs>
        <ngt-cone-geometry></ngt-cone-geometry>
      </ng-template>
    </ngt-mesh>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    NGT_OBJECT_INPUTS_CONTROLLER_PROVIDER,
    NGT_CONTENT_MATERIAL_CONTROLLER_PROVIDER,
    { provide: NgtSobaExtender, useExisting: NgtSobaCone },
  ],
})
export class NgtSobaCone extends NgtSobaExtender<THREE.Mesh> {
  @Input() args?: ConstructorParameters<typeof THREE.ConeGeometry>;

  constructor(
    @Inject(NGT_OBJECT_INPUTS_WATCHED_CONTROLLER)
    public objectInputsController: NgtObject3dInputsController,
    @Inject(NGT_CONTENT_MATERIAL_WATCHED_CONTROLLER)
    public contentMaterialController: NgtContentMaterialController
  ) {
    super();
  }
}

@NgModule({
  declarations: [NgtSobaCone],
  exports: [NgtSobaCone],
  imports: [NgtCoreModule, NgtMeshModule, NgtConeGeometryModule, CommonModule],
})
export class NgtSobaConeModule {}
