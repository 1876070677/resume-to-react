import type { EducationType } from '@/common/type/resume/Education';
import { CommonSection } from '@/entities/resume/common/CommonSection';
import { EducationRow } from '@/entities/resume/education/EducationRow';

interface PropsForEducation {
  id?: string;
  payload: EducationType;
}

export function EducationSection({ id, payload }: PropsForEducation) {
  return (
    !payload.disable && (
      <div id={id}>
        <CommonSection title="EDUCATION">
          <EducationRow payload={payload} />
        </CommonSection>
      </div>
    )
  );
}
