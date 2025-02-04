import { installPackagesTask, Tree } from '@nrwl/devkit';
import controlEntityGenerator from './generators/control-entity/control-entity.generator';
import coreEntityGenerator from './generators/core-entity/core-entity.generator';
import passEntityGenerator from './generators/pass-entity/pass-entity.generator';
import physicBodyEntityGenerator from './generators/physic-body-entity/physic-body-entity.generator';
import physicConstraintEntityGenerator from './generators/physic-constraint-entity/physic-constraint-entity.generator';
import sobaShapeEntityGenerator from './generators/soba-shape-entity/soba-shape-entity.generator';

export default async function (tree: Tree) {
  await Promise.all([
    sobaShapeEntityGenerator(tree),
    coreEntityGenerator(tree),
    controlEntityGenerator(tree),
    passEntityGenerator(tree),
    physicBodyEntityGenerator(tree),
    physicConstraintEntityGenerator(tree),
  ]);
  return () => {
    installPackagesTask(tree);
  };
}
