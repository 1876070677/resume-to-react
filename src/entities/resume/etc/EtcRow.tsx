import dayjs from 'dayjs';
import type { RowElement } from '@/common/type/Common';
import type { EtcItem, EtcType } from '@/common/type/resume/Etc';
import { CommonRows } from '@/entities/resume/common/CommonRow';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';

export function EtcRow({ payload }: { payload: EtcType }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => <CommonRows key={item.key} payload={serialize(item)} index={index} />)}
    </EmptyRowCol>
  );
}

function serialize(item: EtcItem): RowElement {
  const startedAt = dayjs(item.startedAt).format('YYYY.MM');
  const title = (() => {
    if (item.endedAt) {
      const endedAt = dayjs(item.endedAt).format('YYYY.MM');
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      ...item,
    },
  };
}
