import { breakpoints, type Breakpoint } from 'glamui-react';
import { useMediaQuery } from './useMediaQuery';

export function useBreakpoint(bp: Breakpoint) {
  const minWidth = breakpoints[bp];
  return useMediaQuery(`(min-width: ${minWidth}px)`);
}
