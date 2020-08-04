import React from 'react';
import generalStyles from './PortfolioArticle.module.css';

export default ({ href, children }) => {
	return (
		<>
			{' '}
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				className={generalStyles.showLink}>
				{children}
			</a>{' '}
		</>
	);
};
