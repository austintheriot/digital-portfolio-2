
import React, { ComponentProps } from 'react';
import styles from './ArticleHeading.module.scss';

interface ArticleHeadingProps extends ComponentProps<'h3'> {}

/**
 * Section heading for use in portfolio articles.
 */
export const ArticleHeading = ({ children }: ArticleHeadingProps) => (
	<h3 className={styles.ArticleHeading}>{children}</h3>
);
