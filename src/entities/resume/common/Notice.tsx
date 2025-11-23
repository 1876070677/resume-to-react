import * as React from 'react';

import { cn } from '@/features/Util';

export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  // 별도의 props는 모두 제거하고, className과 children만 중요합니다.
}

const Notice = React.forwardRef<HTMLDivElement, NoticeProps>(({ className, children, ...props }, ref) => (
  <div
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    ref={ref}
    className={cn(
      'bg-graydeeplight text-graydeepdark p-3 rounded shadow-sm',
      className,
    )}
  >
    {children}
  </div>
));

Notice.displayName = 'Alert';

export default Notice;
