// GENERATED
import {
  NgtCommonAudio,
  NGT_AUDIO_CONTROLLER_PROVIDER,
  NGT_OBJECT_CONTROLLER_PROVIDER,
} from '@angular-three/core';
import { NgModule, Directive } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'ngt-positional-audio',
  exportAs: 'ngtPositionalAudio',
  providers: [
    {
      provide: NgtCommonAudio,
      useExisting: NgtPositionalAudio,
    },
    NGT_AUDIO_CONTROLLER_PROVIDER,
    NGT_OBJECT_CONTROLLER_PROVIDER,
  ],
})
export class NgtPositionalAudio extends NgtCommonAudio<
  PannerNode,
  THREE.PositionalAudio
> {
  audioType = THREE.PositionalAudio;
}

@NgModule({
  declarations: [NgtPositionalAudio],
  exports: [NgtPositionalAudio],
})
export class NgtPositionalAudioModule {}
