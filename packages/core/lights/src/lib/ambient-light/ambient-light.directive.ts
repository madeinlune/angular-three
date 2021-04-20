import { ThreeObject3d } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { AmbientLight } from 'three';
import { ThreeLight } from '../abstracts';

@Directive({
  selector: 'ngt-ambientLight',
  exportAs: 'ngtAmbientLight',
  providers: [{ provide: ThreeObject3d, multi: true, useExisting: AmbientLightDirective }],
})
export class AmbientLightDirective extends ThreeLight<AmbientLight> {
  @Input() set args(v: ConstructorParameters<typeof AmbientLight>) {
    this.extraArgs = v;
  }

  lightType = AmbientLight;
}
