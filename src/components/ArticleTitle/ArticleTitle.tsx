import React, { ComponentProps } from 'react';
import styles from './ArticleTitle.module.scss';

interface ArticleTitleProps extends ComponentProps<'h1'> {}

/**
 * Main title for use in portfolio articles.
 */
export const ArticleTitle = ({ children }: ArticleTitleProps) => (
	<h1 className={styles.ArticleTitle}>{children}</h1>
);
