import React, { ComponentProps, useRef } from 'react';
import { analytics } from '../../config';

interface ExternalLinkProps extends ComponentProps<'a'> {
	to: string;
	underline?: boolean;
}

export const ExternalLink = ({
  to,
  href,
  className,
  underline,
  children,
}: ExternalLinkProps) => {
  const anchor = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    anchor: React.MutableRefObject<HTMLAnchorElement | null>,
  ) => {
    if (anchor == null) return;
    const href = anchor.current?.href;
    analytics.logEvent('external_link_clicked', {
      href,
    });
  };

  return (
    <a
      style={{
			  textDecoration: underline ? 'underline' : 'none',
      }}
      href={to || href}
      ref={anchor}
      onClick={(e) => handleClick(e, anchor)}
      rel="noopener noreferrer"
      target="_blank"
      className={className || ''}
    >
      {children}
    </a>
  );
};
