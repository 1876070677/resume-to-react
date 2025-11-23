import dayjs from 'dayjs';

import type { IntroduceType } from '@/common/type/resume/Introduce';
import Row from '@/entities/resume/common/Row';
import Col from '@/entities/resume/common/Col';
import Badge from '@/entities/resume/common/Badge';

interface PropsForIntroduce {
  id?: string;
  payload: IntroduceType;
}

export function IntroduceSection({ id, payload }: PropsForIntroduce) {
  const { contents, sign, latestUpdated } = payload;
  const now = dayjs();
  const updatedDate = dayjs(latestUpdated); 
  const latestUpdatedByNow = now.diff(updatedDate, 'day');

  return (
    !payload.disable && (
      <div id={id} className="mt-[3rem]">
        <Row className="grid-cols-12 px-2">
          <Col className="col-span-12 md:col-span-3">
            <h2 className="text-blue text-left break-all whitespace-normal leading-none">INTRODUCE</h2>
          </Col>
          <Col className="col-span-12 md:col-span-9">
            {contents.map((content, index) => {
              const highlighted = content.split(/(\d+)/g);
              return (
                /* eslint-disable react/no-array-index-key */
                <p key={index}>
                  {highlighted.map((part, i) => (/\d+/.test(part) ? (
                    <span key={i} className="font-semibold">
                      {part}
                    </span>
                  ) : (
                    part
                  )))}
                </p>
              );
            })}
            <p className="text-right">
              <small>Latest Updated</small>
              {' '}
              <Badge className="bg-graydeep text-white">
                {`${updatedDate.format('YYYY-MM-DD')} (D+${latestUpdatedByNow})`}
              </Badge>
            </p>
            <p className="text-right font-parisienne text-[1.5em]">
              {sign}
            </p>
          </Col>
        </Row>
      </div>
    )
  );
}
