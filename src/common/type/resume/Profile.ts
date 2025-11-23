import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import type { Payload } from '@/common/type/Common';

export interface ProfileType extends Payload {
  image: string;
  name: {
    title: string;
    small?: string;
  };
  contacts: ContactType[];
  notice: {
    title: string;
    icon?: IconDefinition;
  };
}

export interface ContactType {
  key: number;
  icon: IconDefinition;
  title?: string;
  link?: string;
  badge?: true;
}
