import dayjs, { Dayjs } from 'dayjs';

import type { ExperienceItem, PositionWithDates } from '@/common/type/resume/Experience';
import Row from '@/entities/resume/common/Row';
import Col from '@/entities/resume/common/Col';
import Badge from '@/entities/resume/common/Badge';
import { SkillKeywords } from '@/entities/resume/experience/SkillKeywords';
import { dayjsMax, dayjsMin, getFormattingDuration, OverallWorkingPeriod, WorkingPeriod } from '@/features/Experience';

export function ExperienceRow({ item, index }: { item: ExperienceItem; index: number }) {
  const positionsWithDates: PositionWithDates[] = item.positions.map((position) => ({
    ...position,
    startedAtDate: dayjs(position.startedAt, 'YYYY-MM'),
    endedAtDate: position.endedAt
      ? dayjs(position.endedAt, 'YYYY-MM')
      : null,
    isCurrent: !position.endedAt,
  }));

  const sortedPositions = positionsWithDates
    .slice()
    .sort((a, b) => b.startedAtDate.valueOf() - a.startedAtDate.valueOf());

  const minStartedAt = dayjsMin(...sortedPositions.map((position) => position.startedAtDate));
  const isCurrentlyEmployed = sortedPositions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: Dayjs } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = sortedPositions
    .filter(hasEndedAtDate)
    .map((position) => position.endedAtDate);

  let maxEndedAt: Dayjs;
  if (isCurrentlyEmployed) {
    maxEndedAt = dayjs();
  } else if (endedAtDates.length > 0) {
    maxEndedAt = dayjsMax(...endedAtDates);
  } else {
    maxEndedAt = dayjs();
  }

  const periodTitle = OverallWorkingPeriod(sortedPositions);
  const hasMultiplePositions = sortedPositions.length > 1;

  return (
    <div>
      {index > 0 && <hr className="border border-black/10 mt-[1.5rem] mb-[1rem]" />}
      {/* 최상위 Row: 전체 재직 기간과 회사명 표시 */}
      <Row className="grid-cols-12">
        <Col className="col-span-12 md:col-span-3 md:text-right">
          <h4 className="text-gray">{periodTitle}</h4>
        </Col>
        <Col className="col-span-12 md:col-span-9">
          <h4 className="flex items-center text-graydeepdark">
            {item.title}
            {' '}
            <span className="flex itmes-center">
              {isCurrentlyEmployed && (
                <Badge className="ml-1 text-white bg-bluelight rounded-sm">
                  재직 중
                </Badge>
              )}
              <Badge color="info" className="ml-1 text-white bg-greendeep rounded-sm">
                {getFormattingDuration(minStartedAt, maxEndedAt)}
              </Badge>
            </span>
          </h4>
        </Col>
      </Row>

      {sortedPositions.map((position) => (
        <Row key={position.key} className="grid-cols-12 mt-2">
          <Col className="col-span-12 md:col-span-3 text-md-right">
            {hasMultiplePositions && (
              <span className="text-gray">
                {WorkingPeriod(position.startedAtDate, position.endedAtDate)}
              </span>
            )}
          </Col>
          <Col className="col-span-12 md:col-span-9">
            <i className="text-gray">{position.title}</i>
            <ul className="pt-2 pl-[40px] mb-3">
              {position.descriptions.map((description, descIndex) => (
                /* eslint-disable react/no-array-index-key */
                <li className="list-disc" key={descIndex.toString()}>{description}</li>
              ))}
              <SkillKeywords skillKeywords={position.skillKeywords} />
            </ul>
          </Col>
        </Row>
      ))}
    </div>
  );
}
