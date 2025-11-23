import * as React from 'react';

import { cn } from '@/features/Util';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  // 별도의 props는 모두 제거하고, className과 children만 중요합니다.
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, children, ...props }, ref) => (
  <span
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    ref={ref}
    className={cn(
      'font-bold text-[12px] px-[4px] py-[3px] rounded-md flex-shrink-0',
      className,
    )}
  >
    {children}
  </span>
));

Badge.displayName = 'Badge';

export default Badge;
