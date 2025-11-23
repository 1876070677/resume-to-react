import dayjs from 'dayjs';

import type { RowElement } from '@/common/type/Common';
import type { ProjectItem, ProjectType } from '@/common/type/resume/Project';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';
import { CommonRows } from '@/entities/resume/common/CommonRow';

export default function ProjectRow({ payload }: { payload: ProjectType }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => <CommonRows key={item.key} payload={serialize(item)} index={index} />)}
    </EmptyRowCol>
  );
}

function serialize(payload: ProjectItem): RowElement {
  const startedAt = dayjs(payload.startedAt).format('YYYY.MM');
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = dayjs(payload.endedAt).format('YYYY.MM');
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
}
