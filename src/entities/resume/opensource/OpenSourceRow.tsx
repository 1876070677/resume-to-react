import type { RowElement } from '@/common/type/Common';
import type { OpenSourceItem, OpenSourceType } from '@/common/type/resume/OpenSource';
import { CommonRows } from '@/entities/resume/common/CommonRow';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';

function serialize(item: OpenSourceItem): RowElement {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}

export default function OpenSourceRow({ payload }: { payload: OpenSourceType }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={item.key} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}
