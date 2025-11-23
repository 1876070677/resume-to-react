import { useEffect, useState } from 'react';

import type { Skill } from '@/common/type/resume/Skill';
import { CalculatedSkillItems } from '@/entities/resume/skill/CalculatedSkillItems';
import Row from '@/entities/resume/common/Row';
import Col from '@/entities/resume/common/Col';

export default function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    setIsMobileScreen(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {skill.items.length > 0 && (
        <div>
          {index > 0 ? <hr className="border border-black/10" /> : ''}
          <Row className="grid-cols-12">
            <Col className="col-span-12 md:col-span-3 mt-4">
              <h4 className="text-gray md:text-right">{skill.category}</h4>
            </Col>
            <Col className="col-span-12 md:col-span-9 pl-10 mb-3 md:mb-0">
              <CalculatedSkillItems items={skill.items} isVerticalScreen={isMobileScreen} />
              {' '}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
