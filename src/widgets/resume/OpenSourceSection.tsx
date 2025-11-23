import type { OpenSourceType } from '@/common/type/resume/OpenSource';
import { CommonSection } from '@/entities/resume/common/CommonSection';
import OpenSourceRow from '@/entities/resume/opensource/OpenSourceRow';

interface PropsForOpenSource {
  id?: string;
  payload: OpenSourceType;
}

export function OpenSourceSection({ id, payload }: PropsForOpenSource) {
  return (
    !payload.disable && (
      <div id={id}>
        <CommonSection title="OPEN SOURCE">
          <OpenSourceRow payload={payload} />
        </CommonSection>
      </div>
    )
  );
}
