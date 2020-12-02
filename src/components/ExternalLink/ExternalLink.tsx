import React, { useRef } from 'react';
import { analytics } from '../../config';

export const ExternalLink = (props: {
	children: string | JSX.Element;
	to: string;
	className?: string;
}) => {
	const anchor = useRef<HTMLAnchorElement | null>(null);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		anchor: React.MutableRefObject<HTMLAnchorElement | null>
	) => {
		if (anchor == null) return;
		const href = anchor.current?.href;
		analytics.logEvent('external_link_clicked', {
			href,
		});
	};

	return (
		<a
			style={{ textDecoration: 'underline' }}
			href={props.to}
			ref={anchor}
			onClick={(e) => handleClick(e, anchor)}
			rel='noreferrer noopener'
			className={props.className || ''}>
			{props.children}
		</a>
	);
};
