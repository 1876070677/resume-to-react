import * as React from 'react';

import { cn } from '@/features/Util';

export interface RowProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType | undefined;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(({ as: Component = 'div', className, ...restProps }, ref) => (
  <Component
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...restProps} 
    className={cn('grid flex-wrap', className)}
  />
));

Row.displayName = 'Row';

export default Row;
