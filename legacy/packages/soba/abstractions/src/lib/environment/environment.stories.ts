import { NgtOrbitControlsModule } from '@angular-three/controls/orbit-controls';
import { NgtCoreModule } from '@angular-three/core';
import { NgtTorusKnotGeometryModule } from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtPointLightModule,
} from '@angular-three/core/lights';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtStatsModule } from '@angular-three/core/stats';
import { presetsObj } from '@angular-three/soba';
import { setupCanvas } from '@angular-three/storybook';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import {
  NgtSobaEnvironment,
  NgtSobaEnvironmentModule,
} from './environment.directive';

export default {
  title: 'Abstractions/Environment',
  component: NgtSobaEnvironment,
  decorators: [
    componentWrapperDecorator(
      setupCanvas({ controls: false, cameraPosition: [0, 0, 10] })
    ),
    moduleMetadata({
      imports: [
        NgtCoreModule,
        NgtSobaEnvironmentModule,
        NgtMeshModule,
        NgtTorusKnotGeometryModule,
        NgtMeshStandardMaterialModule,
        NgtOrbitControlsModule,
        NgtAmbientLightModule,
        NgtPointLightModule,
        NgtStatsModule,
      ],
    }),
  ],
  argTypes: {
    preset: {
      options: Object.keys(presetsObj),
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<NgtSobaEnvironment> = (args) => {
  return {
    props: args,
    template: `
      <ngt-mesh>
        <ngt-torus-knot-geometry [args]='[1, 0.5, 128, 32]'></ngt-torus-knot-geometry>
        <ngt-mesh-standard-material [parameters]='{metalness: 1, roughness: 0}'></ngt-mesh-standard-material>
      </ngt-mesh>

      <ngt-soba-environment [preset]='preset' [background]='background'></ngt-soba-environment>

      <ngt-orbit-controls
        (ready)='$event.autoRotate = true;'
        (animateReady)='$event.animateObject.update()'>
      </ngt-orbit-controls>
  `,
  };
};

Default.args = {
  preset: 'sunset',
  background: true,
};
