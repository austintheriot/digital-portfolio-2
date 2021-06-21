import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioProjectIds, Routes } from 'types';

interface InternalLinkProps extends ComponentPropsWithRef<'a'> {
  /**
   * Allow any valid string, not just the strict enum type itself.
   * Requires more flexibility, since the Portfolio page uses a lot of ids
   * for smooth scrolling, etc.
   */
  to: `${Routes}` | `/#${PortfolioProjectIds}`,
}

/**
 * Wrapper around Link to provide autocomplete/type validation of local routes.
 */
const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>((props, ref) => (
  <Link ref={ref} {...props} />
));

export default InternalLink;
