// GENERATED
import { NgtTexture } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'ngt-compressed-texture',
  exportAs: 'ngtCompressedTexture',
  providers: [
    {
      provide: NgtTexture,
      useExisting: NgtCompressedTexture,
    },
  ],
})
export class NgtCompressedTexture extends NgtTexture<THREE.CompressedTexture> {
  
  static ngAcceptInputType_args: ConstructorParameters<typeof THREE.CompressedTexture> | undefined;

  @Input() set args(v: ConstructorParameters<typeof THREE.CompressedTexture>) {
    this.extraArgs = v;
  }

  textureType = THREE.CompressedTexture;
}
