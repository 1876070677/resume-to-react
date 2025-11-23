import { CommonSection } from '@/entities/resume/common/CommonSection';
import ProjectRow from '@/entities/resume/project/ProjectRow';
import type { ProjectType } from '@/common/type/resume/Project';

interface PropsForProject {
  id?: string;
  payload: ProjectType;
}

export function ProjcecSection({ id, payload }: PropsForProject) {
  return (
    !payload.disable && (
      <div id={id}>
        <CommonSection title="PROJECT">
          <ProjectRow payload={payload} />
        </CommonSection>
      </div>
    )
  );
}
