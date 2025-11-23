import * as React from 'react';

import { cn } from '@/features/Util';

// 불필요한 모든 타입(Breakpoint, SpanAttr, ColSpec) 제거
export interface ColProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Col = React.forwardRef<HTMLElement, ColProps>(({ as: Component = 'div', className, ...restProps }, ref) => (
  <Component
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...restProps}
    ref={ref}
    className={cn(
      'px-2 flex-shrink-0',
      className,
    )}
  />
));

Col.displayName = 'Col';

export default Col;
