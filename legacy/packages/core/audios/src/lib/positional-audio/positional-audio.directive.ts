// GENERATED

import { NgtCommonAudio, NgtObject3d, NGT_AUDIO_CONTROLLER_PROVIDER } from '@angular-three/core';
import { NgModule, Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'ngt-positional-audio',
  exportAs: 'ngtPositionalAudio',
  providers: [
    {
      provide: NgtCommonAudio,
      useExisting: NgtPositionalAudio,
    },
    {
      provide: NgtObject3d,
      useExisting: NgtPositionalAudio,
    },
    NGT_AUDIO_CONTROLLER_PROVIDER,
  ],
})
export class NgtPositionalAudio extends NgtCommonAudio<PannerNode, THREE.PositionalAudio> {
  

  audioType = THREE.PositionalAudio;
}

@NgModule({
  declarations: [NgtPositionalAudio],
  exports: [NgtPositionalAudio],
})
export class NgtPositionalAudioModule {}

