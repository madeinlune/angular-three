// GENERATED
import { NgtLight, NGT_OBJECT_CONTROLLER_PROVIDER } from '@angular-three/core';
import { NgModule, Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'ngt-directional-light',
  exportAs: 'ngtDirectionalLight',
  providers: [
    {
      provide: NgtLight,
      useExisting: NgtDirectionalLight,
    },
    NGT_OBJECT_CONTROLLER_PROVIDER,
  ],
})
export class NgtDirectionalLight extends NgtLight<THREE.DirectionalLight> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof THREE.DirectionalLight>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof THREE.DirectionalLight>) {
    this.lightArgs = v;
  }

  lightType = THREE.DirectionalLight;
}

@NgModule({
  declarations: [NgtDirectionalLight],
  exports: [NgtDirectionalLight],
})
export class NgtDirectionalLightModule {}
