import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';
import { SkillTooltip } from '@/entities/resume/skill/SkillTooltip';
import SkillRow from '@/entities/resume/skill/SkillRow';
import Col from '@/entities/resume/common/Col';
import Row from '@/entities/resume/common/Row';
import type { SkillType } from '@/common/type/resume/Skill';

interface PropsForSkill {
  id?: string;
  payload: SkillType;
}

export function SkillSection({ id, payload }: PropsForSkill) {
  const { tooltip } = payload;
  return (
    !payload.disable && (
      <div id={id} className="mt-[3rem]">
        <EmptyRowCol>
          <Row className="grid-cols-12 pb-3">
            <Col className="col-span-12">
              <h2 className="text-left">
                <span className="text-blue">SKILL</span>
                <SkillTooltip content={tooltip} />
              </h2>
            </Col>
          </Row>
          {payload.skills.map((skill, index) => (
            /* eslint-disable react/no-array-index-key */
            <SkillRow key={skill.category} skill={skill} index={index} />
          ))}
        </EmptyRowCol>
      </div>
    )
  );
}
