
import React, { ComponentProps } from 'react';
import styles from './ArticleParagraph.module.scss';

interface ArticleParagraphProps extends ComponentProps<'p'> {}

/**
 * Section heading for use in portfolio articles.
 */
export const ArticleParagraph = ({ children }: ArticleParagraphProps) => (
	<p className={styles.ArticleParagraph}>{children}</p>
);
