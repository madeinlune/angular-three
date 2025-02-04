// GENERATED
import {
  NGT_OBJECT_3D_CONTROLLER_PROVIDER,
  NGT_OBJECT_3D_WATCHED_CONTROLLER,
  NgtCoreModule,
  NgtObject3dController,
} from '@angular-three/core';
import { NgtIcosahedronGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtSobaExtender } from '@angular-three/soba';
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
  selector: 'ngt-soba-icosahedron',
  exportAs: 'ngtSobaIcosahedron',
  template: `
    <ngt-mesh
      (ready)="ready.emit($event)"
      (animateReady)="animateReady.emit($event)"
      [object3dController]="object3dController"
      [material]="material?.material"
    >
      <ngt-icosahedron-geometry *ngIf="args;else withoutArgs" [args]="args"></ngt-icosahedron-geometry>
      <ng-template #withoutArgs>
        <ngt-icosahedron-geometry></ngt-icosahedron-geometry>
      </ng-template>
    </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NGT_OBJECT_3D_CONTROLLER_PROVIDER],
})
export class NgtSobaIcosahedron extends NgtSobaExtender<THREE.Mesh> {
  @Input() args?: ConstructorParameters<typeof THREE.IcosahedronGeometry>;

  constructor(
    @Inject(NGT_OBJECT_3D_WATCHED_CONTROLLER)
    public object3dController: NgtObject3dController
  ) {
    super();
  }
}

@NgModule({
  declarations: [NgtSobaIcosahedron],
  exports: [NgtSobaIcosahedron],
  imports: [CommonModule, NgtCoreModule, NgtMeshModule, NgtIcosahedronGeometryModule],
})
export class NgtSobaIcosahedronModule {}
