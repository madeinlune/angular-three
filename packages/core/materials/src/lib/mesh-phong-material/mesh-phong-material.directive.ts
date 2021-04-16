import { Directive } from '@angular/core';
import { MeshPhongMaterial, MeshPhongMaterialParameters } from 'three';
import { ThreeMaterial } from '../abstracts';

@Directive({
  selector: 'ngt-meshPhongMaterial',
  exportAs: 'ngtMeshPhongMaterial',
  providers: [
    { provide: ThreeMaterial, useExisting: MeshPhongMaterialDirective },
  ],
})
export class MeshPhongMaterialDirective extends ThreeMaterial<
  MeshPhongMaterial,
  MeshPhongMaterialParameters,
  typeof MeshPhongMaterial
> {
  static ngAcceptInputType_parameters: MeshPhongMaterialParameters;

  materialType = MeshPhongMaterial;
}