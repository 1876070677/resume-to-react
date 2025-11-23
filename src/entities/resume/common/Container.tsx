import React from 'react';

import { cn } from '@/features/Util';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType | undefined;
}

const Container = React.forwardRef<HTMLElement, ContainerProps>(({ as: Component = 'div', className, ...props }, ref) => (
  <Component
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={cn('w-full md:px-4 sm:max-w-xl md:max-w-6xl 2xl:max-w-7xl mx-auto', className)}
  />
));

Container.displayName = 'Container';

export default Container;
