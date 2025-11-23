import type { Item } from '@/common/type/resume/Skill';
import Col from '@/entities/resume/common/Col';
import Row from '@/entities/resume/common/Row';
import { SkillBadge } from '@/entities/resume/skill/SkillBadge';

export function CalculatedSkillItems({ items, isVerticalScreen }: { items: Item[], isVerticalScreen: boolean }) {
  const layer = 3;

  // const splitPoint = layer % 2 ? Math.ceil(items.length / layer) : Math.floor(items.length / layer);
  const splitPoint = Math.ceil(items.length / layer);

  const list: Item[][] = [];

  for (let i = 0, splitAfter = splitPoint; i < layer; i += 1, splitAfter += splitPoint) {
    list.push(items.slice(splitAfter - splitPoint, i === layer - 1 ? undefined : splitAfter));
  }

  if (isVerticalScreen) {
    return (
      <Row className="mt-2 md:mt-0">
        <Col className="col-span-12">
          <ul>
            {items.map((skill) => (
              <li key={skill.key} className="list-disc">
                <SkillBadge level={skill.level} />
                {skill.title}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="grid-cols-12 mt-3 mb-[35px]">
      {list.map((skills, index) => (
        /* eslint-disable react/no-array-index-key */
        <Col className="col-span-12 md:col-span-4" key={index.toString()}>
          <ul className="pl-[40px]">
            {skills.map((skill) => (
              <li key={skill.key} className="text-left list-disc">
                <SkillBadge level={skill.level} />
                {skill.title}
              </li>
            ))}
          </ul>
        </Col>
      ))}
    </Row>
  );
}
