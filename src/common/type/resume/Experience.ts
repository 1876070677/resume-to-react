import type { Dayjs } from 'dayjs';

import type { Payload } from '@/common/type/Common';

export interface ExperienceType extends Payload {
  list: ExperienceItem[];
  disableTotalPeriod?: boolean;
}

export interface ExperienceItem {
  key: number;
  title: string;
  positions: ExperiencePosition[];
}

export interface ExperiencePosition {
  key: number;
  title: string;
  startedAt: string;
  endedAt?: string;
  descriptions: string[];
  skillKeywords?: string[];
}

export type PositionWithDates = ExperiencePosition & {
  startedAtDate: Dayjs;
  endedAtDate: Dayjs | null;
  isCurrent: boolean;
};
