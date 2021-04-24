// GENERATED

import { Directive, Input } from '@angular/core';
import { VideoTexture } from 'three';
import { ThreeTexture } from '../abstracts';

@Directive({
  selector: 'ngt-videoTexture',
  exportAs: 'ngtVideoTexture',
  providers: [
    {
      provide: ThreeTexture,
      useExisting: VideoTextureDirective,
    },
  ],
})
export class VideoTextureDirective extends ThreeTexture<VideoTexture> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof VideoTexture>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof VideoTexture>) {
    this.extraArgs = v;
  }

  textureType = VideoTexture;
}