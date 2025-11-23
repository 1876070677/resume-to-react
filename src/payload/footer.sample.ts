import type { FooterType } from '@/common/type/Common';

import { homepage, version } from '../../package.json';

const footer: FooterType = {
  disable: false,
  version,
  github: homepage,
};

export default footer;
