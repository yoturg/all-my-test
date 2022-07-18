import { bb } from './dep1/index';
import { cc, dd } from './dep2/index';

const yy = function () {};

function zz() {
  bb();
  cc();
}

zz();