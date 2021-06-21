import React, { ComponentProps } from 'react';
import styles from './ArticleParagraph.module.scss';

type ArticleParagraphProps = ComponentProps<'p'>

/**
 * Section heading for use in portfolio articles.
 */
export const ArticleParagraph = ({ children }: ArticleParagraphProps) => (
  <p className={styles.ArticleParagraph}>{children}</p>
);
