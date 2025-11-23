import { CommonSection } from '@/entities/resume/common/CommnSection';
import ProjectRow from '@/entities/resume/project/ProjectRow';
import type { ProjectType } from '@/common/type/resume/Project';

export function ProjcecSection({ payload }: { payload: ProjectType }) {
  return (
    !payload.disable && (
      <CommonSection title="PROJECT">
        <ProjectRow payload={payload} />
      </CommonSection>
    )
  );
}
