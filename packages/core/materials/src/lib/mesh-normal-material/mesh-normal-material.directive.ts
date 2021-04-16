import { Directive } from '@angular/core';
import { MeshNormalMaterial, MeshNormalMaterialParameters } from 'three';
import { ThreeMaterial } from '../abstracts';

@Directive({
  selector: 'ngt-meshNormalMaterial',
  exportAs: 'ngtMeshNormalMaterial',
  providers: [
    { provide: ThreeMaterial, useExisting: MeshNormalMaterialDirective },
  ],
})
export class MeshNormalMaterialDirective extends ThreeMaterial<
  MeshNormalMaterial,
  MeshNormalMaterialParameters,
  typeof MeshNormalMaterial
> {
  static ngAcceptInputType_parameters: MeshNormalMaterialParameters;

  materialType = MeshNormalMaterial;
}