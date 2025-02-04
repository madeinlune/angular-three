// GENERATED

import { NgtHelper, NgtObject3d, NGT_OBJECT_3D_CONTROLLER_PROVIDER } from '@angular-three/core';
import { NgModule, Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'ngt-plane-helper',
  exportAs: 'ngtPlaneHelper',
  providers: [
    {
      provide: NgtHelper,
      useExisting: NgtPlaneHelper,
    },
    {
      provide: NgtObject3d,
      useExisting: NgtPlaneHelper,
    },
    NGT_OBJECT_3D_CONTROLLER_PROVIDER,
  ],
})
export class NgtPlaneHelper extends NgtHelper<THREE.PlaneHelper> {
  
  static ngAcceptInputType_args: ConstructorParameters<typeof THREE.PlaneHelper> | undefined;

  @Input() set args(v: ConstructorParameters<typeof THREE.PlaneHelper>) {
    this.extraArgs = v;
  }

  helperType = THREE.PlaneHelper;
}

@NgModule({
  declarations: [NgtPlaneHelper],
  exports: [NgtPlaneHelper],
})
export class NgtPlaneHelperModule {}

