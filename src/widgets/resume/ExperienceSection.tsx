// import ExperienceRow from './row';

import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';
import Row from '@/entities/resume/common/Row';
import Col from '@/entities/resume/common/Col';
import type { ExperienceType } from '@/common/type/resume/Experience';
import Badge from '@/entities/resume/common/Badge';
import { getFormattingExperienceTotalDuration } from '@/features/Experience';
import { ExperienceRow } from '@/entities/resume/experience/ExperienceRow';

interface PropsForExperience {
  id?: string;
  payload: ExperienceType;
}

export function ExperienceSection({ id, payload }: PropsForExperience) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span className="pl-3">
        <Badge className="bg-graydeep text-white">{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  return (
    !payload.disable && (
      <div id={id} className="mt-5">
        <EmptyRowCol>
          <Row className="pb-3">
            <Col>
              <h2 className="text-blue">
                EXPERIENCE
                {totalPeriod()}
              </h2>
            </Col>
          </Row>
          {payload.list.map((item, index) => (
            <ExperienceRow key={item.key} item={item} index={index} />
          ))}
        </EmptyRowCol>
      </div>
    )
  );
}
