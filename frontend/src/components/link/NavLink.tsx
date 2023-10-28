'use client';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  CSSProperties,
  ComponentProps,
  PropsWithChildren,
  useMemo,
} from 'react';

export type NavLinkProps = NextLinkProps &
  PropsWithChildren & {
    styles?: CSSProperties;
    //@ts-ignore
    borderRadius?: ComponentProps<typeof NextLink>['style']['borderRadius'];
  };

function NavLink({ className, children, styles, borderRadius, ...props }: any) {
  const memoizedStyles = useMemo(
    //@ts-ignore
    () => ({
      borderRadius: borderRadius || 0,
      ...styles,
    }),
    [borderRadius, styles],
  );

  return (
    <NextLink className={`${className}`} style={memoizedStyles} {...props}>
      {children}
    </NextLink>
  );
}

export default NavLink;
