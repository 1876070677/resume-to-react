import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import type { ExperienceItem, ExperiencePosition, ExperienceType, PositionWithDates } from '@/common/type/resume/Experience';

dayjs.extend(duration);
dayjs.extend(customParseFormat);

const DURATION_FORMAT = 'Y년 M개월';
const DATE_FORMAT_DOT = 'YYYY.MM';
  
export function getFormattingExperienceTotalDuration(payload: ExperienceType) {
  const durationsInMs: number[] = [];
  
  payload.list.forEach((item: ExperienceItem) => {
    item.positions.forEach((position: ExperiencePosition) => {
      const endedAtDayjs = position.endedAt
        ? dayjs(position.endedAt, DATE_FORMAT_DOT)
        : dayjs();
        
      const startedAtDayjs = dayjs(position.startedAt, DATE_FORMAT_DOT);

      if (!startedAtDayjs.isValid() || !endedAtDayjs.isValid()) {
        console.warn(`Invalid date format detected for: ${position.startedAt} to ${position.endedAt}`);
        return; 
      }
      
      const diffMs = endedAtDayjs.diff(startedAtDayjs, 'millisecond');

      if (diffMs > 0) {
        durationsInMs.push(diffMs);
      }
    });
  });

  const totalMs = durationsInMs.reduce(
    (total: number, current: number) => total + current,
    0,
  );

  const totalExperienceDuration = dayjs.duration(totalMs);
  const formattedDuration = totalExperienceDuration.format(DURATION_FORMAT);
  return `총 ${formattedDuration}`;
}

export function getFormattingDuration(from: Dayjs, to: Dayjs = dayjs()) {
  const DURATION_KINDNESS_ONLY_YEAR = 'Y년';
  const DURATION_KINDNESS_ONLY_MONTH = 'M개월';

  const includedTo = to.add(1, 'month');
  const totalMonths = includedTo.diff(from, 'month');

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let format;
  if (years > 0 && months === 0) {
    format = DURATION_KINDNESS_ONLY_YEAR;
  } else if (years === 0 && months > 0) {
    format = DURATION_KINDNESS_ONLY_MONTH;
  } else {
    format = DURATION_FORMAT;
  }

  const diffDuration = dayjs.duration({ years, months });

  return diffDuration.format(format);
}

export function OverallWorkingPeriod(positions: PositionWithDates[]) {
  const startedAt = positions.length > 0
    ? positions[positions.length - 1].startedAtDate
    : dayjs();

  const isCurrentlyEmployed = positions.some((position) => position.isCurrent);

  if (isCurrentlyEmployed) {
    return `${startedAt.format(DATE_FORMAT_DOT)} ~`;
  }

  function hasEndedAtDate(position: PositionWithDates): position is PositionWithDates & { endedAtDate: Dayjs } {
    return position.endedAtDate !== null && position.endedAtDate !== undefined;
  }

  const endedAtDates = positions.filter(hasEndedAtDate).map((position) => position.endedAtDate);
  let endedAt: Dayjs;
  const maxDateResult = dayjsMax(...endedAtDates);

  if (maxDateResult) {
    endedAt = maxDateResult;
  } else {
    endedAt = dayjs();
  }

  return `${startedAt.format(DATE_FORMAT_DOT)} ~ ${endedAt.format(DATE_FORMAT_DOT)}`;
}

export function WorkingPeriod(startedAt: Dayjs, endedAt?: Dayjs | null) {
  if (!endedAt) {
    return `${startedAt.format(DATE_FORMAT_DOT)} ~`;
  }

  return `${startedAt.format(DATE_FORMAT_DOT)} ~ ${endedAt.format(DATE_FORMAT_DOT)}`;
}

export function dayjsMin(...dates: Dayjs[]): Dayjs { 
  if (dates.length === 0) {
    return dayjs(null); 
  }
    
  return dates.reduce(
    (minDate, current) => (current.isBefore(minDate) ? current : minDate),
    dates[0],
  ); 
}

export function dayjsMax(...dates: Dayjs[]) { 
  if (dates.length === 0) {
    return dayjs(null); 
  }
    
  return dates.reduce(
    (maxDate, current) => (current.isAfter(maxDate) ? current : maxDate),
    dates[0],
  ); 
}
